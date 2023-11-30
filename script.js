let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

const main = document.querySelector('main')

function verifyItens(itens){
    let listFigures = []
    let listFrames = []
    for(let i = 0;i < itens.length; i++){
        if(itens[i].type === 'Painting'){
            listFigures.push(itens[i])
        }else{
            listFrames.push(itens[i])
        }
    }
    return [listFrames, listFigures]
}

const figures = verifyItens(itens)[0]
const frames = verifyItens(itens)[1]

function createSection(figure, frame){
    const sectionAll = document.createElement('section')
    sectionAll.className = 'todosOsItens'
    main.appendChild(sectionAll)

    const textActionFigure = document.createElement('h1')
    textActionFigure.className = 'titulos'
    textActionFigure.innerText = 'Action Figure'
    sectionAll.appendChild(textActionFigure)

    const listItens = document.createElement('ul')
    listItens.className = 'listaDeItens'
    sectionAll.appendChild(listItens)

    for(let i = 0; i < figure.length; i++){
        let itensList = document.createElement('li')
        itensList.className = 'itens'
        listItens.appendChild(itensList)

        let divImage = document.createElement('div')
        divImage.className = 'divImg'
        itensList.appendChild(divImage)

        let imagen = document.createElement('img')
        imagen.className = 'imagensPaint'
        imagen.src = figure[i].image
        imagen.alt = 'Action Figure'
        divImage.appendChild(imagen)

        let nome = document.createElement('span')
        nome.innerText = `${figure[i].name}.`
        itensList.appendChild(nome)

        // let type = document.createElement('span')
        // type.className = 'type'
        // type.innerText = `${frame[i].type}`
        // itensList.appendChild(type)

        let priceFigure = document.createElement('span')
        priceFigure.innerText = `${frame[i].price}`
        priceFigure.className = 'price'
        itensList.appendChild(priceFigure)
    }
    
    const textActionFrame = document.createElement('h1')
    textActionFrame.innerText = 'Paintigs'
    textActionFrame.className = 'titulos'
    sectionAll.appendChild(textActionFrame)

    const listItensFrame = document.createElement('ul')
    listItensFrame.className = 'listaDeItens'
    sectionAll.appendChild(listItensFrame)

    for(let i = 0; i < frame.length; i++){
        let itensListFrame = document.createElement('li')
        itensListFrame.className = 'itens'
        listItensFrame.appendChild(itensListFrame)

        let divImageFrame = document.createElement('div')
        divImageFrame.className = 'divImg'
        itensListFrame.appendChild(divImageFrame)

        let imagenFrame = document.createElement('img')
        imagenFrame.className = 'imagensPaint'
        imagenFrame.src = frame[i].image
        imagenFrame.alt = 'Paintings'
        divImageFrame.appendChild(imagenFrame)

        let nomeFrame = document.createElement('span')
        nomeFrame.innerText = `${frame[i].name}.`
        nomeFrame.className = 'nome'
        itensListFrame.appendChild(nomeFrame)

        // let typeFrame = document.createElement('span')
        // typeFrame.className = 'type'
        // typeFrame.innerText = `${frame[i].type}`
        // itensListFrame.appendChild(typeFrame)

        let price = document.createElement('span')
        price.innerText = `${frame[i].price}`
        price.className = 'price'
        itensListFrame.appendChild(price)
    }
    return itensList, itensListFrame
}
createSection(figures, frames)

// function createSectionFrame(){
//     let sectionFrame = document.querySelector('#frame')

//     const listItens = document.createElement('ul')
//     listItens.className = 'listFrames'
//     sectionFrame.appendChild(listItens)

//     for(let i = 0; i < frames.length; i++){
//         let itensList = document.createElement('li')
//         itensList.className = 'itensList'
//         listItens.appendChild(itensList)
        
//         let nome = document.createElement('span')
//         nome.innerText =`${frames[i].name}`
//         itensList.appendChild(nome)
//     }
//     return itensList
// }

// function createSectionFigure(){
//     let sectionFigure = document.querySelector('#figure')

//     const listItensFigure = document.createElement('ul')
//     listItensFigure.className = 'listFigures'
//     sectionFigure.appendChild(listItensFigure)

//     for(let i = 0; i < figure.length; i++){
//         let itensListfigure = document.createElement('li')
//         itensListfigure.className = 'itensList2'
//         listItensFigure.appendChild(itensListfigure)
        
//         let nomeFigure = document.createElement('span')
//         nomeFigure.innerText =`${figure[i].name}`
//         itensListfigure.appendChild(nomeFigure)
//     }
//     return itensListfigure
// }
createSectionFrame()
createSectionFigure()

