const addTask = document.getElementById('addtask');
const cancel = document.getElementById('cancel');
const tasknameinput = document.getElementById('tasknameinput');
const taskdescriptioninput = document.getElementById('taskdescriptioninput');
const taskList = [];

addTask.onclick = async function(){
    let taskName = await tasknameinput.value;
    let taskDescription = await taskdescriptioninput.value;

    let taskItem = {
        taskName: taskName,
        taskDescription: taskDescription
    };

    // localStorage.setItem('taskname',JSON.stringify(taskName));
    // localStorage.setItem('taskdescription', JSON.stringify(taskDescription));
    if(taskItem.taskName == "" || taskItem.taskDescription == ""){
        window.alert("Please enter values in the fields.")
    }else{
        taskList.push(taskItem);
        localStorage.setItem('tasks', JSON.stringify(taskList))
        tasknameinput.value = "";
        taskdescriptioninput.value = "";
        await displayList();
    }
    

    // console.log(localStorage.getItem('taskname'));
    // console.log(localStorage.getItem('taskdescription'));
    console.log(taskList);
}

cancel.onclick = function(){

    // let a = document.getElementById('taskname').innerText;
    // let b = document.getElementById('taskdescription').innerText;

    // console.log(a, b);
    if(taskList.length > 0){
        taskList.pop()
    }
    localStorage.clear()
    displayList();
    console.log('cancel clicked')


}

async function displayList(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || taskList;
    let listing = '';

    if(tasks.length == 0){
        listing = listing + `<p>List is empty...</p>`
        document.getElementById('lists').innerHTML = listing;
    }else{
        for(const x of tasks){
            listing += `<li id="taskTextbox">
            <h3>${x.taskName}</h3>
            <p>${x.taskDescription}</p>
            </li>`
        }
        document.getElementById('lists').innerHTML = listing;
    }
}

displayList();