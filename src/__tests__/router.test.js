/* eslint-env jest */

import Router from '../router.js';

describe('Router Test', () => {
  beforeAll(() => {

  });
  it('should deal with History API', () => {
    const pushState = jest.fn();
    const replaceState = jest.fn();
    const back = jest.fn();
    Object.defineProperty(history, 'pushState', { value: pushState});
    Object.defineProperty(history, 'replaceState', { value: replaceState});
    Object.defineProperty(history, 'back', { value: back});
    const router = new Router();
    router.changeURL('hello');
    expect(pushState).toBeCalledWith({}, null, '#hello');
    router.replace('hello');
    expect(replaceState).toBeCalledWith({}, null, '#hello');
    router.goBack();
    expect(back).toBeCalled();
  });


  it('should return state', () => {
    const router = new Router();
    const location = {
      hash: '#234'
    };
    Object.defineProperty(window, 'location', { value: location });

    expect(router.getHash()).toEqual('234');

    location.hash = '#hello';
    expect(router.getHash()).toEqual('hello');

    expect(router.getState()).toEqual({viewName: 'mainPage', endpointName: 'db'});

    location.hash = '';
    expect(router.getState()).toEqual({viewName: 'mainPage', endpointName: 'db'});

    location.hash = '#catalog';
    expect(router.getState()).toEqual({viewName: 'catalog', endpointName: 'db'});

    location.hash = '#catalog/vegetarian';
    expect(router.getState()).toEqual({viewName: 'catalog/page', endpointName: 'db'});

    location.hash = '#order';
    expect(router.getState()).toEqual({viewName: 'order', endpointName: 'db'});

    location.hash = '#action/big_pizza';
    expect(router.getState()).toEqual({viewName: 'action/page', endpointName: 'db'});

    location.hash = '#action';
    expect(router.getState()).toEqual({viewName: 'mainPage', endpointName: 'db'});

    location.hash = '#product/pizza_bbq';
    expect(router.getState()).toEqual({viewName: 'product/page', endpointName: 'db'});

    location.hash = '#product';
    expect(router.getState()).toEqual({viewName: 'mainPage', endpointName: 'db'});

  });
});
