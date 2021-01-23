class User{
    constructor(Fname,Lname,email,password){
        this.Fname = Fname;
        this.Lname = Lname;
        this.email = email;
        this.password = password;
        this.role = 'user';
    }
}


const ADD = document.querySelector('.add');
const FIRST_NAME = document.querySelector('.firstName');
const LAST_NAME = document.querySelector('.lastName');
const EMAIL = document.querySelector('.email');
const PASSWORD = document.querySelector('.password');

ADD.addEventListener('click', () => {
    let users = [];
    let newUser = new User(FIRST_NAME.value,LAST_NAME.value,EMAIL.value,PASSWORD.value);
    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'));
        if(users.some(user => user.email === newUser.email)){
            alert('такий корустувач вже є')
        }
        else{
            users.push(newUser);
        }
    }
    else{
        users.push(newUser);
    }
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
    FIRST_NAME.value = '';
    LAST_NAME.value = '';
    EMAIL.value = '';
    PASSWORD.value = '';
})


// localStorage.clear()