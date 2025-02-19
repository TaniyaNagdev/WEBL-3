let fullDate = new Date();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = document.querySelector('#date');
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let add = document.querySelector('#add');
let tasks = document.querySelector('#tasks');

date.textContent = fullDate.getDate();
day.textContent = weekday[fullDate.getDay()];
month.textContent = `${fullDate.toDateString().split(' ')[1]} ${fullDate.getFullYear()}`;

let count = 0;

add.addEventListener('click', () => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const doneButton = document.createElement("button");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "text";
    doneButton.textContent = "✔";
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    doneButton.setAttribute('class','done')
    editButton.setAttribute('class','edit')
    deleteButton.setAttribute('class','delete')

    div.appendChild(doneButton);
    div.appendChild(input);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    tasks.appendChild(div);

    div.classList.add("task", `c${count}`);
    doneButton.classList.add("done", `c${count}`);
    input.classList.add(`c${count}`);
    editButton.classList.add("edit", `c${count}`);
    deleteButton.classList.add("delete", `c${count}`);
    
    input.focus();
    count++;
});

tasks.addEventListener("click", (event) => {
    let target = event.target;
    let taskDiv = target.closest(".task");
    let taskId = taskDiv.classList[1]; 

    if (target.classList.contains("done")) {
        let input = taskDiv.querySelector("input");
        input.disabled = true;
        input.style.color = 'grey';
        input.classList.add('line-through');
        target.style.backgroundColor = 'rgb(69, 211, 104)';
        target.style.border = '1px solid rgb(69, 211, 104)';
    } 
    
    else if (target.classList.contains("edit")) {
        let input = taskDiv.querySelector("input");
        input.disabled = false;
        input.focus();
        input.classList.remove('line-through');
    } 
    
    else if (target.classList.contains("delete")) {
        taskDiv.remove();
    }
});
