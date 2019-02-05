class Timer {
    constructor(time){
        this.time = time;
        this._initView();
    }

    _initView(){
        this.container = document.querySelector('.container');

        this.timerBlock = document.createElement('div');
        this.timerBlock.className = 'timerBlock';
        this.container.appendChild(this.timerBlock);

        this.timerBtn = document.createElement('button');
        this.timerBtn.textContent = 'Add timer';
        this.timerBtn.className = 'timer__add-btn';
        this.timerBtn.onclick = this.startTimer.bind(this);
        this.timerBlock.appendChild(this.timerBtn);
    }

    startTimer(){
        this.removeTimerBtn.className = 'timer__remove-btn';
        this.timerBtn.textContent = 'Remove timer';
        this.removeTimerBtn.onclick = this.removeTimer.bind(this);

        this.timerWindow = document.createElement('div');
        this.timerWindow.textContent = this.time;
        this.timerBlock.appendChild(this.timerWindow);

        this.removeTimerBtn = document.createElement('button');
        this.removeTimerBtn.textContent = 'Remove timer';
        this.removeTimerBtn.className = 'timer__add-btn';
        this.removeTimerBtn.onclick = this.removeTimer.bind(this);
        this.timerBlock.appendChild(this.removeTimerBtn);

        this._refreshTime();
    }


    _refreshTime(){

        setTimeout(()=>{
            if(this.time){
                this.timerWindow.textContent = --this.time;
                this._refreshTime();
            }
        },1000);
    }

    removeTimer(){
        this.container.removeChild(this.timerBlock);
        //this.timerBlock = null;
    }

}