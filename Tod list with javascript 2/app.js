window.addEventListener('load', () =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listElement = document.querySelector("#tasks");

    // ADD EVENT LISTENERS

    form.addEventListener('submit', (e) => {
       e.preventDefault(); 

       const task = input.value;

       if(!task){
           alert('You have not added any task');
                 return;
       }
       const taskElement = document.createElement("div");
       taskElement.classList.add("task");

       const taskContent = document.createElement("div");

       taskContent.classList.add("content");

    //    taskContent.innerText = task;

       taskElement.appendChild(taskContent);

       const taskInputElement = document.createElement("input");

       taskInputElement.classList.add("text");

       taskInputElement.type = Text;

       taskInputElement.value = task;

       taskInputElement.setAttribute("readonly", "readonly");

       taskContent.appendChild(taskInputElement);

       const taskActions = document.createElement("div");
       taskActions.classList.add("actions");
       
       const taskEdit = document.createElement("button");
       taskEdit.classList.add("edit");
          taskEdit.innerHTML = "Edit"

       const taskDelete = document.createElement("button");
       taskDelete.classList.add("delete");
            taskDelete.innerHTML = "Delete";
         
            taskActions.appendChild(taskEdit);

            taskActions.appendChild(taskDelete);

            taskElement.append(taskActions);


       listElement.appendChild(taskElement);

      input.value = "";



    //   ADD EDIT AND DELETE EVENT LISTENERS
    taskEdit.addEventListener('click', () =>{

       if(taskEdit.innerText.toLocaleLowerCase() === "edit"){

        taskInputElement.removeAttribute("readonly");
        taskInputElement.focus();
        taskEdit.innerText = "Save";

       }
            else{
                taskInputElement.setAttribute("readonly", "readonly");
                taskEdit.innerText="Edit";
             }

    });

    taskDelete.addEventListener('click', function (){
        taskDelete.classList.add("fall");
        listElement.removeChild(taskElement);
    });

});
});


