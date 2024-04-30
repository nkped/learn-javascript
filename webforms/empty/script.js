

const input = document.querySelector('#guests')

const output = document.querySelector('output')

output.value = input.value


input.addEventListener('change', () => {
    output.value = input.value
})
