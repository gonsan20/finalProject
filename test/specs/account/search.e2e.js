const {defaultProfessional } = require('../../helpers/data.helper');

const SearchPage = require('../../pageobjects/search.page');
const ResultPage = require('../../pageobjects/result.page');

describe('Search Feature', () => {

    before( () =>{

    })

    beforeEach( () => {
        browser.reloadSession();
        SearchPage.open();
    })

    it('try to search without a value to search', () => {

        const errorMessage = 'Warning: The page has been changed'

        SearchPage.search();
        expect(SearchPage.btnFisica).toExist();
    });


    it('try to identify if search field is getting the focus', () => {

        const errorMessage = 'Warning: the focus is no gotten by search field.'

        SearchPage.getFocusAfterSelectFisica();
        expect(SearchPage.inputBuscar).toBeFocused();

    });


    it('try to validate if Maria was found', () => {

        const errorMessage = 'Warning: the focus is no gotten by search field.'

        let testData = defaultProfessional();

        SearchPage.searchProfessional(testData);
        expect(ResultPage.inputAnswer).toExist();

    });


});


