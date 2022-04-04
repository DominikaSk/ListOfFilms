const LOGIN_CREDENTIALS = {
    'username' : 'jankowalski',
    'password' : '1234'
}

const LoginForm = () => {
    const form = $(document.createElement('form'));
    form.attr({
        class: 'container'
    });
    const username = $(document.createElement('input'));
    username.attr({
        type: "text",
        class: 'form-control',
        id: 'username',
        placeholder: 'Login'
    });
    const password = $(document.createElement('input'));
    password.attr({
        type: "password",
        class: 'form-control',
        id: 'password',
        placeholder: 'Hasło'
    });
    const submitButton = $(document.createElement('button'));
    submitButton.html('Zaloguj');
    submitButton.attr({
        type: 'button',
        class: 'btn btn-light'
    });
    submitButton.click(authorizeUser);

    form.append([username, password, submitButton]) //tablica z dziecmi
    return form;
}

function authorizeUser(){
    const usernameValue = $('#username').val();
    const passwordValue = $('#password').val();
    if (usernameValue == LOGIN_CREDENTIALS.username &&
        passwordValue == LOGIN_CREDENTIALS.password){
            alert('Dane logowania są poprawne');
            window.location.href = "table.html";
            
        } else {
            alert('Dane logowania nie są poprawne');
        }
}

export default LoginForm;