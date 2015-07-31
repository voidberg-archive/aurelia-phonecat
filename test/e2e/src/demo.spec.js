import {PageObject_PhoneList} from './phone-list.po.js';
import {PageObject_PhoneDetails} from './phone-details.po.js';

describe('aurelia phonecat app', function() {
  var po_phoneList,
      po_phoneDetails;

  describe('phone list view', function() {
    beforeEach( () => {
      po_phoneList = new PageObject_PhoneList();

      browser.loadAndWaitForAureliaPage("http://localhost:9000");
    });

    it('should filter the phone list as a user types into the search box', function() {
      expect(po_phoneList.getPhones().count()).toBe(20);
    
      po_phoneList.filterBy('nexus');
      expect(po_phoneList.getPhones().count()).toBe(1);
    
      po_phoneList.filterBy();
      po_phoneList.filterBy('motorola');
      expect(po_phoneList.getPhones().count()).toBe(8);
    });

    it('should be possible to control phone order via the drop down select box', function() {
      po_phoneList.filterBy('XOOM'); //let's narrow the dataset to make the test assertions shorter
    
      expect(po_phoneList.getPhoneNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    
      po_phoneList.selectSort('Newest');
    
      expect(po_phoneList.getPhoneNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);
    });

    it('should render phone specific links', function() {
      po_phoneList.filterBy('nexus');

      po_phoneList.selectPhone(0);

      // browser.waitForHttpDone();
      expect(browser.getCurrentUrl()).toContain('/phones/nexus-s');
    });
  });

  describe('Phone detail view', function() {
  
    beforeEach( () => {
      po_phoneDetails = new PageObject_PhoneDetails();

      browser.loadAndWaitForAureliaPage("http://localhost:9000/#/phones/nexus-s");
    });
    
    it('should display nexus-s page', function() {
      expect(po_phoneDetails.getPhoneTitle()).toBe('Nexus S');
    });
  
    it('should display the first phone image as the main phone image', function() {
      expect(po_phoneDetails.getMainImage()).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
  
    it('should swap main image if a thumbnail image is clicked on', function() {
      po_phoneDetails.setMainImage(3);
      expect(po_phoneDetails.getMainImage()).toMatch(/img\/phones\/nexus-s.2.jpg/);
  
      po_phoneDetails.setMainImage(1);
      expect(po_phoneDetails.getMainImage()).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
  });
});
