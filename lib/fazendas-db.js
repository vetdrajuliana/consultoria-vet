import Dexie from "dexie";

export const db = new Dexie("GestaoFazendasDB");

db.version(2).stores({
  animais: "++id, identificacao, chipEletronico, raca, sexo, categoria, dataEntrada, idade, idadeMeses, peso, fazenda, fazendaOrigem, lote, piquete, status, observacoes, createdAt",

  fazendas: "++id, nome, createdAt",

  lotes: "++id, nome, fazenda, createdAt",
});

db.version(3).stores({
  animais: "++id, identificacao, chipEletronico, raca, sexo, categoria, dataEntrada, idade, idadeMeses, peso, fazenda, fazendaOrigem, lote, piquete, status, observacoes, createdAt",
  fazendas: "++id, nome, createdAt",
  lotes: "++id, nome, fazenda, createdAt",
  pessoas: "++id, nome, tipo, funcao, telefone, email, documento, cidade, estado, status, createdAt",
});

db.version(4).stores({
  animais: "++id, identificacao, chipEletronico, raca, sexo, categoria, dataEntrada, idade, idadeMeses, peso, fazenda, fazendaOrigem, lote, piquete, status, observacoes, createdAt",
  fazendas: "++id, nome, createdAt",
  lotes: "++id, nome, fazenda, createdAt",
  pessoas: "++id, nome, login, email, funcao, acesso, status, createdAt",
});

db.version(5).stores({
  animais: "++id, identificacao, chipEletronico, raca, sexo, categoria, dataEntrada, idade, idadeMeses, peso, fazenda, fazendaOrigem, lote, piquete, status, observacoes, createdAt",
  fazendas: "++id, nome, createdAt",
  lotes: "++id, nome, fazenda, createdAt",
  pessoas: "++id, nome, login, email, funcao, acesso, status, createdAt",
  fornecedores: "++id, nome, cnpj, email, telefone, tipoProduto, status, createdAt",
});

db.version(6).stores({
  animais: "++id, identificacao, chipEletronico, raca, sexo, categoria, dataEntrada, idade, idadeMeses, peso, fazenda, fazendaOrigem, lote, piquete, status, observacoes, createdAt",
  fazendas: "++id, nome, createdAt",
  lotes: "++id, nome, fazenda, createdAt",
  pessoas: "++id, nome, login, email, funcao, acesso, status, createdAt",
  fornecedores: "++id, nome, cnpj, email, telefone, tipoProduto, status, createdAt",
  insumos: "++id, nome, tipo, status, createdAt",
});

db.version(7).stores({
  animais: "++id, identificacao, chipEletronico, raca, sexo, categoria, dataEntrada, idade, idadeMeses, peso, fazenda, fazendaOrigem, lote, piquete, status, observacoes, createdAt",
  fazendas: "++id, nome, createdAt",
  lotes: "++id, nome, fazenda, createdAt",
  pessoas: "++id, nome, login, email, funcao, acesso, status, createdAt",
  fornecedores: "++id, nome, cnpj, email, telefone, tipoProduto, status, createdAt",
  insumos: "++id, nome, nomeGenerico, tipo, status, createdAt",
  insumoEntradas: "++id, insumoId, insumoNome, notaFiscal, dataEntrada, createdAt",
});
