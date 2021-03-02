


describe('Operator assistant Portal-Insights' ,function() {
 it ('Successful Login & logout',function(){
      // go to the target web
    cy.logInStag.logInStag();
    cy.logInNormalUser.logInNormalUser();

     cy.get('.icon > .lnr').click();
     cy.get('button.dropdown-item').click();
     cy.get(('h3')).then(($msg)=>{
     const text=$msg.text()
     expect(text).to.eq('Tour')});
    });

     it ('Unsuccessful login',function(){
      cy.invalidUser.invalidUser()
      cy.get(('.form-feedback')).then(($msg)=>{
      const text=$msg.text()
      expect(text).to.eq('email must be a valid email')});
      cy.invalidPassword.invalidPassword()
      cy.get('.Toastify__toast-body').then(($msg)=>{
        const text=$msg.text()
        expect(text).to.eq('It seems like you don\'t have the access to the AI Portal .')});
  
});


it ('Verify Navigation to the Instance and check Insights-all filterations and data',function(){
  cy.logInStag.logInStag();
  cy.loginAdminUser.loginAdminUser({timeout:5000})
  cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click({timeout:3000});
  cy.get('.form-control').click();
  cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
  cy.wait(3000)
  cy.get('.name').click({timeout:3000});
  cy.wait(3000)
  cy.get('.content').click();
  cy.get(':nth-child(3) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(3) > .component > .dropdown > .dropdown-menu > :nth-child(5)').click({timeout:3000});
  cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(2) > .CalendarDay__firstDayOfWeek').click();
  cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(4) > .CalendarDay__lastDayOfWeek').click({timeout:1000});
  cy.get('.row > :nth-child(2) > .btn').click();
  cy.get(':nth-child(3) > .component > .dropdown > .btn').click();
  cy.get('.row > :nth-child(1) > .btn').click();
  cy.get(':nth-child(3) > .component > .dropdown > .dropdown-menu > :nth-child(1)').click();
  cy.get(':nth-child(3) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(3) > .component > .dropdown > .dropdown-menu > :nth-child(2)').click();
  cy.get(':nth-child(3) > .component > .dropdown > .btn').click();
  cy.wait(3000)
  cy.get(':nth-child(3) > .component > .dropdown > .dropdown-menu > :nth-child(3)').click();
  cy.get(':nth-child(3) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(3) > .component > .dropdown > .dropdown-menu > :nth-child(4)').click();
  
  
  cy.get(':nth-child(1) > .card > .card-body > .d-flex > .text > .title').then (($msg)=>{
    const text=$msg.text()
    expect(text).to.eq('Total Calls')});
  cy.get(':nth-child(2) > .card > .card-body > .d-flex > .text > .title').then (($msg)=>{
    const text=$msg.text()
    expect(text).to.eq('Average Call Time')});
  cy.get(':nth-child(3) > .card > .card-body > .d-flex > .text > .title').then (($msg)=>{
    const text=$msg.text()
    expect(text).to.eq('Correction Rate')});
  cy.get(':nth-child(4) > .card > .card-body > .d-flex > .text > .title').then (($msg)=>{
    const text=$msg.text()
    expect(text).to.eq('Average STT Rating')});
  cy.get(':nth-child(5) > .card > .card-body > .d-flex > .text > .title').then (($msg)=>{
      const text=$msg.text()
      expect(text).to.eq('Total STT Request')});
  cy.get('.col > .component > .dropdown > .btn').click();
  cy.get('.dropdown-menu > :nth-child(6)').click();
  cy.get('.col > .component > .dropdown > .btn').click();
  cy.get('.col > .component > .dropdown > .dropdown-menu > :nth-child(5)').click({timeout:3000});
  cy.get('.col > .component > .dropdown > .btn').click({timeout:3000});
  cy.get('.col > .component > .dropdown > .dropdown-menu > :nth-child(4)').click();
  cy.get('.col > .component > .dropdown > .btn').click({timeout:3000});
  cy.get('.col > .component > .dropdown > .dropdown-menu > :nth-child(3)').click();
  cy.get('.col > .component > .dropdown > .btn').click({timeout:3000});
  cy.get('.col > .component > .dropdown > .dropdown-menu > :nth-child(2)').click();
  cy.get('.col > .component > .dropdown > .btn').click({timeout:3000});
  cy.get('.col > .component > .dropdown > .dropdown-menu > :nth-child(1)').click();
  
  cy.get(':nth-child(2) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(2) > .component > .dropdown > .dropdown-menu > :nth-child(1)').click();
  cy.get(':nth-child(2) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(2) > .component > .dropdown > .dropdown-menu > :nth-child(2)').click();
  cy.get(':nth-child(2) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(2) > .component > .dropdown > .dropdown-menu > :nth-child(3)').click();
  cy.get(':nth-child(2) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(2) > .component > .dropdown > .dropdown-menu > :nth-child(4)').click();
  cy.get(':nth-child(2) > .component > .dropdown > .btn').click();
  cy.get(':nth-child(2) > .component > .dropdown > .dropdown-menu > :nth-child(5)').click();
  cy.get('.image > .icon').click({timeout:3000});
  cy.get('.menu > button.dropdown-item').click({timeout:1000});
   
});



it ('Validate normal user unable to see Users Tab in Accounts ',function(){
  cy.logInStag.logInStag();
  cy.logInNormalUser.logInNormalUser()
  cy.get('.icon > .lnr').click();
  cy.get('[href="/account/profile"]').click();
  cy.get('[href="/account/teams"]').click();
  cy.get('[href="/account/users"]').should('not.visible');
  cy.get('[href="/account/preference"] > .title').click();
  cy.get('.image > .icon').click({timeout:3000});
  cy.get('.menu > button.dropdown-item').click({timeout:1000});
  
});

it ('Validate admin user able to see Users Tab in Accounts ',function(){
  cy.loginAdminUser.loginAdminUser()
  cy.get('.icon > .lnr').click();
  cy.get('[href="/account/profile"]').click();
  cy.get('[href="/account/teams"]').click();
  cy.get('[href="/account/users"]').click();
  cy.get('[href="/account/preference"] > .title').click();
  cy.get('.icon > .lnr').click();
  cy.get('button.dropdown-item').click();
})

it ('Validate admin user able to search users ',function(){
  cy.loginAdminUser.loginAdminUser()
  cy.get('.icon > .lnr').click();
  cy.get('[href="/account/profile"]').click();
  cy.get('[href="/account/users"]').click();
  cy.get('.component > .form-control').type(cy.inputName.inputName())
  cy.focused().type('{downarrow}{enter}', {force:true})
  cy.wait(4000)
  cy.get('.name').then(($msg)=>{
    const text=$msg.text()
    expect(text).to.eq(cy.name.name())});
   cy.get('.image > .icon').click({timeout:3000});
   cy.get('button.dropdown-item').click();
})

it('Validate the preferences',function(){

  cy.loginAdminUser.loginAdminUser()
  cy.wait(5000)
  cy.get('.icon > .lnr').click();
  cy.get('[href="/account/profile"]').click();
  cy.get('[href="/account/preference"] > .title').click()
  cy.get('form > :nth-child(1) > .select > .select__control > .select__value-container').click({timeout:3000}).find('input').focus();
  cy.focused().type('{downarrow}{enter}', {force:true})
  cy.get('.component > .btn').click()
  cy.wait(3000)
  
    cy.get('form > :nth-child(1) > .select > .select__control > .select__value-container').click().find('input').focus();
    cy.focused().type('{downarrow}{enter}', {force:true})
    cy.focused().type('{downarrow}{enter}', {force:true})
    cy.get('.component > .btn').click()
    cy.wait(3000)
    cy.get('.image > .icon').click();
    cy.get('button.dropdown-item').click();
})

})
