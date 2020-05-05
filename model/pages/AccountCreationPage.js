class AccountCreationPage  {

    get inputFirstName() {
        return $('#customer_firstname');
    }

    get buttonCreateAnAccount() {
        return $('#SubmitCreate')
    }

    createAnAccount(email) {
        this.inputEmailAddress.setValue(email);
        this.buttonCreateAnAccount.click();
    }    
}

export const accountCreationPage = new AccountCreationPage();