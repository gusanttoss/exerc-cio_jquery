$(document).ready(function() {

    $('form').on('submit',function(e) {
        e.preventDefault();

        const novaTarefa = $('#inserir-tarefa').val();
        const tarefaElemento = $('').text(novaTarefa); 

        $('ul').prependTo(tarefaElemento); 

        $('#inserir-tarefa').val('');
    })

});