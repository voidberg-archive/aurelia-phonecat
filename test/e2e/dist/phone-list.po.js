'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PageObject_PhoneList = (function () {
  function PageObject_PhoneList() {
    _classCallCheck(this, PageObject_PhoneList);
  }

  _createClass(PageObject_PhoneList, [{
    key: 'getPhones',
    value: function getPhones() {
      return element.all(by.css('.phones li'));
    }
  }, {
    key: 'getPhoneNames',
    value: function getPhoneNames() {
      return element.all(by.css('.phones li .phone-name')).map(function (elm) {
        return elm.getText();
      });
    }
  }, {
    key: 'selectPhone',
    value: function selectPhone(which) {
      element.all(by.css('.phones li a')).get(which).click();
    }
  }, {
    key: 'selectSort',
    value: function selectSort(sort) {
      element(by.cssContainingText('option', sort)).click();
    }
  }, {
    key: 'filterBy',
    value: function filterBy(value) {
      var queryInput = element(by.valueBind('query'));

      if (!value) {
        queryInput.clear();
      } else {
        queryInput.sendKeys(value);
      }
    }
  }]);

  return PageObject_PhoneList;
})();

exports.PageObject_PhoneList = PageObject_PhoneList;