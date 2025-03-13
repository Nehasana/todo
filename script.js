let tasks = [
    // { id:1, task: "Breakfast", time: "7:30" },
    // { id:2, task: "python class", time: "9:00" },
    // { id:3, task: "lunch", time: "1:00" },
    // {id:4,task:"Frontend",time:"1:30"}
];

// Function to display tasks in a table
function display() {
    let firstvariable = tasks.reduce(function(acc, obj, ind) {
        let tr = `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.task}</td>
                <td>${obj.time}</td>
                <td><button onclick="deleteTask(${ind});">Delete</button></td>
                <td><button onclick="editTask(${ind});">Edit</button></td>
            </tr>
        `;
        acc = acc + tr;
        return acc;
    }, "");

    let table = `
        <tr>
            <th>id</th>
            <th> Task</th>
            <th>time</th>
            <th>Deleting</th>
            <th>Editing</th>
        </tr>
        ${firstvariable}
    `;

    document.getElementById("tabledetails").innerHTML = table;
}

display();

// Function to add a new task
function addTask() {
    let idvar=document.getElementById("id");
    let taskVar = document.getElementById("task");
    let timeVar = document.getElementById("time");
    let id=idvar.value;
    let task = taskVar.value;
    let time = timeVar.value;

    let obj = { id,task, time };
    tasks.push(obj);
    display();
}


function deleteTask(ind) {
    tasks.splice(ind, 1);
    display();
}

// Function to edit a task (load data into the input fields)
function editTask(ind) {
    document.getElementById("buttonadd").style.display = "none";
    document.getElementById("buttonedit").style.display = "inline-block";

    let taskVar = document.getElementById("task");
    let statusVar = document.getElementById("time");
    let idvar = document.getElementById("id");
    

    let obj = tasks[ind];
    idvar.value=obj.id;
    taskVar.value = obj.task;
    statusVar.value = obj.time;
}

// Function to save the edited task
function edit() {

    let idvar=document.getElementById("id");
    let taskVar = document.getElementById("task");
    let timeVar = document.getElementById("time");
    let ind=idvar.value;
     
   
    let task = taskVar.value;
    let time = timeVar.value;

    // let obj = { id,task, time };
    // tasks[Number(ind)] = obj;
    let obj = { id: Number(ind), task, time }; // Make sure id is a number to avoid issues
    tasks[ind] = obj;

    display();

    // Reset form and buttons after edit
    document.getElementById("buttonadd").style.display = "inline-block";
    document.getElementById("buttonedit").style.display = "none";
    document.getElementById("id").value="";
    document.getElementById("task").value = "";
    document.getElementById("time").value = "";
}
function deleteAll() {
    tasks = [];  
    display();   
}