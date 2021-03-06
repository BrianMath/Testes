function addTask() {
    var task = document.querySelector("input#task")

    if (task.value.length > 0 && task.value.length <= 22) {  // Caso 0 < input <= 22
        var tasksList = document.querySelector("ul#tasks_list")
        var newTask = document.createElement("li")
        var span = document.createElement("span")

        // Criação de nova task
        span.innerHTML = '<img src="delete_forever.svg" alt="Deletar">'
        span.classList.add("delete")

        newTask.innerHTML = task.value
        task.value = ""
        newTask.appendChild(span)
        tasksList.appendChild(newTask)

        // Função de apagar
        span.addEventListener("click", function deleteTask() {
            const parent = this.parentNode
            parent.remove()
        })

        // Função de completar tarefa
        newTask.addEventListener("click", function() {
            newTask.classList.toggle("completed")
        })

    } else { // Caso o input esteja em branco
        window.alert("O texto digitado deve ter entre 1 e 22 caracteres!")
    }
}

// Salvamento dos dados
if (typeof(Storage) !== "undefined") { // Caso seja suportado
    function saveList() {
        var tasksList = document.querySelector("ul#tasks_list")
        localStorage.setItem("Lista", [tasksList.innerHTML])
    }

    function delList() {
        localStorage.removeItem("Lista")
    }

} else { // Caso não seja suportado
    window.alert("Que pena, seu navegador não suporta o armazenamento na web! :(")
}