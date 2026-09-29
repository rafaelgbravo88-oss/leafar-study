export default function DashboardProfessor() {
  return (
    <main className="dash container">
      <div className="dash-header">
        <div>
          <h1>Painel do professor</h1>
          <p>Gerencie suas turmas e conteúdos.</p>
        </div>
      </div>
      <div className="cards">
        <div className="card"><p className="label">Turmas</p><p className="value">0</p></div>
        <div className="card"><p className="label">Alunos</p><p className="value">0</p></div>
        <div className="card"><p className="label">Aulas publicadas</p><p className="value">0</p></div>
      </div>
    </main>
  );
    }
