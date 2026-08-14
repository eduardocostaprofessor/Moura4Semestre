import axios from "axios";
import { createContext, useState } from "react";

export const TaskContext = createContext();

// component Global pra prover os dados das Tasks para a aplicação
export const TaskProvider = ({ children }) => {
  //   States Globais
  const [listagemTarefas, setListagemTarefas] = useState([]);
  const [taskValue, setTaskValue] = useState(""); //dados do formulário
  const [editeMode, setEditMode] = useState(false);

  //   Funçoes
  const getTasks = async () => {
    try {
      const APIReturn = await axios.get("http://172.16.1.100:3000/taskpoint");
      const APIData = await APIReturn.data;
      setListagemTarefas(APIData);
    } catch (error) {
      console.log("Erro ao buscar os dados na api");
      console.log(error);
    }
  };

  const postTask = async (taskValue) => {
    try {
      // cadastro na API
      await axios.post("http://172.16.1.100:3000/taskpoint", {
        descricao: taskValue,
      });
      // lista os dados novamente na tela
      getTasks();
      setTaskValue(""); //limpa o state pro formulário
    } catch (error) {
      console.log("Erro ao chamar a API");
      console.log(error);
    }
  };

  // apaga uma tarefa pelo id
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://172.16.1.100:3000/taskpoint/${id}`);
      getTasks();
    } catch (error) {
      console.log("Erro ao deletar na API");
      console.log(error);
    }
  };

  // na pasta moura4semestre
    // node_module
    // qualquer arquivo que não for o seu projeto (apagar)
  //   visualiar os dados da edição
  const putTaskPreview = () => {};

  //   edita os dados na na api
  const putTaskConfirm = async (tarefa) => {
    try {
      await axios.put(`http://172.16.1.100:3000/taskpoint/${tarefa.id}`, {
        descricao: tarefa.taskValue,
      });
      getTasks();
    } catch (error) {
      console.log("Erro ao deletar na API");
      console.log(error);
    }
  };

  return (
    //envolve nossa aplicação ou o componente que terá acesso aos
    // states, variáveis e funções dentro do provider
    <TaskContext.Provider
      value={{
        taskValue,
        setTaskValue,
        listagemTarefas,
        getTasks,
        postTask,
        deleteTask,
        putTaskPreview,
        putTaskConfirm,
        editeMode,
        setEditMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
