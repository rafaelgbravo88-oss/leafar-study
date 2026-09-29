import Link from "next/link";

const niveis = ["Fundamental", "Médio", "Vestibular", "Graduação", "Pós-graduação", "Mestrado", "Doutorado"];

const jornada = [
  { titulo: "Escolha seu nível", texto: "A experiência e o visual se adaptam do fundamental ao doutorado." },
  { titulo: "Estude com a Leafar AI", texto: "Tire dúvidas, gere resumos e receba trilhas personalizadas." },
  { titulo: "Evolua com XP e badges", texto: "Ganhe pontos, suba de nível e participe de batalhas de conhecimento." },
  { titulo: "Conecte-se", texto: "Turmas, escolas e uma comunidade acadêmica para trocar conhecimento." },
];

export default function Home() {
  return (
    <main className="hero">
      <div className="container nav">
        <span className="brand">Leafar Study</span>
        <div className="nav-links">
          <Link href="/login">Entrar</Link>
          <Link href="/cadastro" className="btn btn-primary">Criar conta</Link>
        </div>
      </div>

      <div className="container hero-body">
        <div>
          <p className="eyebrow">Aprender. Evoluir. Conquistar.</p>
          <h1>Uma plataforma que cresce junto com quem estuda.</h1>
          <p>
            Leafar Study conecta estudantes, professores e escolas em um só lugar —
            com trilhas por nível acadêmico, gamificação e uma IA de estudos sempre por perto.
          </p>
          <div className="hero-actions">
            <Link href="/cadastro" className="btn btn-primary">Começar agora</Link>
            <Link href="/login" className="btn btn-ghost">Já tenho conta</Link>
          </div>
          <div className="levels">
            {niveis.map((nivel) => <span className="level-chip" key={nivel}>{nivel}</span>)}
          </div>
        </div>

        <div className="path">
          {jornada.map((passo) => (
            <div className="path-step" key={passo.titulo}>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
   }
