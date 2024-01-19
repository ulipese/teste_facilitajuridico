create database cleanClients;
use database cleanClients;

create table Clients (
  clientName text not null,
  clientEmail text not null,
  clientTel bigint not null,
  clientCoord numeric not null
);
