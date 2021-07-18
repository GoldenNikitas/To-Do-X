"use strict";
let ul = document.getElementById('task-list');
function loadtodos(){
    let data = JSON.parse(localStorage.getItem('todos'));
    if (data) {
        ul.innerHTML = data;
    }
}
loadtodos();
document.getElementById('add-task-button').addEventListener('click', function (){
    let input = document.querySelector('#input-task');
    let node = document.createElement("li");
    node.classList.add('tip');
    //mark complete/incomplete task
    let confirm = document.createElement('input');
        confirm.type = 'checkbox';
    node.appendChild(confirm);
    //task text
    let spanNode = document.createElement('span');//task text
        spanNode.classList.add('task');
        spanNode.appendChild(document.createTextNode(input.value));
    node.appendChild(spanNode);
    //DELETE task
    var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';
    node.appendChild(deleteBtn);
    //adding element to list
    document.getElementById('task-list').appendChild(node);
    //clear input
    document.getElementById('input-task').value=null;
    //saver
    localStorage.setItem('todos', JSON.stringify(ul.innerHTML));
});
document.addEventListener('click', function (e){
    if (e.target.classList.contains('delete-btn')){
        let parent = e.target.closest('li');
        parent.parentNode.removeChild(parent);
        localStorage.setItem('todos', JSON.stringify(ul.innerHTML));
    }
});