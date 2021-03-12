

/*----- app's state (variables) -----*/
let total;
/*----- cached element references -----*/
const input = document.getElementById('num');



const totalNumber = document.querySelector('h1');





/*----- event listeners -----*/
document.querySelector('.button').addEventListener('click', handleClick);
document.querySelector('.button2').addEventListener('click', handleClick2);

/*----- functions -----*/
function init(){
    total = 0;


    render();
}
init();
function render(){
    input.textContent = 'f';
    
    totalNumber.textContent = total;

}
function handleClick(){
    //handle click for buttons 
    
    let inputValue = parseInt(input.value);
    
    total += inputValue;
    
    
    render  ();
    
}
function handleClick2(){
    //handle click for buttons 
    
    let inputValue = parseInt(input.value);
    
    total -= inputValue;
    
    console.log(total)
    render  ();
    
}
// function handleClicks(){
//     inputValue = 
// }
