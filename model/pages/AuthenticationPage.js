import BasePage from './BasePage';

class AuthenticationPage extends BasePage{

    open() {
        super.open('index.php?controller=authentication&back=my-account');
    }
}

export const authenticationPage = new AuthenticationPage();