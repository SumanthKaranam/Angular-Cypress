declare namespace Cypress {
    interface Chainable {
      addTodo(name: string): void;
    }
  }