        //let's create a template first
    import "./styles.css";
        function taskState(title = ""){
            let tasks = [];
            return {
                title,
                completed : false,
                tasks
            }
        }

            function adderInput(){
            const tit = prompt("enter the task ");
                
                taskState.title = tit;
                return tit;
            }
            function createSubtaskElement(subtask){
                const subtaskElement = document.createElement("div");
                subtaskElement.classList.add("subtask");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = subtask.completed;
                const title = document.createElement("span");
                title.textContent = subtask.title; //maybe tasks shoul be here ,the array
                const delT = document.createElement("input");
                delT.classList.add("delete-task-btn");
                delT.type = "button";
                delT.value = "delete";

                delT.addEventListener('click',()=>{
                    deleteTask(subtaskElement,subtask);
                })
                checkbox.addEventListener('click',()=>{
                    strikeThrough(title,subtask);
                })
                title.addEventListener('click',()=>{
                        const data =adderInput();
                        subtask.title = data;
                        title.textContent = data;

                            });
                subtaskElement.appendChild(checkbox);
                subtaskElement.appendChild(title);
                subtaskElement.appendChild(delT);
                
                return subtaskElement;
            }

        function createTaskElement(task){
                const taskElement = document.createElement("div");
                taskElement.classList.add("task");
                
                const title = document.createElement("span");
                title.textContent = task.title;
                title.classList.add("task1-title");
                const subtaskContainer = document.createElement("div");
                subtaskContainer.classList.add("subtask-container");
                const btn = document.createElement("button");
                btn.classList.add("add-subtask-btn");
                btn.textContent = "Add Subtask";
                const btn2 = document.createElement("input");
                btn2.classList.add("delete-task-btn");
                btn2.type = "button";
                btn2.value = "Delete Task";
                btn2.addEventListener('click',()=>{
                    deleteTask(taskElement,task);
                })
                btn.classList.add("add-subtask-btn");
                btn.addEventListener("click", () => {   
                    const subtaskdata = taskState("a new subtask"); //updating the states
                    task.tasks.push(subtaskdata); //updating the states
                    const subtaskELement = createSubtaskElement(subtaskdata); // now we are creating the ui
                    subtaskContainer.appendChild(subtaskELement); 
                });

                title.addEventListener("click",()=>{
                    const data =   adderInput();
                    task.title = data;
                    title.textContent = data;
                })
                
                taskElement.appendChild(title);
                taskElement.appendChild(btn);
                taskElement.appendChild(btn2);
                taskElement.appendChild(subtaskContainer);      
                return taskElement;
            }
        function deleteTask(element,state){
            element.remove();
            state.title = "";
            state.tasks = [];
            state.completed = false;
        }
        function strikeThrough(element,task){
            task.completed  = !task.completed;
            if(task.completed){
                element.style.textDecoration = "line-through";
            }else{
                element.style.textDecoration = "none";
            }
        }
        
        function DomObjects(){
            const container = document.createElement("div");
            container.classList.add("container");
            document.body.appendChild(container);
            
            const addTask = document.querySelector(".btn");
            
            addTask.addEventListener("click",()=>{
                const taskData = taskState("new data");
                const taskElement = createTaskElement(taskData);
                container.appendChild(taskElement);
                console.log("working");
            });
            
        }

        function saveToStorage(tasks){
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }
        function loadFromStorage(){
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            return tasks;
        }
        DomObjects(); //initialized it, and it's working boom,  