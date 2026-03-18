
const value = document.getElementById('value');
const plusButton = document.getElementById('mais');  
const minusButton = document.getElementById('menos');
const resetButton = document.getElementById('reset');


let count = 0;
let intervalId = 0;

        const updateValue = () => {
            value.innerHTML = count;
        };


            plusButton.addEventListener('click', () => {
                if (intervalId === 0) {
                    count += 1;
                    updateValue();
                }
            });

            minusButton.addEventListener('click', () => {
                if (intervalId === 0) {
                    count -= 1;
                    updateValue();
                }
            });

            
                    resetButton.addEventListener('click', () => {
                        count = 0;
                        clearInterval(intervalId);
                        intervalId = 0;
                        updateValue();
});