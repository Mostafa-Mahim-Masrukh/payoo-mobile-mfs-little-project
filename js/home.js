

// add money to the account.....
document.getElementById('add-money-button').addEventListener('click', function (event) {
    event.preventDefault();

    //getting the PIN code
    const thePinCode = document.getElementById('the-pin-code').value;



    //getting the amount of Money
    const amountOfMoney = document.getElementById('amount-of-money').value;



    //verify the PIN number 
    //wrong way to verify the password or pin number
    if (thePinCode === '1234') {
        const availableBanalce = document.getElementById('available-balance').innerText;
        const newBalance = parseInt(availableBanalce) + parseInt(amountOfMoney);
        document.getElementById('available-balance').innerText = newBalance;

        thePinCode.value = ' ';
        amountOfMoney.value = ' ';

    }
    else {
        alert('Your Pin does not match. Try again !');
    }
})