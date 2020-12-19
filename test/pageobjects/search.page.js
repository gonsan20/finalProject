const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class searchPage extends Page {   /**
 * define selectors using getter methods
 */
    get btnFisica () { return $('#phisical').parentElement() }
    get btnLenguaje () { return $('#language').parentElement() }
    get btnOcupacional () { return $('#ocupational').parentElement()}
    get inputBuscar () { return $('#search-input')}
    get btnBuscar () { return $('[value=Buscar]') }
    get alertError () { return $('.alert-danger') }
    get titleSuccess () { return $('#content h1')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    search () {
        this.btnBuscar.click();
    }

    getFocusAfterSelectFisica () {
        this.btnFisica.click();
    }

    searchProfessional (professionalData) {
        this.inputBuscar.setValue(professionalData.name);
        this.btnBuscar.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/#/');
    }
}

module.exports = new searchPage();
