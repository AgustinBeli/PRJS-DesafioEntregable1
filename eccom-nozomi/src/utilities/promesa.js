let validate = true

let promesa = (task) => {
    return new Promise((resolve, reject) => {
        if (validate) {
            setTimeout(() => {
                resolve(task)
            }, 2000)

        } else {
            reject(alert("error"))
        }
    })
}

export default promesa