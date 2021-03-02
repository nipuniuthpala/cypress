cy.logInStag={}
    cy.logInStag.logInStag =()=>{
       cy.visit('https://stg-platform.ai.rakuten-it.com/auth/login');
      // cy.visit('https://admin-ui-dev-3000-esd-aiplatform.dev-zed2-jpe2.dev.jp.local/auth/login');
      
    }
    cy.logInProd={}
    cy.logInProd.logInProd =()=>{
       
       cy.visit('https://platform.ai.rakuten-it.com/auth/login');
    }

    cy.logInNormalUser={}
        cy.logInNormalUser.logInNormalUser =()=>{
        cy.wait(4000)
        cy.get('input[name=email]').should('be.visible')    
        cy.get('input[name=email]').clear()
        cy.get('input[name=email]').type('felicity.smoak@arrow.com');
        cy.get('input[name=password').clear()
        cy.get('input[name=password]').type('belltree123');
        cy.get('.btn-primary').click();
    }

    cy.logInNormalProdUser={}
        cy.logInNormalProdUser.logInNormalProdUser=()=>{
        cy.wait(5000)
        cy.get('input[name=email]').should('be.visible')    
        cy.get('input[name=email]').clear()
        cy.get('input[name=email]').type('testautocypress@gmail.com');    
        cy.get('input[name=password]').clear()
        cy.get('input[name=password]').type('Test1234');
        cy.get('.btn-primary').click();
    }

    cy.invalidUser={}
        cy.invalidUser.invalidUser=()=>{
            cy.get('input[name=email]').should('be.visible')
            cy.get('input[name=email]').type('0773469181');
            cy.get('input[name=password]').type('belltree123');
            cy.get('.btn-primary').click();
    }
    cy.invalidPassword={}
        cy.invalidPassword.invalidPassword=()=>{
            cy.get('input[name=email]').should('be.visible')
            cy.get('input[name=email]').clear();
            cy.get('input[name=email]').type('felicity.smoak@arrow.com');
            cy.get('input[name=password]').type('test@123');
            cy.get('.btn-primary').click();
        }

    cy.loginAdminUser={}
        cy.loginAdminUser.loginAdminUser=()=>{
            cy.wait(6000)
            cy.get('input[name=email]').should('be.visible')
            cy.get('input[name=email]').clear();
            cy.get('input[name=email]').type('oliver.queen@arrow.com');
            cy.get('input[name=password]').clear();
            cy.get('input[name=password]').type('belltree123');
            cy.get('.btn-primary').click();
        }

    cy.naviagteToOctombertoCurrentMonth={}
       cy.naviagteToOctombertoCurrentMonth.naviagteToOctombertoCurrentMonth=()=>{
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.wait(5000)
        cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(2) > .CalendarDay__firstDayOfWeek').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.get('.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal').click();
        cy.wait(6000);
        cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(4) > .CalendarDay__lastDayOfWeek').click({force:true})

       }


       //variables
cy.japaneseText={}  
cy.japaneseText.japaneseText=()=>{
    let japaneseText="ユーザー設定"
    return japaneseText
}
cy.inputName={}
cy.inputName.inputName=()=>{
    let inputName="Nipuni"
    return inputName
}
cy.name={}
cy.name.name=()=>{
    let name="Gunatilake, Nipuni | Nipuni | DSAID"
    return name
}

cy.teamIchiba={}
cy.teamIchiba.teamIchiba=()=>{
    let teamIchiba="Ichiba"
    return teamIchiba
}

cy.profile_name={}
cy.profile_name.profile_name=()=>{
    let profile_name="test"
    return profile_name
}

cy.profile_email={}
cy.profile_email.profile_email=()=>{
    let profile_email="oliver.queen@arrow.com"
    return profile_email
}

cy.profile_email_normal_user={}
cy.profile_email_normal_user.profile_email_normal_user=()=>{
    let profile_email_normal_user="felicity.smoak@arrow.com"
    return profile_email_normal_user
}

cy.profile_address={}
cy.profile_address.profile_address=()=>{
    let profile_address="test"
    return profile_address
}

cy.payment_name={}
cy.payment_name.payment_name=()=>{
    let payment_name="test1"
    return payment_name
}

cy.invitation_email={}
cy.invitation_email.invitation_email=()=>{
    let invitation_email="nipuni.gunatilake@rakuten.com"
    return invitation_email
}
cy.testTeam={}
cy.testTeam.testTeam=()=>{
    let testTeam="testTeam"
    return testTeam
}
cy.testTeam1={}
cy.testTeam1.testTeam1=()=>{
    let testTeam1="testTeam1"
    return testTeam1
}

cy.testTeam2={}
cy.testTeam2.testTeam2=()=>{
    let testTeam2="testTeam2"
    return testTeam2
}


cy.testTeam3={}
cy.testTeam3.testTeam3=()=>{
    let testTeam3="testTeam3"
    return testTeam3
}

cy.newTest={}
cy.newTest.newTest=()=>{
    let newTest="newTest"
    return newTest
}

cy.new11={}
cy.new11.new11=()=>{
    let new11="new11"
    return new11
}

cy.password={}
cy.password.password=()=>{
    let password="Test1234"
    return password
}

cy.word1={}
cy.word1.word1=()=>{
    let word1="a"
    return word1
}
cy.word2={}
cy.word2.word2=()=>{
    let word2="b"
    return word2
}

cy.word3={}
cy.word3.word3=()=>{
    let word3="ア"
    return word3
}

cy.word4={}
cy.word4.word4=()=>{
    let word4="ク"
    return word4
}