import { ScrollView, Text, View } from "react-native";
import { TaskListStyle } from "./TaskListStyle";
import { TaskItem } from "../taskitem/TaskItem";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TaskContext } from "../../context/TaskContext";

export const TaskList = () => {
  
  const {listagemTarefas, getTasks} = useContext(TaskContext)
  
  
  useEffect( ()=>{
    getTasks()
  }, [] )

  return <ScrollView style={TaskListStyle.taskListContainer}>
        {listagemTarefas.map( (tarefa) => {
          return (
            <TaskItem 
              key={tarefa.id}
              id={tarefa.id} 
              descricao={tarefa.descricao}
              
              />
          )
        })}
        
        
  </ScrollView>;
};
