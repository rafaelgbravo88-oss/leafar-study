"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Cadastro() {
  const router = useRouter();
  const [papel, setPapel] = useState("aluno");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);
    setMensagem(null);

    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: { data: { nome, papel } },
    });

    if (error) {
      setMensagem({ tipo: "error", texto: error.message });
      setCarregando(false);
      return;
    }

    setMensagem({
      tipo: "success",
      texto: "Conta criada! Verifique seu e-mail para confirmar o acesso.",
    });
    setCarregando(false);
    setTimeout(() => router.push("/login"), 2000);
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Criar conta</h1>
        <p className="sub">Comece sua jornada no Leafar Study.</p>

        <div className="role-toggle">
          <button type="button" aria-pressed={papel === "aluno"} onClick={() => setPapel("aluno")}>
            Sou aluno
          </button>
          <button type="button" aria-pressed={papel === "professor"} onClick={() => setPapel("professor")}>
            Sou professor
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="nome">Nome completo</label>
            <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" minLength={6} value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary auth-submit" disabled={carregando}>
            {carregando ? "Criando conta..." : "Criar conta"}
          </button>
        </form>

        {mensagem && <p className={`auth-message ${mensagem.tipo}`}>{mensagem.texto}</p>}

        <p className="auth-switch">
          Já tem conta? <Link href="/login">Entrar</Link>
        </p>
      </div>
    </main>
  );
}
