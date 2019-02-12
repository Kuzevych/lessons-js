
const fileInput = document.getElementById('file');
const img = document.createElement('img');
document.body.appendChild(img);

fileInput.onchange = () => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    const fileReader = new FileReader();
    fileReader.onload =(e) => {
        img.src = e.target.result;
    };
    fileReader.readAsDataURL(file);
};

