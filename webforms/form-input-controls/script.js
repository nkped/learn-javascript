

const input = document.querySelector('#max-invite')
const output = document.querySelector('.invite-output')

output.textContent = input.value

input.addEventListener('change',() => {
    output.textContent = input.value
})