
gsap.registerPlugin(SplitText)

// Primeira coisa na maioria dos casos é mapear as coisas que serão usadas.


const lataMenor = document.querySelectorAll(".latas img:nth-child(2)");

const slide = document.querySelectorAll(".slide");

//contador é muito famoso em slides

let contador = 0;

let carregando = false;


lataMenor.forEach((lata) => {
    lata.onclick = () => {

        if(carregando) return; //se estiver carregando, não faça nada
        carregando = true; //se não estiver, inicie o carregamento


        const slideActivo = document.querySelector(".slide.ativo"); //aqui mapeamos de novo para que atualize o slide
        slideActivo.classList.remove("ativo");

        if(contador == 3){
            contador = 0;
        }else{
            contador++;
        }

        

        slide[contador].classList.add("ativo");

        animarTitulo();
        
        
        setTimeout(() => {
            carregando = false;
        }, 1100); 
    }
});

function irParaSlide(direcao) {
    if (carregando) return;
    carregando = true;

    const slideActivo = document.querySelector(".slide.ativo");
    slideActivo.classList.remove("ativo");

    if (direcao === "next") {
        contador = contador == 3 ? 0 : contador + 1;
    } else {
        contador = contador == 0 ? 3 : contador - 1;
    }

    slide[contador].classList.add("ativo");
    animarTitulo();

    setTimeout(() => {
        carregando = false;
    }, 1100);
}


document.querySelectorAll(".seta-next").forEach(btn => {
    btn.onclick = () => irParaSlide("next");
});

document.querySelectorAll(".seta-prev").forEach(btn => {
    btn.onclick = () => irParaSlide("prev");
});



function animarTitulo(){
    const split = SplitText.create(".slide.ativo h2",
    { type: "chars",
      mask: "chars",  
     }

)
gsap.from(split.chars, {
    y: "100%",
    opacity: 0,
    duration: 1,
    stagger: 0.05,
    delay: 0.3
})
}



const btn = document.getElementById('hambBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openMenu() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
  btn.classList.add('open');
}
function closeMenu() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  btn.classList.remove('open');
}

btn.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu); // fecha ao clicar fora
    





