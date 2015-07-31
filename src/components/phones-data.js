import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class PhonesData {
  constructor(http){
    this.http = http;
  }

  all() {
    return this.http.get('phones/phones.json');
  }

  get(phoneId) {
    return this.http.get(`phones/${phoneId}.json`);
  }
}