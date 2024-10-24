
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        let clases = ["javascript", "htmlcss", "github", "bootstrap", "comunicacion", "trabajo", "creatividad", "dedicacion"];
        let porcentajes = [65, 90, 60, 50, 75, 95, 80, 90];
        
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



