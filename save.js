const addTask = document.getElementById('addtask');
const cancel = document.getElementById('cancel');
const taskList = [];

addTask.onclick = function(){
    let taskName = document.getElementById('taskname').value;
    let taskDescription = document.getElementById('taskdescription').value;

    let taskItem = {
        taskItemName: taskName,
        taskItemDescription: taskDescription
    };

    localStorage.setItem('taskname',JSON.stringify(taskName));
    localStorage.setItem('taskdescription', JSON.stringify(taskDescription));
    taskList.push(taskItem);

    console.log(localStorage.getItem('taskname'));
    console.log(localStorage.getItem('taskdescription'));
    console.log(taskList);
}

cancel.onclick = function(){

    let a = document.getElementById('taskname').innerText;
    let b = document.getElementById('taskdescription').innerText;

    console.log(a, b);
    console.log('cancel clicked')
}

let listing ='';

for(const x of taskList){

    listing += `<li id="taskTextbox">
    <p>${x.taskName}</p>
    <p>${x.taskDescription}</p>
    </li>`
}
console.log(listing);

document.getElementById('lists').innerHTML = listing;
// `<li id="taskTextbox">
//     <p>${taskList[0].taskName}</p>
//     <p>${taskList[0].taskDescription}</p>
// </li>
// <li id="taskTextbox">
//     <p>${taskList[1].taskName}</p>
//     <p>${taskList[1].taskDescription}</p>
// </li>
// `
