const addTask = document.getElementById('addtask');
const cancel = document.getElementById('cancel');
const taskList = [
];

addTask.onclick = async function(){
    let taskName = await document.getElementById('taskname').value;
    let taskDescription = await document.getElementById('taskdescription').value;

    let taskItem = {
        taskName: taskName,
        taskDescription: taskDescription
    };

    localStorage.setItem('taskname',JSON.stringify(taskName));
    localStorage.setItem('taskdescription', JSON.stringify(taskDescription));
    taskList.push(taskItem);
    await refreash();

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

async function refreash(){
    let listing ='';

    for(const x of taskList){

        listing += `<li id="taskTextbox">
        <p>${x.taskName}</p>
        <p>${x.taskDescription}</p>
        </li>`
    }
// console.log(listing);

document.getElementById('lists').innerHTML = listing;
}

refreash();