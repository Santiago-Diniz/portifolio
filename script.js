  function escrevendoLetra(){
      function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
              elemento.innerHTML += letra;
        }, 200 * i);
    });
    } 
        
      const titulo = document.querySelector('.digitando');
      ativaLetra(titulo);
}
escrevendoLetra()

function menuMobol(){
      const ativaMenu = document.querySelector('.fa-bars');
      const navMenu = document.querySelector('header .navegacao-primaria')

      ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
})
}



const myObserver = new IntersectionObserver ( (entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.moving')

elements.forEach( (element) => myObserver.observe(element))
