const criarTarefa = (evento) => {
    evento.preventDefault(); //definir comportamento padrão do evento, passando como parametro
   
    const dataList = document.querySelector('[data-list]'); //selecionando o elemento que vai receber a tarefa	
    const inputForm = document.querySelector('[data-form-input]');
    const valueInput = inputForm.value;
    
    
    const taskLi = document.createElement('li'); //criando elemento li
    taskLi.classList.add('task'); //adicionando classe ao elemento li

    const content = `<p class="content">${valueInput}</p>`

    taskLi.innerHTML = content; //inserindo o conteudo dentro da li

    dataList.appendChild(taskLi); //inserindo a li dentro da ul, AppendChild adiciona um filho ao elemento
    
    const checkInput = document.createElement('div'); //criando elemento div
    checkInput.classList.add('check') //adicionando classe ao elemento div
    
    
    const checkContent = `<input type="checkbox" class="check-button">`
    
    taskLi.appendChild(checkInput)
    
    checkInput.innerHTML = checkContent;

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