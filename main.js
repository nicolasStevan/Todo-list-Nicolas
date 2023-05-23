const Main = {
    init : function() {
        this.varSelectors()
        this.conectEvents()
    },

    varSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputForm = document.querySelector('[data-form-input]')
        this.$list = document.querySelector('[data-list]')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    conectEvents : function(){
       let self = this

        this.$checkButtons.forEach(el => {
            el.onclick =  self.Events.checkButton_click
        })

        this.$inputForm.onkeypress = self.Events.$inputForm_keypress.bind(this)

        this.$removeButtons.forEach(el => {
            el.onclick = self.Events.$removeButtons_click
        })
    },


    Events:{
        checkButton_click: function(e){
            const li = e.target.parentElement // pega o pai do elemento clicado
            const isDone = li.classList.contains('completed') // verifica se tem a classe completed true or false

            if(!isDone){ // se for diferente de true ele adiciona a classe completed
                li.classList.add('completed')
                return
            }
            li.classList.remove('completed')
          


        },

     $inputForm_keypress: function(e){
       const key = e.key
        const value =  e.target.value
        if(key === 'Enter'){
            this.$list.innerHTML += `
          <li>
            <div class="check"></div>
            <label class="task">
            ${value}
            </label>
            <button class="remove"><img width="30px" height="30px" src="assets/trash.png" alt=""></button>
           </li>
            
            `
            e.target.value = ""
            this.varSelectors()
            this.conectEvents()

        }
     },
     $removeButtons_click: function(e){  // revisar pq ta com bug (botão de remover não funciona)
        let li = e.target.parentElement

        li.classList.add('removed')  
     }
    }
}

Main.init()