let listaDeTarefas = [];
let ul = document.getElementById("lista");
let elemento_tarefa = document.getElementById("tarefa");

function tarefaAdd() {
  let tarefa = elemento_tarefa.value;
  listaDeTarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas));

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(tarefa));
  ul.appendChild(li);
}

function removerTudo() {
  lista.innerHTML = "";
  localStorage.removeItem("tarefas");
}

onload = function () {
  let valor_no_localstorage = this.localStorage.getItem("tarefas");

  if (valor_no_localstorage !== null) {
    listaDeTarefas = JSON.parse(valor_no_localstorage);
  }

  for (let i = 0; i < listaDeTarefas.length; i++) {
    let li = this.document.createElement("li");
    li.appendChild(document.createTextNode(listaDeTarefas[i]));
    ul.appendChild(li);
  }
};
