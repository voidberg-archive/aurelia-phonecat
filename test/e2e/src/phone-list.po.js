export class PageObject_PhoneList {

  constructor() {

  }

  getPhones() {
    return element.all(by.css('.phones li'));
  }

  getPhoneNames() {
    return element.all(by.css('.phones li .phone-name')).map(function(elm) {
      return elm.getText();
    });
  }

  selectPhone(which) {
    element.all(by.css('.phones li a')).get(which).click();
  }

  selectSort(sort) {
    element(by.cssContainingText('option', sort)).click();
  }

  filterBy(value) {
    const queryInput = element(by.valueBind('query'));

    if (!value) {
      queryInput.clear();
    }
    else {
      queryInput.sendKeys(value);
    }
  }
}
