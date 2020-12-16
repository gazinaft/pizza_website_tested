/* eslint-env jest */

import display from '../../action/page.js';

describe('Action Page', () => {
  it('Regular case', () => {
    const data = {
      'slider': [{
        'id': 'big_pizza',
        'images': 'big_pizza',
        'name': 'Get a big pizza for only 129.99',
        'description': 'Order a big pizza for only 129.99 instead of 199.99. Applies only for such pizzas as Margarita, Texas, Pepperoni and Curry. Doesn\'t work for delivery. Viable only on Mondays, Wednesdays and Fridays.'
      }, {
        'id': 'five_for_one',
        'images': 'five_pizza',
        'name': 'Get five pizzas for only 749.99',
        'description': 'Order a bundle of 5 pizzas: Pepperoni, Hawaii, BBQ, Country and Toscana. Doesn\'t sums with other actions. Works every day for regular orders and delivery.'
      }, {
        'id':'free30min',
        'images':'free30min',
        'name': 'Free pizza after 30 minute delivery.',
        'description': 'We are so fast, that we are able to deliver pizza for less than half an hour. If we fail, you get a free pizza.'
      }]
    };
    const result = `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img src="./img/big_pizza.jpg" style="width: 100%" class="img-rounded">
      </div>
      <div class="col-md-8">
        <h1>Get a big pizza for only 129.99</h1>
        <p>Order a big pizza for only 129.99 instead of 199.99. Applies only for such pizzas as Margarita, Texas, Pepperoni and Curry. Doesn't work for delivery. Viable only on Mondays, Wednesdays and Fridays.</p>
      </div>
    </div>
  </div>`;
    expect(display(data, 'big_pizza')).toEqual(result);
  });
});
