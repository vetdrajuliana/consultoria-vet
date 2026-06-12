"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

const formInicial = {
  nome: "",
  login: "",
  email: "",
  senha: "",
  telefone: "",
  funcao: "",
};

const funcoes = [
  {
    valor: "Administrador geral",
    acesso: "total",
    descricao: "Todas as funções do app disponíveis.",
  },
  {
    valor: "Proprietário da fazenda",
    acesso: "total",
    descricao: "Todas as funções do app disponíveis.",
  },
  {
    valor: "Administrador da fazenda",
    acesso: "limitado",
    descricao: "Acesso limitado conforme as permissões do perfil.",
  },
  {
    valor: "Veterinário",
    acesso: "limitado",
    descricao: "Acesso limitado conforme as permissões do perfil.",
  },
  {
    valor: "Vaqueiro",
    acesso: "limitado",
    descricao: "Acesso limitado conforme as permissões do perfil.",
  },
];

function obterFuncao(valor) {
  return funcoes.find((funcao) => funcao.valor === valor);
}

function obterAcesso(valor) {
  return obterFuncao(valor)?.acesso || "limitado";
}

export default function Usuarios() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [pessoas, setPessoas] = useState([]);
  const [pessoaEditando, setPessoaEditando] = useState(null);
  const [form, setForm] = useState(formInicial);

  async function carregarPessoas() {
    const lista = await db.pessoas.orderBy("createdAt").reverse().toArray();
    setPessoas(lista.filter((pessoa) => pessoa.status !== "deletado"));
  }

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarListaInicial() {
      const lista = await db.pessoas.orderBy("createdAt").reverse().toArray();

      if (componenteAtivo) {
        setPessoas(lista.filter((pessoa) => pessoa.status !== "deletado"));
      }
    }

    carregarListaInicial();

    return () => {
      componenteAtivo = false;
    };
  }, []);

  function atualizarCampo(campo, valor) {
    setForm((formAtual) => ({
      ...formAtual,
      [campo]: valor,
    }));
  }

  function limparFormulario() {
    setForm(formInicial);
  }

  async function salvarPessoa() {
    if (!form.nome || !form.email || !form.senha || !form.funcao) {
      alert("Preencha nome do usuário, e-mail, senha e função.");
      return;
    }

    const dadosUsuario = {
      ...form,
      acesso: obterAcesso(form.funcao),
    };

    if (pessoaEditando) {
      await db.pessoas.update(pessoaEditando.id, {
        ...dadosUsuario,
        status: pessoaEditando.status || "ativa",
      });
      setPessoaEditando(null);
    } else {
      await db.pessoas.add({
        ...dadosUsuario,
        status: "ativa",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormulario();
    setMostrarFormulario(false);
    carregarPessoas();
  }

  function editarPessoa(pessoa) {
    setPessoaEditando(pessoa);
    setForm({
      nome: pessoa.nome || "",
      login: pessoa.login || "",
      email: pessoa.email || "",
      senha: pessoa.senha || "",
      telefone: pessoa.telefone || "",
      funcao: pessoa.funcao || "",
    });
    setMostrarFormulario(true);
  }

  async function excluirPessoa(id) {
    const confirmar = confirm("Deseja excluir este usuário?");
    if (!confirmar) return;

    await db.pessoas.update(id, {
      status: "deletado",
    });

    carregarPessoas();
  }

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-green-700 font-semibold">
                Cadastro e Acessos
              </p>

              <h1
                className="text-4xl font-bold text-green-900 mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Usuários
              </h1>
            </div>

            <button
              onClick={() => {
                setPessoaEditando(null);
                limparFormulario();
                setMostrarFormulario(true);
              }}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all"
            >
              + Novo Usuário
            </button>
          </div>

          {mostrarFormulario && (
            <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                {pessoaEditando ? "Editar Usuário" : "Cadastro de Usuário"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome do usuário *"
                  value={form.nome}
                  onChange={(e) => atualizarCampo("nome", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Login"
                  value={form.login}
                  onChange={(e) => atualizarCampo("login", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="email"
                  placeholder="E-mail *"
                  value={form.email}
                  onChange={(e) => atualizarCampo("email", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="password"
                  placeholder="Senha de acesso *"
                  value={form.senha}
                  onChange={(e) => atualizarCampo("senha", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={(e) => atualizarCampo("telefone", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <div>
                  <select
                    value={form.funcao}
                    onChange={(e) => atualizarCampo("funcao", e.target.value)}
                    required
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white"
                  >
                    <option value="" disabled hidden>
                      Função *
                    </option>
                    {funcoes.map((funcao) => (
                      <option key={funcao.valor} value={funcao.valor}>
                        {funcao.valor}
                      </option>
                    ))}
                  </select>

                  {form.funcao && (
                    <p className="text-sm text-gray-600 mt-2 px-2">
                      {obterFuncao(form.funcao)?.descricao}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={salvarPessoa}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold"
                >
                  {pessoaEditando ? "Salvar Alterações" : "Salvar Usuário"}
                </button>

                <button
                  onClick={() => {
                    setMostrarFormulario(false);
                    setPessoaEditando(null);
                    limparFormulario();
                  }}
                  className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-2xl font-semibold"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Usuários Cadastrados
            </h2>

            {pessoas.length === 0 ? (
              <p className="text-gray-600">Nenhum usuário cadastrado ainda.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {pessoas.map((pessoa) => (
                  <div
                    key={pessoa.id}
                    className="border border-green-100 rounded-3xl p-6 bg-[#f8faf6]"
                  >
                    <h3 className="text-xl font-bold text-green-900">
                      {pessoa.nome}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Login: {pessoa.login || "Não informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      E-mail: {pessoa.email || "Não informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Telefone: {pessoa.telefone || "Não informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Função: {pessoa.funcao || "Não informada"}
                    </p>

                    <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {pessoa.acesso === "total"
                        ? "Acesso total"
                        : "Acesso limitado"}
                    </p>

                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => editarPessoa(pessoa)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirPessoa(pessoa.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
