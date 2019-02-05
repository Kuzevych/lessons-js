const headerMap = {
    id: 'Id',
    name: 'Name',
    createdDate: 'Created Date',
    description: 'Description',
    edit: 'Edit',
    delete: 'Delete'
};


class Table{
    constructor(data){
        this.data = data;
        this.creatindOrder = null;
        this._initView();
    }

    _initView() {
        this.cotainer = document.querySelector('.container')
        this.table = document.createElement('table');
        this.cotainer.appendChild(this.table);

        const thead = document.createElement('thead');
        this.table.appendChild(thead);
        Object.keys(headerMap).forEach((headerKey)=>{
            const th = document.createElement('th');
            th.textContent = headerMap[headerKey];
            thead.appendChild(th);
        });

        this.tbody = document.createElement('tbody');
        this.table.appendChild(this.tbody);

        this.data.forEach((item) => {
            const tr = document.createElement('tr');
           // tr.onclick = this._handleTrClick.bind(this);
            this.tbody.appendChild(tr);
            Object.keys(headerMap).forEach((headerKey)=>{
                const td = document.createElement('td');
                if(item[headerKey]){
                    td.textContent = item[headerKey];
                } else {
                    const button = document.createElement('button');
                    button.textContent = headerMap[headerKey];
                    button.onclick = this._handleRowAction.bind(this, headerKey);
                    td.appendChild(button);
                }
                tr.appendChild(td);
            });
        });
    }

    _handleRowAction(actionType, index){
        if(actionType === 'delete'){
            console.log(event.target.parentElement.parentElement);
            this.tbody.removeChild(event.target.parentElement.parentElement);
            this.data = this.data.filter((item,i)=> i!==index);
        } else if (actionType === 'edit'){

        }
    }

    renderForm(){
        const form = document.createElement('form');
        this.cotainer.appendChild(form);
        Object.keys(headerMap).forEach((headerKey) => {
            if(headerKey !== 'edit' && headerKey !== 'delete') {
                const input = document.createElement('input');
                input.textContent = headerMap[headerKey];
                input.onchange = this._setToCreatindOrder.bind(this, headerKey);
                form.appendChild(input);
            }
        });
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.onclick = this._createOrder.bind(this);
    }

    _setToCreatindOrder(key){
        this.creatindOrder[key] = event.target.value;
    }

    _createOrder(){
        this.data.push(this.creatindOrder);
        this.creatindOrder = {};
        const tr = document.createElement('tr');
        this.tbody.appendChild(tr);

        Object.keys(headerMap).forEach((headerKey)=>{
            const td = document.createElement('td');
            if(this.creatindOrder[headerKey]){
                td.textContent = this.creatindOrder[headerKey];
            } else {
                const button = document.createElement('button');
                button.textContent = headerMap[headerKey];
                button.onclick = this._handleRowAction.bind(this, headerKey, this.data.length-1);
                td.appendChild(button);
            }
            tr.appendChild(td);
        });

    }

}