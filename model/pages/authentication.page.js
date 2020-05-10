import Page from './base.page';

class AuthenticationPage extends Page{

    open() {
        super.open('index.php?controller=authentication&back=my-account');
    }
}

export const authenticationPage = new AuthenticationPage();