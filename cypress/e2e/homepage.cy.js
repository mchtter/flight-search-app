let today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
let tomorrowStr = tomorrow.toISOString().split('T')[0]
let todayStr = today.toISOString().split('T')[0]

describe('homepage should contain: from, to, departure, return, passenger, one-way and submit button', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="from"]').should('exist')
    cy.get('input[name="to"]').should('exist')
    cy.get('input[name="departure"]').should('exist')
    cy.get('input[name="return"]').should('exist')
    cy.get('input[name="passenger"]').should('exist')
    cy.get('input[name="one-way"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })
})

describe('return date should be disabled when one-way is checked', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="one-way"]').check()
    cy.get('input[name="return"]').should('be.disabled')
  })
})

describe('return date should be enabled when one-way is unchecked', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="one-way"]').check()
    cy.get('input[name="one-way"]').uncheck()
    cy.get('input[name="return"]').should('not.be.disabled')
  })
})

describe('departure should init today', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="departure"]').should('have.value', todayStr)
  })
})

describe('return should init tomorrow', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="return"]').should('have.value', tomorrowStr)
  })
})

describe('departure should not be less than today', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="departure"]').clear().type('2021-01-01')
    cy.get('input[name="departure"]').should('have.value', todayStr)
  })
})

describe('return should not be less than departure', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="departure"]').clear().type('2021-01-01')
    cy.get('input[name="return"]').clear().type('2020-12-31')
    cy.get('input[name="return"]').should('have.value', tomorrowStr)
  })
})

describe('if return date is less than departure date, toast should appear', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="departure"]').clear().type('2021-01-01')
    cy.get('input[name="return"]').clear().type('2020-12-31')
    cy.get('button[type="submit"]').click()
    cy.get('#toast-warning').should('exist')
  })
})

describe('when submit button is clicked, it should redirect to /flights', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173')
    cy.get('input[name="from"]').type('Manila')
    cy.get('input[name="to"]').type('Cebu')
    cy.get('input[name="departure"]').clear().type('2021-01-01')
    cy.get('input[name="return"]').clear().type('2021-01-02')
    cy.get('input[name="passenger"]').type('1')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/flights')
  })
})

describe('if data is empty, No flights found should write in /flights page', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173/flights')
    cy.get('#no-flights').should('exist')
  })
})