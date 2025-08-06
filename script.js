document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');

  let currentInput = '';
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      if (button.id === 'clear') {
        currentInput = '';
        display.value = '';
      } 
      else if (button.id === 'equals') {
        try {
          currentInput = eval(currentInput).toString();
          display.value = currentInput;
        } catch {
          display.value = 'Error';
          currentInput = '';
        }
      } 
      else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll(".buttons button");
//     let currentInput = '';
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const value = button.getAttribute('data-value');
//             if (button.id === "clear") {
//                 currentInput = '';
//                 display.value = '';
//             } else if (button.id === "equals") {
//                 currentInput = eval(currentInput).toString();
//                 display.value = currentInput;
//             }
//             else {
//                 currentInput += value;
//                 display.value = currentInput;
//             }
//         });
//     });
// });