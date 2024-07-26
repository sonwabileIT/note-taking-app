const addTask = document.getElementById('addtask');
const cancel = document.getElementById('cancel');
const taskList = [];

addTask.onclick = async function(){
    let taskName = await document.getElementById('taskname').value;
    let taskDescription = await document.getElementById('taskdescription').value;

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
        await displayList();
    }
    

    // console.log(localStorage.getItem('taskname'));
    // console.log(localStorage.getItem('taskdescription'));
    console.log(taskList);
}

cancel.onclick = function(){

    let a = document.getElementById('taskname').innerText;
    let b = document.getElementById('taskdescription').innerText;

    console.log(a, b);
    console.log('cancel clicked')


}

async function displayList(){
    let tasks = taskList;
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