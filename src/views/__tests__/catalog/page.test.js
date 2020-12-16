/* eslint-env jest */

import display from '../../catalog/page';

describe('Category Page', () => {
  it('Regular Case', () => {
    const data = {
      products: [
        {
          'id': 'pizza_five_cheese',
          'productName': 'Pizza Five Cheese',
          'productDescription': 'The most cheesy pizza you ever tasted',
          'price': 175,
          'images': ['five_cheese'],
          'weight': 250,
          'relatedProductIds': [7,12,2],
          'categoryId': 0
        }
      ],
      'categories': [{
        'id': 'vegetarian',
        'name': 'Vegetarian',
        'description': 'Pizza with no meat. If you are vegan, or just prefer pizza without meat, this is for you.'
      }]
    };
    const result = `
  <div style="height: 50px"></div>
  <h1>Vegetarian</h1>
  <h2 class="text-primary">Pizza with no meat. If you are vegan, or just prefer pizza without meat, this is for you.</h2>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">
    <div class="card" style="min-width: 100px">
      <img class="card-img-top" src="./img/five_cheese.jpg" alt="Card image cap">
      <div class="card-body">
        <a href="#product/pizza_five_cheese"><h5 class="card-title">Pizza Five Cheese</h5></a>
        <h6><strong>175</strong> uah</h6>
        <button type="button" class="cartbtn btn btn-primary" id="pizza_five_cheese">Order</button>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>`;
    expect(display(data, 'vegetarian')).toEqual(result);
  });
});