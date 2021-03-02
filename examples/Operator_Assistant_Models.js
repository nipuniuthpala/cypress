describe('Operator assistant Portal-Models' ,function() {
it ('Successfully create an english broadband model',function(){
   // go to the target web
    cy.logInStag.logInStag();
    cy.logInNormalUser.logInNormalUser();
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
      cy.logInStag.logInStag();
      cy.logInNormalUser.logInNormalUser();
   
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
      cy.logInStag.logInStag();
      cy.logInNormalUser.logInNormalUser();
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
      cy.logInStag.logInStag();
      cy.logInNormalUser.logInNormalUser();
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


      it ('Verify user can delete words in the model and edit the model',function(){
   // go to the target web
      cy.logInStag.logInStag();
      cy.logInNormalUser.logInNormalUser();
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
      cy.get('#react-select-2-option-0').click()
      cy.get('#form-description').type(cy.profile_name.profile_name())
      cy.get('#form-topic').type(cy.profile_name.profile_name())
      cy.get('button[class="btn idle btn-primary"]').click()
      cy.wait(1000)
      cy.get('.operator-assistant-sttmodel-words > section > :nth-child(1) > .btn').click({timeout:2000})
      cy.get('input[name="words[0].word"]').type(cy.word1.word1())
      cy.get('input[name="words[0].sounds"]').type(cy.word1.word1())
      cy.get('input[name="words[0].display"]').type(cy.word1.word1())
     
      cy.get('.modal-footer > .component > .btn').click()
      cy.wait(7000)
      cy.get('[transform="matrix(1,0,0,1,16,18)"] > path').click({multiple:true})
   
      cy.wait(2000)
      cy.get('.btn-primary').click()
      cy.get('.Toastify__toast').then(($msg)=>{
        const text=$msg.text()
        expect(text).to.eq('Deleted word successfully✖︎')});
      cy.wait(9000)
      cy.get('.model-details > .d-flex > .btn').click()
      cy.get('.model-details > .justify-content-end > .btn').click()
      cy.get('.modal-footer > .btn-primary').click()
      cy.wait(4000)
      cy.get('.Toastify__toast').then(($msg)=>{
          const text=$msg.text()
          expect(text).to.eq('Deleted model successfully✖︎')});
          cy.get('.image > .icon').click()
          cy.get('.menu > button.dropdown-item').click()
          


});
});
