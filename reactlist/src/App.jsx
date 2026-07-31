import { useEffect, useState } from "react";
import "./App.css";
import penIcon from "./assets/edit-icon.svg";
import trashIcon from "./assets/trash-icon.svg";
import axios from "axios";

function App() {
  // States / Variáveis
  const [tasklist, setTasklist] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);

  // Funções
  // CRUD - Post Get Put/Patch Delete
  // Get - busca todas as tarefas
  const getTasks = async () => {
    try {
      // Retorna a requisição (headers and body data)
      const APIReturn = await axios.get("http://localhost:3000/taskpoint");
      const APIData = await APIReturn.data;
      // atualizar o state
      setTasklist(APIData);
    } catch (error) {
      console.log(erro);
    }
  };

  // Get{id} - busca uma tarefa por id
  const getTaskById = async (id) => {
    alert(`Função getTasksById em desenvolvimento ${id}`);
  };
  // Post - cadastra  uma tarefa
  const postTask = async (e) => {
    e.preventDefault(); // evita/captura o evento submit
    // valida o state/formulário
    if (taskValue.trim().length == 0) {
      alert("Preencher o campo valor");
      return false;
    }

    // passou pela validação, vamos cadastrar
    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoint", {
        descricao: taskValue,
      });

      setTaskValue(""); // limpar o campo de formulário
      getTasks();
    } catch (error) {
      console.log(error);

      alert("Erro ao cadastrar os dados");
    }
  };

  // Put - Pré-Editar (apenas mostra os dados no formulário)
  const putTask = (item) => {
    setEditMode(true);
    setIdToEdit(item.id);
    setTaskValue(item.descricao);
  };

  // Put - atualiza uma tarefa
  const confirmPutTask = async (e) => {
    e.preventDefault();

    // valida o formulário
    if (taskValue.trim().length == 0) {
      alert("Preencha o texto da tarefa");
      return false;
    }

    try {
      const APIReturn = await axios.put(
        `http://localhost:3000/taskpoint/${idToEdit}`,
        {
          descricao: taskValue,
        },
      );
      // limpa o forulário
      setIdToEdit(0);//zera o id que vai editar, pois já editamos o cadastro
      setTaskValue("");//zera o campo do formulário
      setEditMode(false)// pra sumir com o botão cancelar

      alert("A tarefa foi editada");
      getTasks();
    } catch (error) {
      alert("Erro ao editar");
      console.log(error);
    }
  };
  // Delete - apaga uma tarefa
  const deleteTask = async (id) => {
    // Perguntar ao usuário se uer excluir?
    const querExcluir = confirm(
      "Atenção: Quer realemente excluir op registro?",
    );
    if (!querExcluir) return false;

    try {
      const APIReturn = await axios.delete(
        `http://localhost:3000/taskpoint/${id}`,
      );
      getTasks();
      alert("Tarefa excluída com sucesso");
    } catch (error) {
      console.log(error);

      alert("Erro ao excluir a tarefa");
    }
  };

  // Effects e ciclos de vida do componente

  // onMount - quando o componente for montado
  useEffect(() => {
    // carrega os dados quando o componente for montado!
    getTasks();
  }, []);
  // JSX
  return (
    <>
      <header className="header-section">
        <h1 className="header-seciton__title">React List</h1>
      </header>

      <main className="body-section">
        {/* formulário de cadastro da tarefa - cadastra ou edita */}
        <form
          className="cad-task"
          onSubmit={editMode ? confirmPutTask : postTask}
        >
          <input
            className="card-task__entry"
            type="text"
            placeholder="Adicione uma tarefa"
            // recebe o velor do state
            value={taskValue}
            onChange={(e) => {
              // atualiza o valor do state
              setTaskValue(e.target.value);
            }}
          />
          {/* o parágrafo é só pra ver o valor do state, vamos apagar! */}
          <p>{taskValue}</p>
          <p>{editMode ? "true" : "false"}</p>
          <button className="card-task__btn-confirm">Adicionar</button>

          {editMode && (
            <button 
              className="card-task__btn-confirm" 
              type="button"
              onClick={()=>{
                // zera os states responsáveis pela edição e
                // então some com o botão
                setTaskValue("")
                setIdToEdit(0)
                setEditMode(false)
              }}
            >
              Cancelar
            </button>
          )}
        </form>

        <section className="cardlist">
          {tasklist.map((t) => {
            return (
              <article className="cardtask" key={t.id}>
                <p className="cardtask__tasc-text">{t.descricao}</p>

                <div className="cardtask__icon-box">
                  <div className="cardlist__icon">
                    <img
                      src={penIcon}
                      className="cardlist__edit-icon"
                      alt="imagem de um lápis. Função de editar a tarefa"
                      onClick={() => {
                        // variável "t" é o item/objeto completo
                        putTask(t);
                      }}
                    />
                  </div>

                  <div className="cardlist__icon">
                    <img
                      src={trashIcon}
                      className="cardlist__delete-icon"
                      alt="imagem de uma lixeira. Função de excluir a tarefa"
                      onClick={() => {
                        deleteTask(t.id);
                      }}
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
