const headerMap = {
  id: 'Id',
  name: 'Name',
  createdDate: 'Created Date',
  description: 'Description',
  edit: 'Edit',
  delete: 'Delete',
};

class Table {
        constructor(data) {
          this.data = data;
          this.creatingOrder = {};
          this._initView();
        }

        _initView() {
          this.container = document.querySelector('.container');
          this.table = document.createElement('table');
          this.container.appendChild(this.table);

          const thead = document.createElement('thead');
          this.table.appendChild(thead);
          Object.keys(headerMap).forEach((headerKey) => {
            const th = document.createElement('th');
            th.textContent = headerMap[headerKey];
            thead.appendChild(th);
          });

          this.tbody = document.createElement('tbody');
          this.table.appendChild(this.tbody);
          this.data.forEach((item, index) => {
            const tr = document.createElement('tr');
            this.tbody.appendChild(tr);
            Object.keys(headerMap).forEach((headerKey) => {
              const td = document.createElement('td');
              if (item[headerKey]) {
                td.textContent = item[headerKey];
              } else {
                const button = document.createElement('button');
                button.textContent = headerMap[headerKey];
                button.onclick = this._handleRowAction.bind(this, headerKey, index);
                td.appendChild(button);
              }
              tr.appendChild(td);
            });
          });
        }

        _handleRowAction(actionType, index) {
          if (actionType === 'delete') {
            console.log(event.target.parentElement.parentElement);
            this.tbody.removeChild(event.target.parentElement.parentElement);
            this.data = this.data.filter((item, i) => i !== index);
          } else if (actionType === 'edit') {

    }
  }

  renderForm() {
    this.form = document.createElement('form');
    this.container.appendChild(this.form);
    Object.keys(headerMap).forEach(headerKey => {
      if (headerKey !== 'edit' && headerKey !== 'delete') {
        const input = document.createElement('input');
        input.textContent = headerMap[headerKey];
        input.onchange = this._setToCreatingOrder.bind(this, headerKey);
        this.form.appendChild(input);
      }
    });
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.onclick = this._createOrder.bind(this);
    this.form.appendChild(saveBtn);
  }
  _setToCreatingOrder(key) {
    this.creatingOrder[key] = event.target.value;
  }
  _createOrder() {
    event.preventDefault();
    this.data.push(this.creatingOrder);
    const tr = document.createElement('tr');
    this.tbody.appendChild(tr);

    Object.keys(headerMap).forEach((headerKey) => {
      const td = document.createElement('td');
      if (this.creatingOrder[headerKey]) {
        td.textContent = this.creatingOrder[headerKey];
      } else {
        const button = document.createElement('button');
        button.textContent = headerMap[headerKey];
        button.onclick = this._handleRowAction.bind(this, headerKey, this.data.length - 1);
        td.appendChild(button);
      }
      tr.appendChild(td);
    });
    this.creatingOrder = {};
    this.container.removeChild(this.form);
  }
}