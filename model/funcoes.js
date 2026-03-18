const { listaDeEstados } = require("./arquivo");

function getListaDeEstados() {
    
    let ufs = []
    
    listaDeEstados.estados.forEach(function (itemEstado) {
        ufs.push(itemEstado.sigla)
        
        
    })
    
    let listaUfs = {'uf': ufs, 'quantidade':ufs.length}

    return listaUfs
    
}

function getDadosEstado(){
    let estado = []
    let sigla = 'SP'
    listaDeEstados.estados.forEach(function(itemEstado){
        if (itemEstado.sigla == sigla){
            estado = itemEstado
        }
    })
    console.log(estado)

}

console.log(getListaDeEstados())

//getDadosEstado()