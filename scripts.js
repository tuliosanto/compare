// Animação de rolagem do Menu de Topo.
window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

//Próximo Scripts
