const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

adicionarBtn.addEventListener("click", function() {
    const textoTarefa = tarefaInput.value.trim();
    if (textoTarefa === "") return;

    const li = document.createElement("li");
    li.textContent = textoTarefa;

    li.addEventListener("click", function() {
        li.classList.toggle("concluida");
    });

    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.classList.add("removerBtn");
    removerBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        listaTarefas.removeChild(li);
    });

    li.appendChild(removerBtn);
    listaTarefas.appendChild(li);

    tarefaInput.value = "";
});
