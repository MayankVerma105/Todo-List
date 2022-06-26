let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
button.addEventListener("click", fn);
function fn() {
    let task = input.value;
    if (task) {
        taskCreator(task);
        input.value = "";
    } else {
        alert("Enter some task");
    }
}

function taskCreator(task) {
     let div = document.createElement("div");
     let li = document.createElement("li");
     let button = document.createElement("button");
     li.textContent = task;
     button.textContent = "X";
     div.appendChild(li);
     div.appendChild(button);
     ul.appendChild(div);

     button.addEventListener("click", function () {
        div.remove();
     })
}