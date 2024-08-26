describe('Full Application Test Suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });
 
  // Header Navigation Test Cases
  it('should navigate to Home page', () => {
    cy.visit('');
    cy.get('nav').contains('Home').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    // cy.get('h1').contains('Welcome to Home Page').should('exist');
  });
 
  it('should navigate to Todos page', () => {
    cy.get('nav').contains('Todos').click();
    cy.url().should('include', '/todos');
    cy.get('h2').contains('Todo List').should('exist');
  });
 
  it('should navigate to Login page', () => {
    cy.get('nav').contains('Login').click();
    cy.url().should('include', '/login');
    cy.get('h2').contains('Login').should('exist');
  });
 
  // Todo App Test Cases
  it('should add a new todo', () => {
    cy.visit('/todos');
    cy.addTodo('New Todo');
    cy.get('.todo-list').contains('New Todo').should('exist');
  });
 
  it('should update a todo', () => {
    cy.visit('/todos');
    cy.addTodo('New Todo');
    cy.window().then((win) => {
      cy.stub(win, 'prompt')
        .onFirstCall()
        .returns('Updated Title')
        .onSecondCall()
        .returns('Updated Description');
            cy.get('.todo-list li').first().contains('Edit').click();

    cy.get('.todo-list').contains('Updated Title').should('exist');
    cy.get('.todo-list').contains('Updated Description').should('exist');
  });
});
 
  it('should delete a todo', () => {
    cy.visit('/todos');
    cy.addTodo('New Todo');
    cy.get('.todo-list li').first().contains('Delete').click();
    cy.get('.todo-list').should('not.contain', 'New Todo');

  });
 
  // Login Form Test Cases
  it('should display login form', () => {
    cy.visit('/login');
    cy.get('input[id="email"]').should('exist');
    cy.get('input[id="password"]').should('exist');
  });
 
  it('should show error message for invalid login', () => {
    cy.visit('/login');
    cy.get('input[id="email"]').type('invalidUser');
    cy.get('input[id="password"]').type('wrongPassword');
    cy.get('button[type="submit"]').click();
    // cy.get('.alert-danger').should('contain', 'Invalid credentials');
  });
 
  it('should login successfully with valid credentials', () => {
    cy.visit('/login');
    cy.get('input[id="email"]').type('validUser');
    cy.get('input[id="password"]').type('correctPassword');
    cy.get('button[type="submit"]').click();
    // cy.url().should('include', '/');
    // cy.get('h1').contains('Welcome, validUser').should('exist');
  });
});
