const nameInput = document.getElementById('fullnameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phonenumberInput');
const dobInput = document.getElementById('dobInput');
const addrInput = document.getElementById('addrInput')

nameInput.value = data_user[0].fullname;
emailInput.value = data_user[0].email;
phoneInput.value = data_user[0].phonenumber;
dobInput.value = data_user[0].DOB;
addrInput.value = data_user[0].addr;