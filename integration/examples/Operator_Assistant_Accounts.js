
  let inboxId
  let emailAddress;
  //const url="https://admin-ui-dev-3000-esd-aiplatform.dev-zed2-jpe2.dev.jp.local/invitation/"
 const url="https://stg-platform.ai.rakuten-it.com/invitation/"

describe('Operator assistant Portal-Accounts' ,function() {

 it ('Validate admin/owner can Successfully create team/invite/delete members',function(){
      // go to the target web
   
     cy.logInStag.logInStag()
     cy.loginAdminUser.loginAdminUser()
    
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
         cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(4000)
        cy.get('[clip-path="url(#__lottie_element_90)"] > [transform="matrix(1,0,0,1,0,2.5)"] > :nth-child(1) > :nth-child(3) > path').click({timeout:5000} );

        cy.get('.Toastify__toast').then(($msg)=>{
           const text=$msg.text()
         expect(text).to.eq('Members removed successfully.✖︎')});
         cy.get('.active').click();
            cy.get('.component > .form-control').type(cy.testTeam.testTeam())
            cy.wait(3000)
            cy.get('div[class="row no-gutters"]').eq(1).click()
            cy.wait(3000)
            cy.get('.image > .icon').click({timeout:3000}).should('be.visible') ;
            cy.get('.menu > button.dropdown-item').click({timeout:3000});
    })


   
  
    it ('Validate admin/owner can successfully edit a team',function(){
        cy.logInStag.logInStag()
        cy.loginAdminUser.loginAdminUser()

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
        cy.get('div[class="row no-gutters"]').eq(1).click()
      
       
       cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col > .btn').click()
        cy.get('#form-name').clear()
        cy.get('#form-name').type(cy.testTeam1.testTeam1())
        cy.get('.component > .btn').click({timeout:2000})
   
        cy.get('.active').click();
        cy.get('.component > .form-control').type(cy.testTeam1.testTeam1())
        cy.wait(3000)
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
        cy.get('.image > .icon').click().should('be.visible');
        cy.get('.menu > button.dropdown-item').click({timeout:3000});
    })

    it ('Validate admin/owner successfully edit a payment',function(){
        cy.logInStag.logInStag()
      cy.loginAdminUser.loginAdminUser()
       cy.wait(4000)
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
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
         cy.get('.mt-5 > header > .align-items-center > .col-auto > .row > .col > .btn').click()
       
        cy.get('input[id="form-profile.name"]').clear({timeout:2000})
        cy.get('input[id="form-profile.name"]').type(cy.payment_name.payment_name())
        cy.get('.component > .btn').click()
        cy.get('.image > .icon').click({timeout:3000});
        cy.get('.menu > button.dropdown-item').click({timeout:3000});
    })

    it ('Validate admin/owner can successfully edit a payment method',function(){
        cy.logInStag.logInStag()
        cy.loginAdminUser.loginAdminUser()
        cy.wait(4000)
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
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
        cy.get(':nth-child(3) > header > .row > .col-auto > .btn').click()
        cy.get('.modal-footer > .btn-outline-light').click({timeout:3000})
        cy.get('.image > .icon').click();
        cy.get('.menu > button.dropdown-item').click({timeout:2000});
    })

    it('Validate admin/owner can successfully delete a team',function(){
        cy.logInStag.logInStag()
        cy.loginAdminUser.loginAdminUser()
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
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
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
       cy.wait(2000);
       cy.logInStag.logInStag()
       cy.logInNormalUser.logInNormalUser()
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
      cy.wait(3000)
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
          cy.get('div[class="row no-gutters"]').eq(1).click()
          cy.wait(5000)
          cy.get('[clip-path="url(#__lottie_element_90)"] > [transform="matrix(1,0,0,1,0,2.5)"] > :nth-child(1) > :nth-child(3) > path').click();
          cy.wait(2000)
        
          cy.get('.Toastify__toast').then(($msg)=>{
             const text=$msg.text()
           expect(text).to.eq('Members removed successfully.✖︎')});
           cy.get('.active').click();
              cy.get('.component > .form-control').type(cy.testTeam.testTeam())
              cy.wait(3000);
              cy.get('div[class="row no-gutters"]').eq(1).click()
              cy.wait(3000)
              cy.get('.image > .icon').click({timeout:3000});
              cy.get('.menu > button.dropdown-item').click({timeout:3000});
      })
    it ('Validate normal user can successfully edit a team',function(){
       cy.logInStag.logInStag()
       cy.logInNormalUser.logInNormalUser({timeout:5000})
       cy.wait(4000)
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
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col > .btn').click()
        cy.get('#form-name').clear()
        cy.get('#form-name').type(cy.testTeam3.testTeam3())
        cy.wait(2000)
        cy.get('.component > .btn').click()
   
        cy.get('.active').click();
        cy.get('.component > .form-control').type(cy.testTeam3.testTeam3())
        cy.wait(3000);
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
        cy.get('.image > .icon').click({timeout:3000});
        cy.get('.menu > button.dropdown-item').click({timeout:3000});
    })

   


 it('Validate normal user can successfully delete a team',function(){
       cy.logInStag.logInStag()
       cy.logInNormalUser.logInNormalUser()
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
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
        cy.get(':nth-child(1) > section > header > .align-items-center > .col-auto > .row > .col').click()
        cy.get('.mt-2 > .col-auto > .btn').click()
        cy.get('#form-input').type(cy.testTeam3.testTeam3())
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(3000);
        cy.get('.Toastify__toast').then(($msg)=>{
            const text=$msg.text()
            expect(text).to.eq('Your team "testTeam3" was successfully deleted.✖︎')});
    })

    it('Validate approver cannot  invite/edit/delete members',function(){
        cy.logInStag.logInStag()
        cy.logInNormalUser.logInNormalUser()
        cy.wait(4000)
        cy.get('.nav-link').click();
        cy.get('[href="/account/profile"]').click()
        cy.get('.btn-team').click()
        cy.get('.mt-3 > .component > .form-control').type(cy.newTest.newTest())
        cy.wait(4000)
        cy.get('.team > .btn').click({timeout:2000})
        cy.get('[href="/account/teams"]').click();
        cy.get('.component > .form-control').type(cy.newTest.newTest());
        cy.wait(3000);
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.get('.btn-invite').should('not.visible')  
        cy.get('.col > .btn').should('not.visible');
        cy.get('.actions > .btn > .icon').should('not.visible');

    })
    it('Validate editor cannot edit/delete team or invite members',function(){
        cy.logInStag.logInStag()
        cy.logInNormalUser.logInNormalUser()
        cy.wait(4000)
        cy.get('.nav-link').click();
        cy.get('[href="/account/profile"]').click()
        cy.get('.btn-team').click()
        cy.get('.mt-3 > .component > .form-control').type(cy.new11.new11())
        cy.wait(4000)
        cy.get('.team > .btn').click()
        cy.get('[href="/account/teams"]').click();
        cy.get('.component > .form-control').type(cy.new11.new11());
        cy.wait(3000);
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
        cy.get('.btn-invite').should('not.visible')  
        cy.get('.col > .btn').should('not.visible');
        cy.get('.actions > .btn > .icon').should('not.visible');

    })
    it('Validate viewer cannot edit/delete team or invite members',function(){
       cy.logInStag.logInStag()
        cy.logInNormalUser.logInNormalUser()
        cy.wait(4000)
        cy.get('.nav-link').click();
        cy.get('[href="/account/profile"]').click()
        cy.get('.btn-team').click()
      
        cy.get('.mt-3 > .component > .form-control').type(cy.teamIchiba.teamIchiba())
        cy.wait(4000)
        cy.get('.team > .btn').click({timeout:5000})
        cy.get('[href="/account/teams"]').click();
        cy.get('.component > .form-control').type(cy.teamIchiba.teamIchiba());
        cy.wait(3000);
        cy.get('div[class="row no-gutters"]').eq(1).click()
        cy.wait(3000)
        cy.get('.btn-invite').should('not.visible')  
        cy.get('.col > .btn').should('not.visible');
        cy.get('.image > .icon').click();
        cy.get('.menu > button.dropdown-item').click({timeout:2000});

    })

    //need to put sso email and password in index.js
    it ('Validate admin/owner can Successfully ssologin',function(){
      // go to the target web

       cy.task('logInSSO',{headless:false,args: [ '--enable-features=NetworkService', '--ignore-certificate-errors','--start-fullscreen', '--window-size=1920,1080','--no-sandbox']})

    }) 

})