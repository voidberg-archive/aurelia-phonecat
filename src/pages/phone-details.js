import {inject} from 'aurelia-framework';
import {PhonesData} from '../components/phones-data';

@inject(PhonesData)
export class PhoneDetails {
  phone;
  mainImageUrl;

  constructor(phonesData) {
    this.phonesData = phonesData;
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
  
  activate(params) {
    this.phonesData.get(params.phoneId).then(response => {
      this.phone = response.content;
      this.mainImageUrl = this.phone.images[0];
    });
  }
}