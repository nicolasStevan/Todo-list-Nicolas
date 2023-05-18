const main = {

    init: function () {
        this.varSelectores();
    },

    varSelectores: function () {
        this.dataList = document.querySelector('[data-list]'); //selecionando o elemento que vai receber a tarefa	
        this.inputForm = document.querySelector('[data-form-input]');
        this.taskLi = document.createElement('li');
        this.checkInput = document.createElement('div');
    },

    varEventos: function () {
        this.novaTarefa.addEventListener('click', this.criarTarefa);

    },

    content: function () {
         this.content =
        `
        <p class="content">${valueInput}</p>
        <button onclick='deleteTask(${JSON.stringify(valueInput)})'>
            <img width="20px" src="/assets/trash.png" />
        </button>
    `
        taskLi.innerHTML = content; //inserindo o conteudo dentro da li

        dataList.appendChild(taskLi);
    },

    varFuncoes: function () {

    }
}














const criarTarefa = (evento) => {
    evento.preventDefault(); //definir comportamento padrão do evento, passando como parametro
   
    
    
    
     //criando elemento li
    taskLi.classList.add('task'); //adicionando classe ao elemento li

    
    if (dataList.innerHTML.includes(inputForm.value)) {
        return alert("Tarefa já existe!")
    }
    
     //inserindo a li dentro da ul, AppendChild adiciona um filho ao elemento
    
     //criando elemento div
    checkInput.classList.add('check') //adicionando classe ao elemento div
    
    taskLi.appendChild(checkInput); //inserindo a div dentro da li

    checkInput.addEventListener('click', () => {
        alert("Tarefa concluída!")
    })
  
    inputForm.value = ""
}



const novaTarefa = document.querySelector('[data-form-button]');


novaTarefa.addEventListener('click',criarTarefa);

const botaoConclui = () =>{

    const buttonConclui = document.createElement('button');

    buttonConclui.addEventListener('click', () => {
       
    })

    buttonConclui.classList.add('check-button');

}

const deleteTask = (item) => {

    const data = document.getElementsByClassName('content');
    for (itemIterator = 0; itemIterator <= data.length; itemIterator++) {
        if (item == data[itemIterator]?.innerHTML) {
            let element = data[itemIterator]
            element.parentNode.style.display = 'none'
        }
    }
}