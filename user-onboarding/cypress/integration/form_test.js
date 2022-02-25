// import { should } from "chai"

describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


const usernameInput = () => cy.get('input[name=username]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const tosBox = () => cy.get('input[type="checkbox"]')

it('sanity check to make sure tests work', () => {
    expect(1+1).to.equal(2)
    expect(2+2).not.to.equal(5)
})

it('the proper elements are showing', () => {
    usernameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    tosBox().should('exist')
})
})
