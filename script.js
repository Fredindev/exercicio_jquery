$(document).ready(function() {
    $("#botao-adicionar").on("click", function() {
        const adicionaTarefa = $("#input-tarefa");
        const listaTarefa = $("#lista-tarefa");
        const tarefaExistente = $('li');


        if (adicionaTarefa.val().trim() !== "") {
            const novaTarefa = $("<li>").text(adicionaTarefa.val()).append('<span class="material-symbols-outlined" id="adiciona">done</span> <span class="material-symbols-outlined" id="remove">delete</span>');
            listaTarefa.append(novaTarefa);
            adicionaTarefa.val("");
        } 

    });

    $("#lista-tarefa").on("click", "#adiciona", function() {
        $(this).closest("li").toggleClass("completado");
    });

    $("#lista-tarefa").on("click", "#remove", function() {
        $(this).closest("li").remove();
    });
});
