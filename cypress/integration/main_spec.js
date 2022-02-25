import { cy } from 'cypress';

describe('Testing Pokedek App', () => {
  const LOCALSTORAGE_HOME = 'cached-https://pokeapi.co/api/v2/pokemon/';
  beforeEach(() => {
    cy.request('https://pokeapi.co/api/v2/pokemon/').as('pokemons');
    cy.visit('https://infallible-benz-96616c.netlify.app');
  });

  it('fetches the data', () => {
    cy.get('@pokemons').should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should render the cards with data', () => {
    expect(cy.get('[data-testid="test-datacards"]')).to.exist;
  });

  it('should store data in localstorage', () => {
    cy.get('@pokemons').should((response) => {
      expect(response.status).to.eq(200);
      expect(localStorage.getItem(LOCALSTORAGE_HOME)).not.to.null;
      expect(localStorage.getItem(LOCALSTORAGE_HOME)).to.eq(
        JSON.stringify(response.body)
      );
    });
  });
});

describe('Test for about page', () => {
  const LOCALSTORAGE_ABOUT = 'cached-https://pokeapi.co/api/v2/pokemon/1';

  it('fetches the data', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/1').as('abouts');
    cy.visit('https://infallible-benz-96616c.netlify.app');
    cy.get('@abouts').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('bulbasaur');
    });
  });

  it('should click on button', () => {
    cy.visit('https://infallible-benz-96616c.netlify.app');
    cy.get('[data-testid="test-datacards"]')
      .find('button')
      .should('have.length', 20);
    cy.get('[data-testid="test-datacards"]').find('button').first().click();
  });

  it('should store data in localstorage', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/1').as('abouts');
    cy.get('@abouts').should((response) => {
      expect(response.status).to.eq(200);
      expect(localStorage.getItem(LOCALSTORAGE_ABOUT)).not.to.null;
      expect(localStorage.getItem(LOCALSTORAGE_ABOUT)).to.eq(
        JSON.stringify(response.body)
      );
    });
  });
});
