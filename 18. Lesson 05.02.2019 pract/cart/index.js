let table;
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
         table = new Table(data);
    });

const addBtn = document.querySelector('.add-btn');
addBtn.onclick = () => table.renderForm();