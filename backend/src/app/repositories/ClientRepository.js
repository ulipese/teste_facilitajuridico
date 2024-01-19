const db = require("../../database/index");

class ClientRepository {
  async findAllNext() {
    const nextClients = await db.query(
      "SELECT * FROM Client ORDER BY clientCoord ASC"
    );

    return nextClients;
  }
  async findByName(clientName) {
    const [foundClient] = await db.query(
      "SELECT * FROM Client WHERE clientName = $1",
      [clientName]
    );

    return foundClient;
  }
  async findByEmail(clientEmail) {
    const [foundClient] = await db.query(
      "SELECT * FROM Client WHERE clientEmail = $1",
      [clientEmail]
    );

    return foundClient;
  }
  async findByTel(clientTel) {
    const [foundClient] = await db.query(
      "SELECT * FROM Client WHERE clientTel = $1",
      [clientTel]
    );
    return foundClient;
  }
  async create(clientName, clientEmail, clientTel, clientCoord) {
    const createdClient = await db.query(
      "INSERT INTO Client (clientName, clientEmail, clientTel, clientCoord) VALUES ($1, $2, $3, $4)",
      [clientName, clientEmail, clientTel, clientCoord]
    );
    return createdClient;
  }
}

module.exports = new ClientRepository();
