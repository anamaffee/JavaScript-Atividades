const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("btnLigar");
const btnDesligar = document.getElementById("btnDesligar");

      btnLigar.addEventListener("click", () => {
      lampada.src = "./lampada-acesa.jfif"; 
      });
            btnDesligar.addEventListener("click", () => {
            lampada.src = "./lampada apagada.jpg"; 
            });

