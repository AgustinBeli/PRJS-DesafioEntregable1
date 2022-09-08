let validate = true;

let delay = (task) => {
    return new Promise((resolve, reject) => {
        if (validate) {
            setTimeout(() => {
                resolve(task)
            }, 500);

        } else {
            reject(alert("error"))
        }
    });
}

export default delay