const { defaultUser, defaultDataRegister, defaultProfessional } = require('../../helpers/data.helper');

const ResultPage = require('../../pageobjects/result.page');

describe('Result Feature', () => {

    before( () =>{

    })

    beforeEach( () => {
        browser.reloadSession();
        ResultPage.open();
    })

    it('try to validate that url changes when user clicks on switch field option', () => {

        const errorMessage = 'Warning: The page has not been changed'

        ResultPage.btnFisicaSelect.click();
        expect(browser).toHaveUrlContaining('sp=phisical');
        ResultPage.btnLenguajeSelect.click();
        expect(browser).toHaveUrlContaining('sp=language');
        ResultPage.btnOcupacionalSelect.click();
        expect(browser).toHaveUrlContaining('sp=ocupational');
    });


    it('try to validate that url is refreshed when user searches Maria', () => {

        const errorMessage = 'Warning: Maria value was not found'

        ResultPage.inputBuscarResult.setValue('Maria');
        ResultPage.btnBuscarResult.click();
        expect(browser).toHaveUrlContaining('q=Maria');
        expect(ResultPage.inputAnswer).toExist();
    });


    it('try to validate that map hides when user clicks on list button', () => {

        const errorMessage = 'Warning: Map is not hidden'

        expect(ResultPage.sectionMapEnabled).toExist();
        ResultPage.btnMap.click();
        expect(ResultPage.sectionMapDisabled).toExist();
        ResultPage.btnList.click();
        expect(ResultPage.sectionMapEnabled).toExist();
    });


    it('try to validate http 200 response for called request', () => {

        const errorMessage = 'Warning: Response value is not expected'

        browser.setupInterceptor();
        ResultPage.linkViewProfile.click();
        var webServiceUrl = 'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41';
        browser.expectRequest("GET", webServiceUrl, 200);
        browser.assertExpectedRequestsOnly();
    });




});


