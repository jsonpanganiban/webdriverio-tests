const BasePage = require('./BasePage')

class LoginPage extends BasePage{

    constructor() {
        super();
    }

    open() {
        super.open('index.php?controller=authentication&back=my-account');
    }

    get buttonLogin() {
        return $('.login');
    }
    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#passwd');
    }

    get buttonSubmit () {
        return $('#SubmitLogin')
    }
    get errorText() {
        return $('.alert-danger li').getText(); 
    }

    loginAs(username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.buttonSubmit.click();
    }
}

module.exports = LoginPage;