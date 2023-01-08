

let contenedor = document.getElementById('contenedor')

let agentesFiltrados = data.filter(agente => {
    return agente.isPlayableCharacter
})

agregarCards(agentesFiltrados)

// creacion de tarjeta y datos
function agregarCards (agentes) {
    
    contenedor.innerHTML=''
    agentes.forEach(agente => {
        let div = document.createElement('div')
    div.className='card'
    div.style.width='18rem'
    div.innerHTML=`<img src="${agente.displayIcon}" class="card-img-top" alt="...">
    <div class="card-body bg-dark text-white">
    <h5 class="card-title">${agente.displayName}</h5>
    <p class="card-text">${agente.role.displayName}</p>
    <a href="./details.html?id=${agente.uuid}" class="btn btn-secondary">More Details</a>
    </div>`

    contenedor.appendChild(div)
    })
    
}
