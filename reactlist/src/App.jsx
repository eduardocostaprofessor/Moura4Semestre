import { useState } from "react";
import "./App.css";
import penIcon from "./assets/edit-icon.svg";
import trashIcon from "./assets/trash-icon.svg";

function App() {
  // States / Variáveis
  const [tasklist, setTasklist] = useState([
    { id: 1, description: "Revisar HTML" },
    { id: 2, description: "Revisar CSS" },
    { id: 3, description: "Revisar ReactJS" },
    { id: 4, description: "Aprender React Native" },
    { id: 5, description: "Aprender React Native" },
    { id: 6, description: "Aprender React Native" },
  ]);

  // Effects

  // Funções

  // JSX
  return (
    <>
      <header className="header-section">
        <h1 className="header-seciton__title">React List</h1>
      </header>

      <main className="body-section">
        <form className="cad-task">
          <input
            className="card-task__entry"
            type="text"
            placeholder="Adicione uma tarefa"
          />
          <button className="card-task__btn-confirm">Adicionar</button>
        </form>

        <section className="cardlist">
          {tasklist.map((t) => {
            return (
              <article className="cardtask" key={t.id}>
                <p className="cardtask__tasc-text">
                  {t.description}
                </p>

                <div className="cardtask__icon-box">
                  <div className="cardlist__icon">
                    <img src={penIcon} className="cardlist__edit-icon" alt="" />
                  </div>

                  <div className="cardlist__icon">
                    <img
                      src={trashIcon}
                      alt=""
                      className="cardlist__delete-icon"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <footer className="footer-list">
        <p className="footer-list__right-text">
          2026, React List - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
