export default function DashboardAluno() {
  return (
    <main className="dash container">
      <div className="dash-header">
        <div>
          <h1>Seu painel</h1>
          <p>Continue evoluindo nos seus estudos.</p>
        </div>
      </div>
      <div className="cards">
        <div className="card"><p className="label">XP total</p><p className="value">0</p></div>
        <div className="card"><p className="label">Nível</p><p className="value">Fundamental</p></div>
        <div className="card"><p className="label">Cursos em andamento</p><p className="value">0</p></div>
        <div className="card"><p className="label">Badges</p><p className="value">0</p></div>
      </div>
    </main>
  );
    }
