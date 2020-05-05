// import { loginPage } from '../model/pages/Login.page';
const LoginPage = require('../model/pages/LoginPage')

describe('Login tests', () => {
    const loginPage = new LoginPage();    
    it('Displays error when password is invalid', () => {
        loginPage.open();
        loginPage.loginAs('json.panganiban@gmail.com', 'test');
        expect(loginPage.errorText).toBe('Invalid password.');
    });
    it('Displays error when username is invalid ', () => {
        loginPage.loginAs('asdasd', 'test');
        expect(loginPage.errorText).toBe('Invalid email address.');
    });
    it('Displays error for password required ', () => {
        loginPage.loginAs('json.panganiban@gmail.com', '');
        expect(loginPage.errorText).toBe('Password is required.');
    });     
})