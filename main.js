$(document).ready(function () {
    $("form").on("submit", function (e) {
      e.preventDefault();
      const novaTarefa = $("#inserir-tarefa").val();
  
      // Verifica se a tarefa já existe na lista
      const tarefaExiste = $("ul li")
        .toArray()
        .some((li) => $(li).text() === novaTarefa);
      if (tarefaExiste) {
        alert("Esta tarefa já existe na lista.");
        return;
      }
  
      const listaTarefas = $(`<li class="has-marker">${novaTarefa}</li>`);
      $(listaTarefas).appendTo("ul");
      $("#inserir-tarefa").val(""); // limpa o input após adicionar a tarefa
    });
  
    $("ul").on("click", "li", function () {
      $(this).toggleClass("strike-through");
    });
  });