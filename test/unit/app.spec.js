import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut
    , mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App(mockedRouter);
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Phonecat');
  });

  it('should have a phones list route', () => {
    expect(sut.router.routes).toContain({ route: ['','phones'], name: 'phones',  moduleId: './pages/phone-list', title:'Phones list' });
  });

  it('should have a phone detail route', () => {
     expect(sut.router.routes).toContain({ route: 'phones/:phoneId', name: 'details', moduleId: './pages/phone-details', title:'Phone details' });
  });
});
