import { authenticationPage } from '../model/pages/AuthenticationPage';
import { loginPage } from '../model/pages/LoginPage';
import { context } from '../config/Context';

describe('Login tests', () => {
    authenticationPage.open();
    // it('Displays error when password is invalid', () => {
    //     authenticationPage.open();
    //     loginPage.loginAs(context.logins.invalidPassword);
    //     expect(loginPage.errorText).toBe('Invalid password.');
    // });
    it('Displays error when username is invalid ', () => {
        loginPage.loginAs(context.logins.invalidEmail);
        expect(loginPage.errorText).toBe('Invalid email address.');
    });
    it('Displays error for password required ', () => {
        loginPage.loginAs(context.logins.passwordRequired);
        expect(loginPage.errorText).toBe('Password is required.');
    });     
})
