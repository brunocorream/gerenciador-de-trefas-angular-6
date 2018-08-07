import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }


listarTodos(): Tarefa[] {
  const tarefas = localStorage['tarefas']; // Armazena a lista de tarefas (caso exista) em uma constante
  return tarefas ? JSON.parse(tarefas) : []; // verifica se existe uma tarefa, caso exista, será feito o parse, do contrário, retorna vazio.
}

cadastrar(tarefa: Tarefa): void {
  const tarefas = this.listarTodos(); // Acessa a lista de tarefas
  tarefa.id = new Date().getTime(); // Atribui uma data em SEGUNDOS para o ID único
  tarefas.push(tarefa); // Faz a atribuição
  localStorage['tarefas'] = JSON.stringify(tarefas); // Armazena no localStorage passando o conteudo para string
}

buscaPorId(id: number): Tarefa {
  const tarefas: Tarefa[] = this.listarTodos();
  return tarefas.find(tarefa => tarefa.id === id);
}



}