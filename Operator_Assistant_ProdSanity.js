describe('Operator assistant Portal-Prodsanity' ,function() {

    it ('Validate admin/owner can Successfully create team/invite/delete members',function(){
         // go to the target web
      
        cy.logInProd.logInProd()
        cy.logInNormalProdUser.logInNormalProdUser()
       
        cy.get('.nav-link').click();
        cy.get('[href="/account/profile"]').click();
        cy.get('li > a').click();
        cy.get('li > a').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('Profile')});
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(3000)
           cy.get('.name').click()
   
       cy.get('[href="/account/teams"]').click();
       cy.get('.col-auto > .btn').click();
       cy.get('#form-name').type(cy.testTeam.testTeam());
       cy.get('#form-email').type(cy.profile_email.profile_email())
       cy.get('#form-description').type(cy.payment_name.payment_name())
       cy.get('.active > .fadeIn > .mb-3 > .col-auto > .btn').click();
       cy.get('input[id="form-payment.profile.name"]').type(cy.profile_name.profile_name())
       cy.get('textarea[id="form-payment.profile.address"]').type(cy.profile_address.profile_address())
       cy.get(':nth-child(2) > .btn').click()
       cy.get('.component > .btn').click()
   
   
       cy.get('ul > :nth-child(2) > a').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('Team Information')});
       cy.get(':nth-child(4) > header > .row > .col-auto > .btn').click({timeout:2000}) ;
     
       
       cy.get('form').within(($form) => {
       
       cy.get('input[name="invitees[0].email"]').click({force:true},{timeout:5000});})
       cy.get('input[name="invitees[0].email"]').type(cy.profile_email_normal_user.profile_email_normal_user())
       cy.get('.col-5 > .form-group > .component > .select__control > .select__value-container').click().find('input').focus();
       cy.focused().type('{downarrow}{enter}', {force:true})
       cy.get('.component > .btn').click();
       cy.get('.Toastify__toast').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('1 email invitation has been sent.✖︎')});
           cy.wait(2000)
           cy.get('.active').click();
           cy.get('.component > .form-control').type(cy.testTeam.testTeam({timeout:4000}))
           cy.wait(4000)
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click({timeout:4000})
           cy.get('[clip-path="url(#__lottie_element_90)"] > [transform="matrix(1,0,0,1,0,2.5)"] > :nth-child(1) > :nth-child(3) > path').click({timeout:5000} );
       
           cy.get('.Toastify__toast').then(($msg)=>{
              const text=$msg.text()
            expect(text).to.eq('Members removed successfully.✖︎')});
            cy.get('.active').click();
               cy.get('.component > .form-control').type(cy.testTeam.testTeam())
               cy.wait(3000)
               cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click({timeout:3000} )
               cy.get('.image > .icon').click({timeout:3000}).should('be.visible') ;
               cy.get('.menu > button.dropdown-item').click({timeout:3000});
       })
   
   
      
     
       it ('Validate admin/owner can successfully edit a team',function(){
       
          cy.logInProd.logInProd()
          cy.logInNormalProdUser.logInNormalProdUser()
   
           cy.get('.nav-link').click();
           cy.get('[href="/account/profile"]').click();
           cy.get('li > a').click();
           cy.get('li > a').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('Profile')});
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(3000)
           cy.get('.name').click()
           cy.wait(2000)
           cy.get('[href="/account/teams"]').click();
           cy.get('.component > .form-control').type(cy.testTeam.testTeam())
           cy.wait(3000)
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click({timeout:3000})
           cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col > .btn').click()
           cy.get('#form-name').clear()
           cy.get('#form-name').type(cy.testTeam1.testTeam1())
           cy.get('.component > .btn').click({timeout:2000})
      
           cy.get('.active').click();
           cy.get('.component > .form-control').type(cy.testTeam1.testTeam1())
           cy.wait(3000)
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click({timeout:3000})
           cy.get('.image > .icon').click().should('be.visible');
           cy.get('.menu > button.dropdown-item').click({timeout:3000});
       })
   
       it ('Validate admin/owner successfully edit a payment',function(){
          
        cy.logInProd.logInProd()
         cy.logInNormalProdUser.logInNormalProdUser()
   
           cy.get('.nav-link').click();
           cy.get('[href="/account/profile"]').click();
           cy.get('li > a').click();
           cy.get('li > a').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('Profile')});
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(3000)
           cy.get('.name').click()
           cy.get('[href="/account/teams"]').click();
           cy.get('.component > .form-control').type(cy.testTeam1.testTeam1())
           cy.wait(4000);
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click({timeout:3000})
           cy.get('.mt-5 > header > .align-items-center > .col-auto > .row > .col > .btn').click()
          
           cy.get('input[id="form-profile.name"]').clear({timeout:2000})
           cy.get('input[id="form-profile.name"]').type(cy.payment_name.payment_name())
           cy.get('.component > .btn').click()
           cy.get('.image > .icon').click({timeout:3000});
           cy.get('.menu > button.dropdown-item').click({timeout:3000});
       })
   
       it ('Validate admin/owner can successfully edit a payment method',function(){
         cy.logInProd.logInProd()
         cy.logInNormalProdUser.logInNormalProdUser()
   
           cy.get('.nav-link').click();
           cy.get('[href="/account/profile"]').click();
           cy.get('li > a').click();
           cy.get('li > a').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('Profile')});
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(3000)
           cy.get('.name').click()
           cy.get('[href="/account/teams"]').click();
           cy.get('.component > .form-control').type(cy.testTeam1.testTeam1())
           cy.wait(3000);
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
           cy.get(':nth-child(3) > header > .row > .col-auto > .btn').click()
           cy.get('.modal-footer > .btn-outline-light').click({timeout:3000})
           cy.get('.image > .icon').click();
           cy.get('.menu > button.dropdown-item').click({timeout:2000});
       })
   
       it('Validate admin/owner can successfully delete a team',function(){
      
          cy.logInProd.logInProd()
          cy.logInNormalProdUser.logInNormalProdUser()
          cy.wait(5000)
           cy.get('.nav-link').click();
           cy.get('[href="/account/profile"]').click()
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(3000)
           cy.get('.name').click()
           cy.get('[href="/account/teams"]').click();
   
           cy.get('.component > .form-control').type(cy.testTeam1.testTeam1());
           cy.wait(3000);
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
           cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col').click()
           cy.get('.mt-2 > .col-auto > .btn').click()
           cy.get('#form-input').type(cy.testTeam1.testTeam1())
           cy.get('.modal-footer > .btn-primary').click()
           cy.wait(3000);
           cy.get('.Toastify__toast').then(($msg)=>{
               const text=$msg.text()
               expect(text).to.eq('Your team "testTeam1" was successfully deleted.✖︎')});
   
               cy.get('.image > .icon').click();
               cy.wait(2000);
               cy.get('.menu > button.dropdown-item').click();
       })
   
       it ('Validate Normal user can Successfully create team/invite/delete members',function(){
           // go to the target web
         
           cy.logInProd.logInProd()
           cy.logInNormalProdUser.logInNormalProdUser()
           cy.wait(5000)
          cy.get('.nav-link').click();
          cy.get('[href="/account/profile"]').click();
          cy.get('li > a').click();
          cy.get('li > a').then(($msg)=>{
             const text=$msg.text()
             expect(text).to.eq('Profile')});
             cy.get('.btn-team').click()
             cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
             cy.wait(3000)
             cy.get('.content > .name').click()
       
         cy.get('[href="/account/teams"]').click();
         cy.get('.col-auto > .btn').click();
         cy.wait(5000)
         cy.get('#form-name').type(cy.testTeam2.testTeam2());
         cy.get('#form-email').type(cy.profile_email_normal_user.profile_email_normal_user())
         cy.get('#form-description').type(cy.profile_name.profile_name())
         cy.get('.active > .fadeIn > .mb-3 > .col-auto > .btn').click();
         cy.wait(4000);
         cy.get('input[id="form-payment.profile.name"]').type(cy.profile_name.profile_name())
         cy.get('textarea[id="form-payment.profile.address"]').type(cy.profile_address.profile_address())
         cy.get('.mb-3 > :nth-child(2) > .btn').click()
         cy.get('.component > .btn').click()
     
         cy.wait(6000);
         cy.get('ul > :nth-child(2) > a').then(($msg)=>{
             const text=$msg.text()
             expect(text).to.eq('Team Information')});
         cy.wait(2000)
         cy.get(':nth-child(4) > header > .row > .col-auto > .btn').click();
         cy.wait(5000);
         
         cy.get('form').within(($form) => {
         
         cy.get('input[name="invitees[0].email"]').click({force:true});})
         cy.get('input[name="invitees[0].email"]').type(cy.invitation_email.invitation_email())
         cy.get('.col-5 > .form-group > .component > .select__control > .select__value-container').click().find('input').focus();
         cy.focused().type('{downarrow}{enter}', {force:true})
         cy.get('.component > .btn').click();
         cy.get('.Toastify__toast').then(($msg)=>{
             const text=$msg.text()
             expect(text).to.eq('1 email invitation has been sent.✖︎')});
             cy.get('.active').click();
             cy.get('.component > .form-control').type(cy.testTeam.testTeam())
             cy.wait(3000);
             cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
             cy.wait(5000)
             cy.get('[clip-path="url(#__lottie_element_90)"] > [transform="matrix(1,0,0,1,0,2.5)"] > :nth-child(1) > :nth-child(3) > path').click();
             cy.wait(2000)
           
             cy.get('.Toastify__toast').then(($msg)=>{
                const text=$msg.text()
              expect(text).to.eq('Members removed successfully.✖︎')});
              cy.get('.active').click();
                 cy.get('.component > .form-control').type(cy.testTeam.testTeam())
                 cy.wait(3000);
                 cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
                 cy.get('.image > .icon').click({timeout:3000});
                 cy.get('.menu > button.dropdown-item').click({timeout:3000});
         })
       it ('Validate normal user can successfully edit a team',function(){
          
        cy.logInProd.logInProd()
         cy.logInNormalProdUser.logInNormalProdUser()
   
           cy.get('.nav-link').click();
           cy.get('[href="/account/profile"]').click();
           cy.get('li > a').click();
           cy.get('li > a').then(($msg)=>{
           const text=$msg.text()
           expect(text).to.eq('Profile')});
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(4000)
           cy.get('.content > .name').click()
           cy.get('[href="/account/teams"]').click();
           cy.get('.component > .form-control').type(cy.testTeam2.testTeam2())
           cy.wait(3000);
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
           cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col > .btn').click()
           cy.get('#form-name').clear()
           cy.get('#form-name').type(cy.testTeam3.testTeam3())
           cy.wait(2000)
           cy.get('.component > .btn').click()
      
           cy.get('.active').click();
           cy.get('.component > .form-control').type(cy.testTeam3.testTeam3())
           cy.wait(3000);
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
           cy.get('.image > .icon').click({timeout:3000});
           cy.get('.menu > button.dropdown-item').click({timeout:3000});
       })
   
      
   
   
    it('Validate normal user can successfully delete a team',function(){
          cy.logInProd.logInProd()
          cy.logInNormalProdUser.logInNormalProdUser()
          cy.wait(5000)
           cy.get('.nav-link').click();
           cy.get('[href="/account/profile"]').click()
           cy.get('.btn-team').click()
           cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
           cy.wait(4000)
           cy.get('.content > .name').click()
           cy.get('[href="/account/teams"]').click();
   
           cy.get('.component > .form-control').type(cy.testTeam3.testTeam3());
           cy.wait(3000);
           cy.get('[style="box-sizing: border-box; flex: 4 0 auto; min-width: 0px; width: 100px; display: flex;"]').click()
           cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col').click()
           cy.get('.mt-2 > .col-auto > .btn').click()
           cy.get('#form-input').type(cy.testTeam3.testTeam3())
           cy.get('.modal-footer > .btn-primary').click()
           cy.wait(3000);
           cy.get('.Toastify__toast').then(($msg)=>{
               const text=$msg.text()
               expect(text).to.eq('Your team "testTeam3" was successfully deleted.✖︎')});
       })
   
   
       it ('Successful Login & logout',function(){
        // go to the target web
        cy.logInProd.logInProd()
        cy.logInNormalProdUser.logInNormalProdUser()
  
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
    cy.logInProd.logInProd()
    cy.wait(5000)
    cy.logInNormalProdUser.logInNormalProdUser()
    cy.wait(5000)
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
    cy.logInProd.logInProd()
    cy.logInNormalProdUser.logInNormalProdUser()
    cy.get('.icon > .lnr').click();
    cy.get('[href="/account/profile"]').click();
    cy.get('[href="/account/teams"]').click();
    cy.get('[href="/account/users"]').should('not.visible');
    cy.get('[href="/account/preference"] > .title').click();
    cy.get('.image > .icon').click();
    cy.get('button.dropdown-item').click();
    
  });
 
  
  it('Validate the preferences',function(){
  
    cy.logInProd.logInProd()
    cy.logInNormalProdUser.logInNormalProdUser()
    cy.wait(5000)
    cy.get('.icon > .lnr').click();
    cy.get('[href="/account/profile"]').click();
    cy.get('[href="/account/preference"] > .title').click()
    cy.get('form > :nth-child(1) > .select > .select__control > .select__value-container').click({timeout:3000}).find('input').focus();
    cy.focused().type('{downarrow}{enter}', {force:true})
    cy.focused().type('{downarrow}{enter}', {force:true})
    cy.get('.component > .btn').click()
    cy.wait(3000)

      cy.get('form > :nth-child(1) > .select > .select__control > .select__value-container').click().find('input').focus();
      cy.focused().type('{downarrow}{enter}', {force:true})
      
      cy.get('.component > .btn').click()
      cy.wait(5000)
      cy.get('.image > .icon').click();
      cy.get('button.dropdown-item').click();
  })
  
  it ('Successfully create an english broadband model',function(){
    // go to the target web
    cy.logInProd.logInProd()
    cy.logInNormalProdUser.logInNormalProdUser()
     cy.wait(3000)
     cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click({timeout:3000});
     cy.get('.form-control').click();
     cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
     cy.wait(3000)
     cy.get(':nth-child(1) > .btn').click({timeout:3000});
     cy.wait(4000)
     cy.get(':nth-child(1) > .btn').click({timeout:3000});
     cy.get('span[class="icon lnr lnr-bubble"]').click({timeout:3000})
     cy.get('.col > .btn').click()
     cy.get('#form-name').type(cy.profile_name.profile_name())
     cy.get('input[name="description"]').type(cy.profile_name.profile_name())
     cy.get('input[name="topic"]').type(cy.profile_name.profile_name())
     cy.get('[class="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer"]').click()
     cy.get('#react-select-2-option-0').click()
     cy.get('button[class="btn idle btn-primary"]').click()
     cy.get('.operator-assistant-sttmodel-words > section > :nth-child(1) > .btn').click({timeout:2000})
 
     cy.get('input[name="words[0].word"]').type(cy.word1.word1())
     cy.get('input[name="words[0].sounds"]').type(cy.word1.word1())
     cy.get('input[name="words[0].display"]').type(cy.word1.word1())
     cy.get('.btn-link').click()
     cy.get('input[name="words[1].word"]').type(cy.word2.word2())
     cy.get('input[name="words[1].sounds"]').type(cy.word2.word2())
     cy.get('input[name="words[1].display"]').type(cy.word2.word2())
    
     cy.get('.modal-footer > .component > .btn').click()
     cy.wait(5000)
     cy.get('span[class="icon lnr lnr-bubble"]').click()
     cy.get('span[class="icon lnr lnr-history"]').click()
     cy.wait(10000)
     cy.get('span[class="icon lnr lnr-bubble"]').click()
     cy.wait(5000)
     cy.get('span[class="icon lnr lnr-history"]').click()
     cy.wait(5000)
     cy.get('span[class="icon lnr lnr-bubble"]').click()
     cy.wait(5000)
     cy.get('.btn-dropdown').click()
     cy.get('.active > .dropdown-item').click()
     cy.get('form > .form-control').type(cy.profile_name.profile_name())
     cy.get('.mt-4 > .btn').click()
     cy.wait(3000)
     cy.get('.body > :nth-child(1) > :nth-child(5)').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Ready')});
     cy.wait(1000)
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .btn').click()
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .dropdown-menu > .dropdown-item').click()
     cy.get('.modal-footer > .btn-primary').click()
     cy.wait(3000)
     cy.get('.Toastify__toast').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Deleted model successfully✖︎')});
     });
 
     it ('Successfully create an english narrowband model',function(){
         // go to the target web
         cy.logInProd.logInProd()
         cy.logInNormalProdUser.logInNormalProdUser()
    
       cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click();
       cy.get('.form-control').click();
       cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
       cy.wait(3000)
       cy.get(':nth-child(1) > .btn').click({timeout:3000});
       cy.wait(4000)
       cy.get(':nth-child(1) > .btn').click({timeout:3000});
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.get('.col > .btn').click()
       cy.get('#form-name').type(cy.profile_name.profile_name())
       cy.get('[class="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer"]').click()
       cy.get('#react-select-2-option-1').click()
       cy.get('#form-description').type(cy.profile_name.profile_name())
       cy.get('#form-topic').type(cy.profile_name.profile_name())
       cy.get('button[class="btn idle btn-primary"]').click()
       cy.get('.operator-assistant-sttmodel-words > section > :nth-child(1) > .btn').click({timeout:2000})
       cy.get('input[name="words[0].word"]').type(cy.word1.word1())
       cy.get('input[name="words[0].sounds"]').type(cy.word1.word1())
       cy.get('input[name="words[0].display"]').type(cy.word1.word1())
       cy.get('.btn-link').click()
       cy.get('input[name="words[1].word"]').type(cy.word2.word2())
       cy.get('input[name="words[1].sounds"]').type(cy.word2.word2())
       cy.get('input[name="words[1].display"]').type(cy.word2.word2())
       cy.get('.modal-footer > .component > .btn').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.get('span[class="icon lnr lnr-history"]').click()
       cy.wait(10000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-history"]').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.wait(6000)
       cy.get('.btn-dropdown').click()
       cy.get('.active > .dropdown-item').click()
       cy.get('form > .form-control').type(cy.profile_name.profile_name())
       cy.get('.mt-4 > .btn').click()
       cy.wait(5000)
       cy.get('.body > :nth-child(1) > :nth-child(5)').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Ready')});
     cy.wait(1000)
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .btn').click()
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .dropdown-menu > .dropdown-item').click()
       cy.get('.modal-footer > .btn-primary').click()
       cy.wait(3000)
       cy.get('.Toastify__toast').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Deleted model successfully✖︎')});
       });
   
 
       it ('Successfully create a japanese broadband model',function(){
      // go to the target web
      cy.logInProd.logInProd()
      cy.logInNormalProdUser.logInNormalProdUser()
       cy.wait(3000)
       cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click();
       cy.get('.form-control').click();
       cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
       cy.wait(3000)
       cy.get(':nth-child(1) > .btn').click({timeout:3000});
       cy.wait(4000)
       cy.get(':nth-child(1) > .btn').click({timeout:3000});
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.get('.col > .btn').click()
       cy.get('#form-name').type(cy.profile_name.profile_name())
       cy.get('[class="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer"]').click()
       cy.get('#react-select-2-option-2').click()
       cy.get('#form-description').type(cy.profile_name.profile_name())
       cy.get('#form-topic').type(cy.profile_name.profile_name())
       cy.get('button[class="btn idle btn-primary"]').click()
       cy.get('.operator-assistant-sttmodel-words > section > :nth-child(1) > .btn').click()
       cy.get('input[name="words[0].word"]').type(cy.word3.word3())
       cy.get('input[name="words[0].sounds"]').type(cy.word3.word3())
       cy.get('input[name="words[0].display"]').type(cy.word3.word3())
       cy.get('.btn-link').click()
       cy.get('input[name="words[1].word"]').type(cy.word4.word4())
       cy.get('input[name="words[1].sounds"]').type(cy.word4.word4())
       cy.get('input[name="words[1].display"]').type(cy.word4.word4())
       cy.get('.modal-footer > .component > .btn').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.get('span[class="icon lnr lnr-history"]').click()
       cy.wait(10000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-history"]').click()
       cy.wait(4000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.wait(5000)
       cy.get('.btn-dropdown').click()
       cy.get('.active > .dropdown-item').click()
       cy.get('form > .form-control').type(cy.profile_name.profile_name())
       cy.get('.mt-4 > .btn').click()
       cy.wait(3000)
       cy.get('.body > :nth-child(1) > :nth-child(5)').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Ready')});
     cy.wait(1000)
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .btn').click()
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .dropdown-menu > .dropdown-item').click()
       cy.get('.modal-footer > .btn-primary').click()
       cy.wait(3000)
       cy.get('.Toastify__toast').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Deleted model successfully✖︎')});
       });
 
       it ('Successfully create a japanese narrowband model',function(){
     // go to the target web
     cy.logInProd.logInProd()
     cy.logInNormalProdUser.logInNormalProdUser()
       cy.wait(3000)
       cy.get('#sidebar-tooltip-operator-assistant > .link > .component > g > #dark').click();
       cy.get('.form-control').click();
       cy.get('.form-control').type(cy.teamIchiba.teamIchiba());
       cy.wait(3000)
       cy.get(':nth-child(1) > .btn').click({timeout:3000});
       cy.wait(4000)
       cy.get(':nth-child(1) > .btn').click({timeout:3000});
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.get('.col > .btn').click()
       cy.get('#form-name').type(cy.profile_name.profile_name())
       cy.get('[class="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer"]').click()
       cy.get('#react-select-2-option-3').click()
       cy.get('#form-description').type(cy.profile_name.profile_name())
       cy.get('#form-topic').type(cy.profile_name.profile_name())
       cy.get('button[class="btn idle btn-primary"]').click()
       cy.wait(3000)
       cy.get('.operator-assistant-sttmodel-words > section > :nth-child(1) > .btn').click({timeout:2000})
       cy.get('input[name="words[0].word"]').type(cy.word3.word3())
       cy.get('input[name="words[0].sounds"]').type(cy.word3.word3())
       cy.get('input[name="words[0].display"]').type(cy.word3.word3())
       cy.get('.btn-link').click()
       cy.get('input[name="words[1].word"]').type(cy.word4.word4())
       cy.get('input[name="words[1].sounds"]').type(cy.word4.word4())
       cy.get('input[name="words[1].display"]').type(cy.word4.word4())
       cy.get('.modal-footer > .component > .btn').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.get('span[class="icon lnr lnr-history"]').click()
       cy.wait(10000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.wait(5000)
       cy.get('span[class="icon lnr lnr-history"]').click()
       cy.wait(4000)
       cy.get('span[class="icon lnr lnr-bubble"]').click()
       cy.wait(5000)
       cy.get('.btn-dropdown').click()
       cy.get('.active > .dropdown-item').click()
       cy.get('form > .form-control').type(cy.profile_name.profile_name())
       cy.get('.mt-4 > .btn').click()
       cy.wait(4000)
       cy.get('.body > :nth-child(1) > :nth-child(5)').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Ready')});
     cy.wait(1000)
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .btn').click()
     cy.get(':nth-child(1) > .column.actions > .cell > .btn-group > .dropdown-menu > .dropdown-item').click()
       cy.get('.modal-footer > .btn-primary').click()
       cy.wait(3000)
       cy.get('.Toastify__toast').then(($msg)=>{
         const text=$msg.text()
         expect(text).to.eq('Deleted model successfully✖︎')});
       });
 
 
 it('Vaildate sessions sorting',function(){
    cy.logInProd.logInProd()
    cy.logInNormalProdUser.logInNormalProdUser()
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
  
   })