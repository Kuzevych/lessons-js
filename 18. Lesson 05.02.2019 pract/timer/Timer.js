class Timer {
  constructor(time, index) {
    this.time = time;
    this.index = index;
    this._initView();
  }

  _initView() {
    this.container = document.querySelector('.container');

    this.timerBlock = document.createElement('div');
    this.timerBlock.className = 'timer__block';
    this.container.appendChild(this.timerBlock);

    this.timerBtn = document.createElement('button');
    this.timerBtn.className = 'timer__add-btn';
    this.timerBtn.textContent = 'Add timer';
    this.timerBtn.onclick = this.startTimer.bind(this);
    this.timerBlock.appendChild(this.timerBtn);
  }

  startTimer() {
    this.timerBtn.className = 'timer__remove-btn';
    this.timerBtn.textContent = 'Remove timer';
    this.timerBtn.onclick = this.removeTimer.bind(this);

    this.timerWindow = document.createElement('div');
    this.timerWindow.textContent = this.time;
    this.timerBlock.appendChild(this.timerWindow);

    this._refreshTime();
  }

  _refreshTime() {
    setTimeout(() => {
      if (this.time) {
        this.timerWindow.textContent = --this.time;
        this._refreshTime();
      } else {
        this.timerWindow.textContent = `It was timer #${this.index}`;
      }
    }, 1000);
  }

  removeTimer() {
    this.container.removeChild(this.timerBlock);
  }
}