describe('Onliner.by Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.onliner.by/');
  });

  it('1 - should display the main page correctly', () => {
    cy.title().should('include', 'Onlíner');
  });

  it('2 - should have a visible search bar', () => {
    cy.get('input.fast-search__input').should('be.visible');
  });
  
  it('3 - should have a visible login, fblogin, vklogin, gllogin buttons', () => {
    cy.wait(5000);
    cy.get('div.auth-bar__item.auth-bar__item--text').should('exist');
    cy.get('div.auth-bar__item--fb').should('exist');
    cy.get('div.auth-bar__item--vk-alter').should('exist');
    cy.get('div.auth-bar__item--gg').should('exist');
  });

 it('4 - should open bin page', () => {
  cy.get('div.auth-bar.auth-bar--top').should('be.visible');
  cy.get('a.auth-bar__item.auth-bar__item--cart').click();
  cy.contains('Корзина').should('be.visible');
  cy.url().should('eq', 'https://cart.onliner.by/')
});

it('5 - log in unsuccessfully', () => { 
    cy.fixture('creds.json').then((creds: { email: any; password: any; }) => {
    const { email, password } = creds;
    const modalOpenButton = cy.get('div.auth-bar__item.auth-bar__item--text');
    modalOpenButton.click();
    cy.get('.auth-input.auth-input_primary[type="text"]').type(email);
    cy.get('.auth-input.auth-input_primary[type="password"]').type(password);
    cy.get('.auth-button.auth-button_primary[type="submit"]').click();
    
    const errorEl = cy.get('.auth-form__description_error');
    errorEl.contains('Неверный логин или пароль')
  });
});

// it.only('6 - check search', () => {
//   cy.get('.fast-search__input').click();
//   const searchText = 'Hello world';
//   cy.get('.fast-search__input').type('Hello world');
//   // cy.get('.search__input[type="text"]').type('test');
//   //cy.get('.auth-input.auth-input_primary[type="text"]').type('test');
//   cy.url().should('eq', 'https://www.onliner.by/');
//   cy.get('.search__close').click();
//   cy.get('.fast-search__input').should('have.value', searchText);
// });

it('7 - check recovery password', () => {
  cy.screenshot();
  cy.recovery().get('.auth-form__title_base').contains('Помогите нам улучшить безопасность');
  
});

it('8 - check modified API response after click on Weather button', () => {
  cy.intercept('GET', 'https://pogoda.onliner.by/sdapi/kurs/api/bestrate?currency=USD&type=nbrb', (req) => {
    req.reply({
      statusCode: 200,
      body: {
        amount: "2,5",
        grow: 1,
        delta: 0.0030999999999998806,
        banks: [],
        scale: 1
      },
      headers: {
        'content-type': 'application/json'
      },
      delay: 2000 
    });
  }).as('getBestRate');

  cy.get('._u.js-weather').click();

  cy.wait('@getBestRate').then((interception) => {
    expect(interception.response?.statusCode).to.eq(200);
    expect(interception.response?.body.amount).to.eq("2,5");
    expect(interception.response?.body.grow).to.eq(1);
    expect(interception.response?.body.delta).to.eq(0.0030999999999998806);
    expect(interception.response?.body.banks).to.be.an('array').that.is.empty;
    expect(interception.response?.body.scale).to.eq(1);
  });
});

})


