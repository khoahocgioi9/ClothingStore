const nameInput = document.getElementById('fullnameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phonenumberInput');
const dobInput = document.getElementById('dobInput');


nameInput.value = data_user[0].fullname;
emailInput.value = data_user[0].email;
phoneInput.value = data_user[0].phonenumber;
dobInput.value = data_user[0].DOB;