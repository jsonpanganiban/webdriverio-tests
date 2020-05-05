class LoginPage {

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

    get inputEmailAddress() {
        return $('#email_create');
    }

    loginAs(user) {
        this.inputEmail.setValue(user.login);
        this.inputPassword.setValue(user.password);
        this.buttonSubmit.click();
    }    
};

export const loginPage = new LoginPage();