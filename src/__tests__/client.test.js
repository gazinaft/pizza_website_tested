/* eslint-env jest */

import Client from '../client.js';


describe('Cart', () => {

  beforeAll(() => {
    const mockedFetch = () => {
      return Promise.resolve({
        json() {
          return { id: 1 };
        }
      });
    };
    Object.defineProperty(window, 'fetch', {value: jest.fn(mockedFetch)});
  });

  it('should get from server', () => {
    const client = new Client();
    client.getData('db');
    expect(fetch).toBeCalledWith('https://my-json-server.typicode.com/gazinaft/pizza_db/db');

  });

  it('should post to server', () => {
    const client = new Client();

    client.post({important_data: 42}, 'orders');
    expect(fetch).toBeCalledWith('https://my-json-server.typicode.com/gazinaft/pizza_db/orders', {
      method: 'POST',
      body: '{"important_data":42}'
    }
    );
  });
});