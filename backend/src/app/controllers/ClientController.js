const ClientRepository = require("../repositories/ClientRepository");

class ClientController {
  async index(request, response) {
    const clients = await ClientRepository.findAllNext();
    let clientValuableDistance = [];
    let clientsDistanceValuationSorted = [];
    let nextClients = [];

    clients.map((client) => {
      const coord = client.clientcoord.split(".");
      clientValuableDistance.push({
        email: client.clientemail,
        distance: Number(coord[0]) + Number(coord[1]),
      });
      clientsDistanceValuationSorted.push(Number(coord[0]) + Number(coord[1]));
    });

    for (let i = 0; i < clientsDistanceValuationSorted.length; i++) {
      // sort distance values in asc order
      if (
        clientsDistanceValuationSorted[i] >
        clientsDistanceValuationSorted[i + 1]
      ) {
        let temp = clientsDistanceValuationSorted[i];
        clientsDistanceValuationSorted[i] =
          clientsDistanceValuationSorted[i + 1];
        clientsDistanceValuationSorted[i + 1] = temp;
        i = -1;
      }
    }

    clientsDistanceValuationSorted.map((distance) => {
      clientValuableDistance.map((clientValue) => {
        if (clientValue.distance == distance) {
          nextClients.push(
            ...clients.filter(
              (client) => client.clientemail == clientValue.email
            )
          );
        }
      });
    });

    if (nextClients) {
      return response.status(200).json(nextClients);
    }
    return response.status(404).json("Clients not found");
  }
  async show(request, response) {
    const { clientName, clientEmail, clientTel } = request.body;

    if (clientName || clientEmail || (clientTel && clientTel.length === 11)) {
      if (clientName) {
        const foundClient = await ClientRepository.findByName(clientName);
        if (foundClient) {
          return response.status(200).json(foundClient);
        }
        return response.status(404).json("Client doesn't exist");
      }
      if (clientEmail) {
        const foundClient = await ClientRepository.findByEmail(clientEmail);
        if (foundClient) {
          return response.status(200).json(foundClient);
        }
        return response.status(404).json("Client doesn't exist");
      }
      if (clientTel) {
        const foundClient = await ClientRepository.findByTel(Number(clientTel));
        if (foundClient) {
          return response.status(200).json(foundClient);
        }
        return response.status(404).json("Client doesn't exist");
      }
    }
    return response
      .status(400)
      .json("Give correct data for search, you give null or wrong values.");
  }
  async store(request, response) {
    const { clientName, clientEmail, clientTel, clientCoord } = request.body;

    const searchClient = await ClientRepository.findByEmail(clientEmail);

    if (searchClient) {
      return response
        .status(400)
        .json("Already exists a client with this email.");
    }

    const createClient = await ClientRepository.create(
      clientName,
      clientEmail.toLowerCase(),
      clientTel,
      clientCoord.replace(",", ".")
    );

    if (createClient) {
      return response.status(201).json("Client created.");
    }
    return response
      .status(502)
      .json("Client was not created, try again later.");
  }
}

module.exports = new ClientController();
