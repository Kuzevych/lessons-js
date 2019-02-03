

window.onload = () => {
    for (let i = 0; i < 10; i++) {
        let btn = document.createElement('button');
        btn.textContent = i;
        document.body.appendChild(btn);
        btn.onclick = () => alert(i);
    }
};