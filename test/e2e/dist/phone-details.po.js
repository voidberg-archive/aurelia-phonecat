'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PageObject_PhoneDetails = (function () {
  function PageObject_PhoneDetails() {
    _classCallCheck(this, PageObject_PhoneDetails);
  }

  _createClass(PageObject_PhoneDetails, [{
    key: 'getPhoneTitle',
    value: function getPhoneTitle() {
      return element(by.tagName('h1')).getText();
    }
  }, {
    key: 'getMainImage',
    value: function getMainImage() {
      return element(by.css('.phone-images img')).getAttribute('src');
    }
  }, {
    key: 'setMainImage',
    value: function setMainImage(which) {
      element(by.css('.phone-thumbs li:nth-child(' + which + ') img')).click();
    }
  }]);

  return PageObject_PhoneDetails;
})();

exports.PageObject_PhoneDetails = PageObject_PhoneDetails;