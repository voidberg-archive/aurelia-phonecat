import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Phonecat';
    config.map([
      {
        route: ['', 'phones'],
        name: 'phones',
        moduleId: './pages/phone-list',
        title:'Phones list'
      },
      {
        route: 'phones/:phoneId',
        name: 'details',
        moduleId: './pages/phone-details',
        title:'Phone details'
      }
    ]);

    this.router = router;
  }
}
