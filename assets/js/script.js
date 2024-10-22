let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        let clases = ["javascript", "htmlcss", "github", "bootstrap", "comunicacion", "trabajo", "creatividad", "dedicacion"];
        let porcentajes = [15, 40, 20, 30, 80, 80, 80, 65];
        
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(clases[i]);
            habilidades[i].querySelector("span").textContent = porcentajes[i] + "%"; // Actualizar el texto del porcentaje
        }
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 




const lines = ['101010', '110011', '010101', '101101', '111000', '011010', '100100','101010', '110011', '010101', '101101', '111000', '011010', '100100','101010', '110011', '010101', '101101', '111000', '011010', '100100'];
const container = document.querySelector('.background-animation');

function createCodeLine() {
  const codeLine = document.createElement('div');
  codeLine.className = 'code-line';
  codeLine.textContent = lines[Math.floor(Math.random() * lines.length)];
  
  codeLine.style.position = 'absolute';
  codeLine.style.top = Math.random() * 200 + 'vh';
  codeLine.style.left = Math.random() * 100 + 'vw';

  codeLine.style.animationDelay = Math.random() * 0.4 + 's';

  container.appendChild(codeLine);

  setTimeout(() => {
    codeLine.remove();
  }, 4000);
}

