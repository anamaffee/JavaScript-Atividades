const value = document.getElementById('value');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const reset = document.getElementById('reset');


const updateValue = () =>{
    value.innerHTML = count;
};
 
        let counter = 0;
        let intervalId = 0;

  mais.addEventListener('mousedow'), () => {
     intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
  }
     menos.addEventListener('mousedow'), () => {
     intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
  }