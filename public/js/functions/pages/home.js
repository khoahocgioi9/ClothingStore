// const emailInputElm = document.getElementById('loginEmail');
// const passwordInputElm = document.getElementById('passw');
// const btnsubmit = document.getElementById('btnLoginSubmit');
// const errorLoginMessage = document.getElementById('loginError');
// btnsubmit.addEventListener('click', function() {
//     const email = emailInputElm.value;
//     const password = passwordInputElm.value;
//     const flag = handleLogin(email, password);
//     const isAccept = isEmpty(email);

//     if (isEmpty(email)) {
//         // nếu email rỗng
//         errorLoginMessage.style.display = 'block';
//         errorLoginMessage.innerText = 'Vui lòng nhập email';
//         return;
//     }
//     if (isEmpty(password)) {
//         // nếu email rỗng
//         errorLoginMessage.style.display = 'block';
//         // Thay đổi đoạn text
//         errorLoginMessage.innerText = 'Vui lòng nhập password';
//         return;
//     }

//     if (flag) {
//         // thông báo lỗi
//         errorLoginMessage.style.display = 'block';
//         errorLoginMessage.innerText = 'Sai email/password';

//     } else {
//         //đá qua trang homepage
//         window.location.href = "Accout.html";
//         modalElm.style.display = 'none';
//         errorLoginMessage.style.display = 'none';
//         const token = `${email}+${password}`;
//         setLocalStorageData('token', token);

//     }


// });