

window.onload = () => {
    for (let i = 0; i < 10; i++) {
        let btn = document.createElement('button');
        btn.textContent = i;
        document.body.appendChild(btn);
        btn.style.marginRight = 20+'px';
        btn.onclick = () => alert(i);
    }
};