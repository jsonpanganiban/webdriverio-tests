import { authenticationPage } from '../model/pages/authentication.page';
import { loginPage } from '../model/pages/login.page';
import { context } from "../config/context";

describe('Login tests', () => {
    authenticationPage.open();
    it('Displays error when password is invalid ', () => {
        loginPage.loginAs(context.loginData.invalidPassword);
        expect(loginPage.errorText).toBe('Authentication failed.');
    });
    it('Displays error for password required ', () => {
        loginPage.loginAs(context.loginData.passwordRequired);
        expect(loginPage.errorText).toBe('Password is required.');
    });
    it('Displays My Account upon logging in', () => {
        loginPage.loginAs(context.loginData.validLogin);
        expect(loginPage.myAccountHeader).toBeDisplayed();
    })
})
