const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.Show-All')
const buttonMapAll = document.querySelector('.Map-All')
const buttonReduceAll = document.querySelector('.Reduce-All')
const buttonFilterAll = document.querySelector('.Filter-All')


function formatCurrecncy(value){
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function showAll(productArray) {
    let myLi = ''
    productArray.forEach((product) => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">$R ${formatCurrecncy(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

function MapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))
    showAll(newPrices)
}
function ReduceAllItens() {
    const ReducedPrice = menuOptions.reduce((acc, burger) => acc + burger.price, 0)
    list.innerHTML = `<li><p>A soma de todos os itens do menu é ${formatCurrecncy(ReducedPrice)}</span> </p> </li>`
}
function FilterAllItens() {
    const VeganMenu = menuOptions.filter(menuOptions => {
        if (menuOptions.vegan == true) {
            return true
        } else { return false }
    })
    showAll(VeganMenu)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', MapAllItens)
buttonReduceAll.addEventListener('click', ReduceAllItens)
buttonFilterAll.addEventListener('click', FilterAllItens)