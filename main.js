class User {
    constructor(Fname, Lname, email, password) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.email = email;
        this.password = password;
        this.role = 'user';
    }
}

// localStorage.clear()
const ADD = document.querySelector('.add');
const FIRST_NAME = document.querySelector('.firstName');
const LAST_NAME = document.querySelector('.lastName');
const EMAIL = document.querySelector('.email');
const PASSWORD = document.querySelector('.password');

let users = [];


ADD.addEventListener('click', () => {
    let counter = 0;
    if (document.querySelector('.firstName').validity.patternMismatch || document.querySelector('.firstName').validity.valueMissing) {
        document.querySelector('.firstName').style.border = '2px solid red';
    }
    if (document.querySelector('.firstName').validity.valid) {
        document.querySelector('.firstName').style.border = '2px solid green';
        counter++;
    }
    if (document.querySelector('.lastName').validity.patternMismatch || document.querySelector('.lastName').validity.valueMissing) {
        document.querySelector('.lastName').style.border = '2px solid red';
    }
    if (document.querySelector('.lastName').validity.valid) {
        document.querySelector('.lastName').style.border = '2px solid green';
        counter++;
    }
    if (document.querySelector('.email').validity.patternMismatch || document.querySelector('.email').validity.valueMissing) {
        document.querySelector('.email').style.border = '2px solid red';
    }
    if (document.querySelector('.email').validity.valid) {
        document.querySelector('.email').style.border = '2px solid green';
        counter++;
    }
    if (document.querySelector('.password').validity.patternMismatch || document.querySelector('.password').validity.valueMissing) {
        document.querySelector('.password').style.border = '2px solid red';
    }
    if (document.querySelector('.password').validity.valid) {
        document.querySelector('.password').style.border = '2px solid green';
        counter++;
    }

    if (counter == 4) {
        let newUser = new User(FIRST_NAME.value, LAST_NAME.value, EMAIL.value, PASSWORD.value);
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
            if (users.some(user => user.email === newUser.email)) {
                alert('Email adress alredy exist!!!')
            }
            else {
                users.push(newUser);
            }
        }
        else {
            users.push(newUser);
        }
        localStorage.setItem('users', JSON.stringify(users));
        FIRST_NAME.value = '';
        LAST_NAME.value = '';
        EMAIL.value = '';
        PASSWORD.value = '';
    }

})


document.querySelector('.signIN_BTN').addEventListener('click', function () {
    document.querySelector('.signUP').style.display = 'none'
    document.querySelector('.signIN').style.display = 'block'
})
document.querySelector('.signUP_BTN').addEventListener('click', function () {
    document.querySelector('.signUP').style.display = 'block'
    document.querySelector('.signIN').style.display = 'none'
})


document.querySelector('.login').addEventListener('click', function () {

    let EMAIL = document.querySelector('.email_login').value
    let PASSWORD = document.querySelector('.password_login').value
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == EMAIL) {
            if (users[i].password == PASSWORD) {
                document.querySelector('.signIN').style.display = 'none'
                document.querySelector('.profile').style.display = 'block'
                document.querySelector('.profile_name').textContent = `${users[i].Fname} ${users[i].Lname}`
                document.querySelector('.profile_email').textContent = `${users[i].email}`
            }
            else{
                alert('Incorect values!!!')
            }
        }
    }

})


document.querySelector('.signOUT_BTN').addEventListener('click',function(){
    document.querySelector('.signIN').style.display = 'block'
    document.querySelector('.profile').style.display = 'none'
    document.querySelector('.profile_name').textContent = ``
    document.querySelector('.profile_email').textContent = ``
    document.querySelector('.email_login').value = ''
    document.querySelector('.password_login').value = ''
})


