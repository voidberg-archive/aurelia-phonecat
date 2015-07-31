export class PageObject_PhoneDetails {

  constructor() {

  }

  getPhoneTitle() {
    return element(by.tagName('h1')).getText();
  }

  getMainImage() {
    return element(by.css('.phone-images img')).getAttribute('src');
  }

  setMainImage(which) {
    element(by.css(`.phone-thumbs li:nth-child(${which}) img`)).click();
  }
}