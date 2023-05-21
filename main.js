const Main = {
    init : function() {
        this.varSelectors()
        this.conectEvents()
    },

    varSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
    },

    conectEvents : function(){
       let self = this

        this.$checkButtons.forEach(el => {
            el.onclick =  self.Events.checkButton_click
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
          


        }
    }
}

Main.init()