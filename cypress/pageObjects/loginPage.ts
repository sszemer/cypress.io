const selectors = {
	usernameInput: '#user_login',
	passwordInput: '#user_password',
	signInInput: '[name="submit"]',
};

export class LoginPage {
	verifyIfBasicElementsAreDisplayed() {
		cy.get(selectors.usernameInput).should('be.visible');
		cy.get(selectors.passwordInput).should('be.visible');
		cy.get(selectors.signInInput).should('be.visible');
	}
	loginAs(username: string, password: string) {
		cy.get(selectors.usernameInput).type(username);
		cy.get(selectors.passwordInput).type(password);
		cy.get(selectors.signInInput).click();
	}
}
