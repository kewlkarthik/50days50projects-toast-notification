const button = document.getElementById('button')
const toasts = document.querySelector('.toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Theree',
    'Message Four',
    'Message Five',
]

button.addEventListener('click', () => {
    createNotification()
})

function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    
    notif.innerText = getRandomMessage()
    
    toasts.appendChild(notif)

    setTimeout(() => notif.remove(), 2000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}