function adicionarTarefa() {
      
      const inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim()

      const mensagemvar = document.getElementById("mensagem")

      if (tarefa == "") {
            let mensagemErro = "Insira uma tarefa válida!"
            mensagemvar.textContent = mensagemErro
            
      } else {
            let mensagemSucesso = "Tarefa adicionada com sucesso!";
            mensagemvar.textContent = mensagemSucesso
 
            const listaTarefas = document.getElementById("listaTarefas")
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefa
            listaTarefas.appendChild(novaTarefa)
            
      }

      inputTarefa.value = ""

}