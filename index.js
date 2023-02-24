//...........user's choice

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }

};

//........picking computer's choice at random

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

//.......determine the winner

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {

        return 'it\s a tie!';
    }

    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'user won!';
        }
    }

    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }

    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else {
            return 'You won!';

        }
    }
}


//           html elements
const message = document.getElementById('message')
const compChoice = document.getElementById('computer_choice')


//............score table 
 
 const buttons = document.querySelectorAll('.flex-item')


//............apend table 
const table = (user, cpu, rslt) => {

    let td = document.createElement('td')
    span = document.createElement('span')

    span.textContent = ' 1 ' + '  ' + user + ' - ' + cpu + ' - ' + rslt

    td.appendChild(span)

    document.querySelector('#Tscores').appendChild(td)
}


//........Game function and passing the parameter
const playGame = (choice) => {
    const userChoice = getUserChoice(choice)
    const computerChoice = getComputerChoice()

    //.......getting the output for message
    const result = determineWinner(userChoice, computerChoice)

  
    //.......to print message to screen
    message.innerHTML = result

     compChoice.innerHTML = `the computer selected ${computerChoice}`

}



//button
function button(btn) {

    btn.addEventListener('click', () => {
        const btnValue = btn.value
        playGame(btnValue)

    })
}

buttons.forEach(button)















