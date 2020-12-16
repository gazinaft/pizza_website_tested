/* eslint-env jest */

import display from '../orderDone.js';

describe('Order Done Page', () => {

  it('Regular Case', () => {

    const data = {
      email: 'email',
      phone: '1',
      name: 'name',
      address: 'address',
      time: 'time',
      payment: 'cash',
      order: {'pizza_salmon': 2, 'pizza_pepperoni': 1},
      price: 765
    };
    const db = [{
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
    }];

    const res = `<div class="container" max-width="600px">
    <h1>Delivery details</h1>
    <p>
      Email: <b>email</b> <br>
      Phone number: 1 <br>
      Name: name <br>
      Address: address <br>
      Time: time <br>
      Payment: cash <br>
    </p>

    <hr>

    <h1>Order</h1>

Pizza Salmon Filadelphia
      <h5 style="text-align: left">2 for 600</h5>

Pizza Pepperoni
      <h5 style="text-align: left">1 for 165</h5>

    <hr>

    <p class="lead">Total: 765</p>
  </div>`;

    expect(display(data, db)).toEqual(res);
  });
});
