const div = document.createElement('div');
const p = document.createElement('p');
document.body.appendChild(div);
div.appendChild(p);




//store three variables as empty for 1.current input. 2. operand. 3. secondary input

numOne = '';
operand = '';
numTwo = '';

//display the inputs

function displayNums(button){
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
            operand = '+';
            p.textContent = numOne + ' ' + operand
});

document.getElementById('subtract').addEventListener('click', function(){
        operand = '-';
        p.textContent = numOne + ' ' + operand
})
document.getElementById('multiply').addEventListener('click', function(){
        operand = '*';
        p.textContent = numOne + ' ' + operand;
})
document.getElementById('divide').addEventListener('click', function(){
        operand = '/';
        p.textContent = numOne + ' ' + operand;
})

document.getElementById('equal').addEventListener('click', function(){
    let result;
    if (operand === '+'){
        result = parseInt(numOne) + parseInt(numTwo)
       
    }

    else if (operand === '-'){

        result = parseInt(numOne) - parseInt(numTwo)
    }
    else if (operand === '*'){
        result = parseInt(numOne) * parseInt(numTwo)
    }
    else {
        result = parseInt(numOne) / parseInt(numTwo)
    }
    
   p.textContent = result;
   
})

document.getElementById('clear').addEventListener('click', function(){
    numOne = '';
    numTwo = '';
    operand = '';
    p.textContent = '';
})

