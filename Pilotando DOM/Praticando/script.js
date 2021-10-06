const button = document.getElementById("openModelButton")

const div = document.querySelector('.modal-wrapper')

button.onclick = () => {
    div.classList.remove('invisible')
}

document.addEventListener('keydown', (event) => {const escKey = event.key === 'Escape'
    if(escKey){
        div.classList.add('invisible')
    }
})