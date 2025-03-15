document.getElementById('login-button-id').addEventListener('click', function (event) {
    event.preventDefault();

    //get the phone number

    const phoneNumberField = document.getElementById('phone-number');
    const phoneNumber = phoneNumberField.value;

    //get the PIN number

    const pinNumberField = document.getElementById('pin-number');
    const pinNumber = pinNumberField.value;

    //check the PIN number

    if (phoneNumber === '01773946426' && pinNumber === '123') {
    window.location.href = '/homePage.html'

    }
    else {
        alert('sorry. User not found!');
    }


    //clear the field
    phoneNumberField.value = ' ';
    pinNumberField.value = ' ';

})