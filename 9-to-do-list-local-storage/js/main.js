//vamos usar mais (const) do que (let), pois let é apenas quando queremos modificar o o valor

//Maiúsculo porque este vai ser o objeto principal do nosso aplicativo
//isso é como um componente, ao longo do app podem tar mais de um, por ex: Header.

//usamos (this) para disponibilizar o acesso dentro do Main/componente, se usasse (let)
//as outras funções nao teria acesso

//Tem que adicionar ($) na frente da tag que se trata de uma HTML

const Main = {

    tasks: [],

    init: function () {
        this.cacheSelectors();
        this.bindEvents();
        this.getStoraged();
        this.buildTasks();
    },

    cacheSelectors: function () {
        this.$checkButtons = document.querySelectorAll('.check');
        this.$inputTask = document.querySelector('#inputTask');
        this.$list = document.querySelector('#list');
        this.$removeButtons = document.querySelectorAll('.remove');
    },

    bindEvents: function () {
        const self = this;

        this.$checkButtons.forEach(function (button) {
            button.onclick = self.Events.checkButton_click;
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function (button) {
            button.onclick = self.Events.removeButtons_click
        })

    },

    getStoraged: function () {
        const tasks = localStorage.getItem('tasks')

        this.tasks = JSON.parse(tasks)
    },

    buildTasks: function () {
        let html = ''

        this.tasks.forEach(item => {
            html += `
            <li>
                <div class="check"></div>
                <label class="task">
                    ${item.task}
                </label>
                <button class="remove"></button>
            </li>
            `
        })

        this.$list.innerHTML = html
    },



    Events: {
        checkButton_click: function (e) {
            const li = e.target.parentElement;
            const isDone = li.classList.contains('done');

            //é uma boa pratica primeiro verificar a negação da variavel(!)
            //antes de retornar um valor

            if (!isDone) {
                return li.classList.add('done');
            }

            li.classList.remove('done');

            //mas para deixar registrado a outra forma sem o return, porem nao é a mais recomendada
            /*
            if(!isDone){
                li.classList.add('done')
            } else {
                li.classList.remove('done')
            }
            */
        },


        //dentro de uma função de evento (onclick, onkeypress, ...) 
        //O (this) sempre vai ser o próprio elemento que vc adicionou o this

        inputTask_keypress: function (e) {
            const key = e.key;
            const value = e.target.value;

            if (key === 'Enter') {
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `
                e.target.value = ''

                this.cacheSelectors();
                this.bindEvents();

                const savedTasks = localStorage.getItem('tasks')
                const savedTasksObj = JSON.parse(savedTasks)

                const obj = [
                    { tasks: value },
                    ...savedTasksObj,
                ]

                localStorage.setItem('tasks', JSON.stringify(obj))
            }
        },

        removeButtons_click: function (e) {
            let li = e.target.parentElement;

            li.classList.add('removed')

            setTimeout(function () {
                li.classList.add('hidden');
            }, 300)
        }
    }

};
Main.init()