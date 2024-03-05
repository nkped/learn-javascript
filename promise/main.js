
const person = document.querySelector('#person');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');


async function alarm(person, delay) {
    return new Promise((resolve, reject) => {

        if (!person) {throw new Error('Must provide a name')}
        if (!delay) {throw new Error('Must provide a delay')}
        if (delay < 0) {throw new Error('Delay must be positive number')}
        
            setTimeout(() => {
            resolve(`Wake up, ${person}!`)
            }, delay)
    })
}

button.addEventListener('click', async () => {
    try {
    const message = await alarm(person.value, delay.value)
    output.textContent = message
    } catch(err) {
        console.error(`Alarm failed: ${err.message}`)
    }
})

