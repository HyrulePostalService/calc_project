const div = document.createElement('div');
const p = document.createElement('p');
document.body.appendChild(div);
div.appendChild(p);





//store three variables as empty for 1.current input. 2. operand. 3. secondary input
let justCalculated;
numOne = '';
operand = '';
numTwo = '';

//display the inputs

function displayNums(button){
    if (justCalculated){
        numOne = '';
        numTwo = '';
        operand = '';
        p.textContent = '';
        justCalculated = false;
    }
    if (operand === ''){
        numOne += button.textContent;
        p.textContent = numOne;
    }

    else {
        numTwo += button.textContent;
        p.textContent = numOne + ' ' + operand + ' ' + numTwo;
    }

}

document.getElementById('add').addEventListener('click', function(){
           if (numOne !== '' && numTwo !== ''){
           calculateSum()
           }
           operand = '+';
           p.textContent = numOne + ' ' + operand
});

document.getElementById('subtract').addEventListener('click', function(){
    if (numOne !== '' && numTwo !== ''){
        calculateSum()
       }
       operand = '-';
            p.textContent = numOne + ' ' + operand
    })
document.getElementById('multiply').addEventListener('click', function(){
    if (numOne !== '' && numTwo !== ''){
        calculateSum()
       }
       operand = '*';
       p.textContent = numOne + ' ' + operand
})
document.getElementById('divide').addEventListener('click', function(){
    if (numOne !== '' && numTwo !== ''){
        calculateSum()
       }
       operand = '/';
       p.textContent = numOne + ' ' + operand
})

document.getElementById('equal').addEventListener('click', function(){
    if (numOne !== '' && numTwo !== ''){
        calculateSum();
    }
})

function calculateSum(){
    let result;
    if (operand === '+'){
        result = parseInt(numOne) + parseInt(numTwo);
    }
    else if (operand === '-'){
        result = parseInt(numOne) - parseInt(numTwo)
    }
    else if (operand === '*'){
        result = parseInt(numOne) * parseInt(numTwo)
    }
    else if (operand === '/'){
        result = parseInt(numOne) / parseInt(numTwo)
    }
    p.innerText = result.toLocaleString();
    numOne = result.toString()
    numTwo = '';
    justCalculated = true;
}
  


document.getElementById('clear').addEventListener('click', function(){
    numOne = '';
    numTwo = '';
    operand = '';
    p.textContent = '';
})

