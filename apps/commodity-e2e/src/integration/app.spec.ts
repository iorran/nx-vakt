import { getSendNominationButton } from '../support/app.po';

describe('commodity', () => {
  beforeEach(() => cy.visit('/'));

  it('should display send nomination button', () => { 
    getSendNominationButton().click();
  });
});
