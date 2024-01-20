# teste_facilitajuridico

## Sumário
- [Design](#design)
- [Requisitos](#requisitos-de-instalação)
- [Como rodar](#como-rodar)
- [Autor](#autor)

## Design
  ### Cadastro de clientes
  ![image](https://github.com/ulipese/teste_facilitajuridico/assets/70922407/ca7d93e0-cd30-4b94-a59b-a8c7b9e3f757)
  ### Busca de clientes
  ![image](https://github.com/ulipese/teste_facilitajuridico/assets/70922407/d0f5bf76-7d03-439b-acd7-8d47a6d604c4)
  ### Mapeamento de clientes mais próximos
  ![image](https://github.com/ulipese/teste_facilitajuridico/assets/70922407/fa963091-348b-4e38-8473-ce931ae1fc70)

## Requisitos de Instalação
  1. É necessário instalar o postgresql, e ter algum sgbd (caso não queira usar o terminal) de postgresql para rodar a query do banco, caso não tenha nenhum dos dois, [instale por aqui](https://www.postgresql.org/download/);
  2. É necessário ter npm e nodejs instalados em sua máquina, caso não tenha, [instale aqui](https://nodejs.org/en/download);
  3. É necessário ter algum editor de código, e um terminal, seja ele integrado ao editor ou não.

## Como rodar
  1. Após instalar, usando o terminal ou o sgbd, crie um banco usando a query que se encontra no diretório backend/src/database/schema.sql deste repositório;
  2. Com a criação do banco, lembre dos seus dados do postgresql para a conexão com a aplicação, clone este repositório (caso ainda não o tenha feito) usando um git clone ou baixando seus arquivos;
  3. Depois de clonar o repositório, usando o editor de sua preferência, abra a pasta do repositório e entre no diretório backend/src/database/index.js, e mude os dados para conexão do banco para os dados de conexão do SEU banco, sendo esses dados: host, port, user, password e database (que já está como "cleanclients", devido a query anterior ter esse nome como o nome do banco);
  4. Após mudar os dados, dê um "npm install" no diretório /backend, com seu terminal, para a inicialização do node e de seus pacotes, além da instalação das dependências;
  5. Depois do passo anterior, usando o terminal, dê um "npm run dev" (pode ser um "npm start", mas com isso o código vai parar de rodar sempre que tiver com um erro, diferente do "npm run dev" que, graças ao pacote nodemon, continua rodando o código e atualiza conforme as edições do mesmo, podendo dar um "rs" no terminal para restartar) no mesmo diretório (/backend), para inicializar a api, após inicializar, caso dê algum erro, leia o erro que provavalmente pode ser um erro de conexão com o banco, corrija-o e prossiga para o próximo passo;
  6. Após o backend rodar sem problemas na localhost:3000, vá para o diretório frontend/clean-clients e dê um "npm install" com o terminal, para instalação das dependências;
  7. Após instalar as dependências, dê um "npm start" no mesmo diretório, e abra o localhost:3001, que é o endereço onde será mostrado o front rodando localmente, no qual já estará tudo funcionando corretamente.
     
## Autor
- Linkedin - [Felipe Sousa](https://www.linkedin.com/in/ulipese)
- Github - [Felipe Sousa](https://www.github.com/ulipese)
- Frontend Mentor - [@ulipese](https://www.frontendmentor.io/profile/ulipese)
