describe('Operator assistant Portal-Sessions',function() {
it('Vaildate sessions sorting',function(){
  cy.logInStag.logInStag();
  cy.loginAdminUser.loginAdminUser()
  cy.wait(3000)
  cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click();
  cy.get('.form-control').click();
  cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
  cy.wait(3000)
  cy.get('.name').click({timeout:3000});
  cy.wait(4000)
  cy.get('.instance > .btn').click({timeout:3000});
  cy.get('span[class="icon lnr lnr-history"]').click({timeout:2000})
  cy.wait(3000)
  cy.get('.d-flex > .component > .dropdown > .btn').click();
  cy.get('.dropdown-menu > :nth-child(5)').click();
  cy.naviagteToOctombertoCurrentMonth.naviagteToOctombertoCurrentMonth()
  cy.get('.buttons > .row > :nth-child(2) > .btn').click();
  cy.get('header > .row > :nth-child(1) > .cell').click();
  cy.get('header > .row > :nth-child(2) > .cell').click();
  cy.get('header > .row > :nth-child(4) > .cell').click();
  cy.get('header > .row > :nth-child(5) > .cell').click();
  cy.get('header > .row > :nth-child(6) > .cell').click();
  cy.get('header > .row > :nth-child(7) > .cell').click();
  cy.get('header > .row > :nth-child(8) > .cell').click(); 
  cy.get('.image > .icon').click();
  cy.get('.menu > button.dropdown-item').click();
})



it ('Validate filtering in sessions',function(){
  cy.logInStag.logInStag();
cy.loginAdminUser.loginAdminUser()
 cy.wait(3000)
 cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click();
  cy.get('.form-control').click();
  cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
  cy.wait(3000)
  cy.get('.name').click({timeout:3000});
  cy.wait(4000)
  cy.get('.instance > .btn').click({timeout:3000});
  cy.get('span[class="icon lnr lnr-history"]').click()
  cy.wait(3000)
  cy.get('.d-flex > .component > .dropdown > .btn').click();
  cy.get('.dropdown-menu > :nth-child(5)').click();
  cy.naviagteToOctombertoCurrentMonth.naviagteToOctombertoCurrentMonth()
  
  cy.get('.buttons > .row > :nth-child(2) > .btn').click()
  cy.get('.btn-dropdown').click();
  cy.get(':nth-child(2) > .text').click();
  cy.get(':nth-child(1) > label > input').click();
  cy.get('.mt-4 > .btn').click();
  cy.wait(800);
  cy.get('.empty').then (($msg)=>{
    const text=$msg.text()
    expect(text).to.eq('not foundYou don\'t have any record yet.')});
  cy.wait(1000);
  cy.get('.filters > :nth-child(1) > .dropdown > .btn-dropdown').click()
  cy.wait(500);
  cy.get(':nth-child(2) > label > input').click();
  cy.wait(500);
  cy.get('.mt-4 > .btn').click();
  cy.wait(3000);
  cy.get('.body > :nth-child(1) > :nth-child(8)').then (($msg)=>{
    const text=$msg.text()
    expect(text).to.eq('Not Used')});
  cy.wait(500);
  cy.get('.filters > :nth-child(1) > .dropdown > .btn-dropdown').click()
  cy.wait(500);
  cy.get(':nth-child(3) > label > input').click();
  cy.wait(500);
  cy.get('.mt-4 > .btn').click();
  cy.wait(500);
  cy.get('.empty').then (($msg)=>{
      const text=$msg.text()
      expect(text).to.eq('not foundYou don\'t have any record yet.')});
      cy.wait(500);
      cy.get('.filters > :nth-child(1) > .dropdown > .btn-dropdown').click()
      cy.get(':nth-child(4) > label>input').click();
      cy.wait(500);
      cy.get('.mt-4 > .btn').click();
      cy.wait(500);
      cy.get(':nth-child(1) > :nth-child(8) > .cell > span').then (($msg)=>{
          const text=$msg.text()
          expect(text).to.eq('Trained')});
          cy.wait(500);
cy.get('.filters > :nth-child(1) > .dropdown > .btn-dropdown').click();
cy.wait(500);
cy.get('.filters > :nth-child(1) > .dropdown > .dropdown-menu > .tab-content > .active > :nth-child(1)').click();
cy.get('.mt-4 > .btn').click()
cy.get('.default > .component > .dropdown > .btn-dropdown').click();
cy.get('.default > .component > .dropdown > .dropdown-menu > .tab-content > .active > :nth-child(1)').click()
cy.get('form > .form-control').clear();
cy.get('form > .form-control').type('operator');
cy.get('.default > .component > .dropdown > .dropdown-menu > .tab-content > .active > .filter-value-container > .content > form > .mt-4 > .btn').click();
cy.get('.empty').then (($msg)=>{
  const text=$msg.text()
  expect(text).to.eq('not foundYou don\'t have any record yet.')});

cy.get('.filters > :nth-child(1) > .dropdown > .btn-dropdown').click()

cy.get(':nth-child(1) > .dropdown > .dropdown-menu > .tab-content > .active > .filter-value-container > .content > form > .mt-4 > .btn').click()
cy.get(':nth-child(2) > .dropdown > .btn-dropdown > .btn > .lnr').click()
cy.get(':nth-child(1) > :nth-child(8) > .cell > span').then (($msg)=>{
  const text=$msg.text()
  expect(text).to.eq('Trained')});

cy.get('.image > .icon').click();
cy.get('.menu > button.dropdown-item').click();

})

it ('Validate sessions pagination and editing a session',function(){
  cy.logInStag.logInStag();
  cy.loginAdminUser.loginAdminUser()
  cy.wait(6000)
  cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click();
  cy.get('.form-control').click();
  cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
  cy.wait(6000)
  cy.get('.name').click({timeout:4000});
  cy.wait(4000)
  cy.get('.instance > .btn').click({timeout:3000});

  cy.get('span[class="icon lnr lnr-history"]').click()
  cy.wait(3000)
  cy.get('.d-flex > .component > .dropdown > .btn').click();
  cy.get('.dropdown-menu > :nth-child(5)').click();
  cy.naviagteToOctombertoCurrentMonth.naviagteToOctombertoCurrentMonth()

  cy.get('.buttons > .row > :nth-child(2) > .btn').click();
  cy.wait(5000);
  
    cy.get('.body > :nth-child(2) > :nth-child(1)').click()
    cy.wait(3000)
   
      cy.get('audio').click()
      cy.get('audio').click()
      cy.wait(4000)
  
      cy.get('.mt-3 > .col-12 > h2').then(($msg)=>{
        const text=$msg.text()
        expect(text).to.eq('Content')});
        cy.get('.col-auto > .component > .btn').click()
    

 cy.get('.image > .icon').click();
 cy.get('.menu > button.dropdown-item').click();
})



})
