onmessage = (e) => {
    console.log(e.data);
    const { data } = e;
    let count = 0;
    for (let i = 0; i < data.length; i++) {
            if(!isNaN(+data[i])) count++;
    }
    postMessage(count);

};

