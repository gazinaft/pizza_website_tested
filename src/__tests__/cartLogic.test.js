/* eslint-env jest */
import Cart from '../cartLogic.js';

describe('Cart', () => {
  beforeAll(() => {
    const localStorageMock = (function () {
      let store = {};
      return {
        getItem: function (key) {
          return store[key];
        },
        setItem: function (key, value) {
          store[key] = value.toString();
        },
        clear: function () {
          store = {};
        },
        removeItem: function (key) {
          delete store[key];
        }
      };
    })();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });

  it('should deal with localStorage', () => {

    expect(window.localStorage.getItem('cart')).toEqual(undefined);
    const cart = new Cart();
    expect(cart.isEmpty()).toEqual(true);
    expect(window.localStorage.getItem('cart')).toEqual('{}');
    cart.add('pizza_mozzarella');
    expect(cart.getItems()).toEqual({pizza_mozzarella: 1});
    cart.add('pizza_mozzarella');
    cart.add('pizza_mozzarella');
    expect(cart.getItems()).toEqual({pizza_mozzarella: 3});
    cart.delete('pizza_mozzarella');
    cart.delete('pizza_mozzarella');
    expect(cart.isEmpty()).toEqual(false);
    expect(cart.getItems()).toEqual({pizza_mozzarella: 1});
    cart.delete('pizza_mozzarella');
    expect(cart.isEmpty()).toEqual(true);
    expect(cart.getItems()).toEqual({});
    cart.delete('pizza_mozzarella');
    expect(cart.getItems()).toEqual({});
    cart.add('pizza_mozzarella');
    cart.add('pizza_bbq');
    cart.add('pizza_cheeseburger');
    expect(cart.getItems()).toEqual({pizza_mozzarella: 1, pizza_bbq: 1, pizza_cheeseburger: 1});
    cart.clear();
    expect(cart.isEmpty()).toEqual(true);
  });

  it('should render cart', () => {
    document.body.innerHTML = '<div id="main"></div>';
    const cart = new Cart();

    const data = {
      'products': [{
        'id': 'pizza_salmon',
        'productName': 'Pizza Salmon Filadelphia',
        'productDescription': 'The classic pizza, just mozarella, sauce and dough',
        'price': 300,
        'images': ['salmon'],
        'weight': 250,
        'relatedProductIds': [7,12,15],
        'categoryId': 2
      }, {
        'id': 'pizza_pepperoni',
        'productName': 'Pizza Pepperoni',
        'productDescription': 'The classic pizza, with thin slices of pepperoni',
        'price': 165,
        'images': ['pepperoni'],
        'weight': 250,
        'relatedProductIds': [7,12,15],
        'categoryId': 1
      }]
    };
    cart.add('pizza_salmon');
    cart.add('pizza_pepperoni');
    const res = `<div class="list-group">
<a class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Pizza Salmon Filadelphia</h5>
        </div>
        <p class="mb-1">1 for 300 each</p>
        <hr>
        <button class="cartbtn btn btn-outline-primary" id="pizza_salmon" style="float: left">Add</button>
        <button class="removebtn btn btn-outline-primary" id="pizza_salmon">Remove</button>   
      </a>
<a class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Pizza Pepperoni</h5>
        </div>
        <p class="mb-1">1 for 165 each</p>
        <hr>
        <button class="cartbtn btn btn-outline-primary" id="pizza_pepperoni" style="float: left">Add</button>
        <button class="removebtn btn btn-outline-primary" id="pizza_pepperoni">Remove</button>   
      </a>
        <h3>Total: 465</h3>
    </div>`;
    cart.visualize(data, document.getElementById('main'));
    expect(document.getElementById('main').innerHTML).toEqual(res);
  });
});
