const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class resultPage extends Page {   /**
 * define selectors using getter methods
 */
    get inputAnswer () { return $('[type=text]')}
    get btnFisicaSelect () { return $('//div[@class="switch-field"]/a[1]') }
    get btnLenguajeSelect () { return $('//div[@class="switch-field"]/a[2]')}
    get btnOcupacionalSelect () { return $('//div[@class="switch-field"]/a[3]')}
    get inputBuscarResult () { return $('div.search_bar_list > input.form-control')}
    get btnBuscarResult () { return $('[value=Buscar]') }
    get btnMap () { return $('i.icon-map-1') }
    get btnList () { return $('i.icon-th-list') }
    get sectionMapDisabled () { return $('aside.d-none') }
    get sectionMapEnabled () { return $('aside.col-lg-5') }
    get linkViewProfile (){ return $('a.btn_listing')}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/#/search');
    }
}

module.exports = new resultPage();
