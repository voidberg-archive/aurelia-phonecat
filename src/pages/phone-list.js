import {inject} from 'aurelia-framework';
import {PhonesData} from '../components/phones-data';

@inject(PhonesData)
export class PhoneList {
  phones = [];
  orderProp = 'name';
  sorts = [
    {
      title: 'Alphabetical',
      property: 'name',
      type: 'string',
      direction: 'ascending'
    },
    {
      title: 'Newest',
      property: 'age',
      type: 'number',
      direction: 'ascending'
    }
  ];

  sort = this.sorts[0];

  constructor(phonesData) {
    this.phonesData = phonesData;
  }

  get sorttype() {
    return this.sorts[this.orderProp];
  }

  activate() {
    this.phonesData.all().then(response => {
      this.phones = response.content;
    });
  }
}
