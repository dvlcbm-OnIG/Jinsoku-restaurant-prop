const closeCart = document.getElementById('closeCart')
const openCart = document.getElementById('openCart')
const cartMenu = document.getElementById('cartMenu')


openCart.addEventListener('click', ()=>{
    cartMenu.classList.add('show')
})

closeCart.addEventListener('click', ()=>{
    cartMenu.classList.remove('show')
})