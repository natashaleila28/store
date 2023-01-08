let cadenaParametrosUrl = location.search
let parametros = new URLSearchParams(cadenaParametrosUrl)
let id = parametros.get('id')
console.log(id)



let contenedor = document.getElementById('contenedor')

// filtro

let agentesFiltrados = data.filter(agente => {
    return agente.isPlayableCharacter
})
let agenteEncontrado = agentesFiltrados.find(agente => agente.uuid == id)
console.log(agenteEncontrado)
pintarAgente(agenteEncontrado)



function pintarAgente(agente) {
    // estilos de tarjeta detalles

    contenedor.innerHTML = ''
    contenedor.style.background = `url(${agente.background})`
    contenedor.style.filter = 'drop-shadow(2px 4px 6px black)'
    contenedor.style.backgroundSize = 'contain'
    contenedor.style.backgroundPosition = 'center'
    contenedor.style.backgroundColor = 'black'
    
    
    
    contenedor.style.height = '100vh'
        let div = document.createElement('div')
        div.className = 'card'
        div.style.width = '20rem'
        
        div.innerHTML = `<img src="${agente.fullPortrait}" class="card-img-top bg-secondary">
<div class="card-body bg-secondary">
<h5 class="card-title d-flex justify-content-center ">${agente.displayName}</h5>
<p class="card-text d-flex justify-content-center">${agente.role.displayName}</p>

</div>`

        contenedor.appendChild(div)
    

}
