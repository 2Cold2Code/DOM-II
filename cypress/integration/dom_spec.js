const all = document.querySelectorAll('*');
const keydownError = document.createElement('p');
const clickError = document.createElement('p');
const pars = document.querySelectorAll('p');
const header = document.querySelector('header');
const color = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]
const colorRand = () => {color[Math.random() + 7]}
const navContainer = document.querySelector('header div');
const nav = document.querySelector('nav');
const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    color: 'violet',
    backgroundColor: 'skyblue',
    zIndex: 1,
}
const anchors = document.querySelectorAll('.nav-link')

context("testing visibility of the header", () => {
  it("visits the home page", () => {
    cy.debug()
      .visit("http://127.0.0.1:5500/");
  });
  it('grabs the nav element', () => {
      cy.get('.nav')
        .trigger('mouseover')
        
  })
  it('grabs the home anchor', ()=> {
    cy.contains('Home')
  })
  it('clicks the Home anchor', ()=> {
    cy.contains('Home')
      .trigger('click')
      
  })
  it('removes mouse position from element', () => {
      cy.contains('Home')
        .trigger('mouseleave')
  })
  it('right-clicks the header', () => {
    cy.get('.main-navigation')
      .trigger('contextmenu')
  })
});
