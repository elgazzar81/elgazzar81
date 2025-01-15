// 1.deposet the money
// 2.number of lines to bet on 
// 3.the amount of money to bet
// 4.spin the machine
// 5.determine if the player won or not
// 6.how much he won
// 7.play again
// appel package 
const prompt = require("prompt-sync")();
//fonction de deposition 
const deposit = () => {
    // infinite loop
    while(true){
    const depositamount = prompt("Enter the amount to deposit: ");
    // transefer the string into a float
    const numberdepositamount=parseFloat(depositamount);
    // condition if string is not number or inf a 0
    if(isNaN(numberdepositamount)|| numberdepositamount<=0)
    {
        console.log("Invalid Amount, Try again");
    }else {
        return numberdepositamount;
    }
}
};
// fonction to read number of lines
const getnuberlines = () =>
{
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        // transefer the string into a float
        const numberlines=parseFloat(lines);
        // condition if string is not number or inf a 0
        if(isNaN(numberlines)|| numberlines<=0||numberlines>3)
        {
            console.log("Invalid number of lines, Try again");
        }else {
            return numberlines;
        }
    }
};
// fonction amount of money to bet on 
const getbet = (balance, lines) =>
{
    while(true){
        const bet = prompt("Enter the number you want to bet per line: ");
        // transefer the string into a float
        const numberbet=parseFloat(bet);
        // condition if string is not number or inf a 0
        if(isNaN(numberbet)|| numberbet<=0||numberbet>balence /lines)
        {
            console.log("Invalid number of bet, Try again");
        }else {
            return numberbet;
        }
    }
};
// appel the fonctions to set the balance of the player and number of lines to bet on 
let balence = deposit();
const numberoflines= getnuberlines();
const bet = getbet(balance,numberoflines);
