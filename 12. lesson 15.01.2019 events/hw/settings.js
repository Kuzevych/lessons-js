const settings = () => {
    const checkboxesBlock = document.querySelector('.settings');
    if (checkboxesBlock.style.display === 'none') {
        checkboxesBlock.style.display = 'show';
    } else {
        checkboxesBlock.style.display = 'none';
    }
};


