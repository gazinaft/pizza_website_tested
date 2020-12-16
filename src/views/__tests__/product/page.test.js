/* eslint-env jest */

import display from '../../product/page.js';

describe('Product Page', () => {
  it('Regular Case', () => {
    const data = {
      products: [{
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
      }, {
        'id': 'pizza_five_cheese',
        'productName': 'Pizza Five Cheese',
        'productDescription': 'The most cheesy pizza you ever tasted',
        'price': 175,
        'images': ['five_cheese'],
        'weight': 250,
        'relatedProductIds': [7,12,2],
        'categoryId': 0
      }, {
        'id': 'pizza_diavolo',
        'productName': 'Pizza Diavolo',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 160,
        'images': ['diavolo'],
        'weight': 250,
        'relatedProductIds': [7,12,3],
        'categoryId': 1
      }, {
        'id': 'pizza_bavaria',
        'productName': 'Pizza Bavaria',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 160,
        'images': ['bawaria'],
        'weight': 250,
        'relatedProductIds': [7,12,4],
        'categoryId': 1
      }, {
        'id': 'pizza_toscana',
        'productName': 'Pizza Toscana',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 155,
        'images': ['toscana'],
        'weight': 250,
        'relatedProductIds': [7,12,5],
        'categoryId': 0
      }, {
        'id': 'pizza_texas',
        'productName': 'Pizza Texas',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 152,
        'images': ['texas'],
        'weight': 250,
        'relatedProductIds': [7,12,6],
        'categoryId': 1
      }, {
        'id': 'pizza_hawaii',
        'productName': 'Pizza Hawaii',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 155,
        'images': ['hawaii'],
        'weight': 250,
        'relatedProductIds': [7,12,9],
        'categoryId': 1
      }, {
        'id': 'pizza_tuna',
        'productName': 'Pizza Tuna',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 190,
        'images': ['tuna'],
        'weight': 250,
        'relatedProductIds': [7,12,2],
        'categoryId': 2
      }, {
        'id': 'pizza_bbq',
        'productName': 'Pizza BBQ',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 200,
        'images': ['bbq'],
        'weight': 250,
        'relatedProductIds': [7,12,1],
        'categoryId': 1
      }, {
        'id': 'pizza_country',
        'productName': 'Pizza Country',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 170,
        'images': ['country'],
        'weight': 250,
        'relatedProductIds': [7,12,0],
        'categoryId': 1
      }, {
        'id': 'pizza_curry',
        'productName': 'Pizza Curry',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 180,
        'images': ['curry'],
        'weight': 250,
        'relatedProductIds': [7,12,2],
        'categoryId': 1
      }, {
        'id': 'pizza_cheeseburger',
        'productName': 'Pizza Cheeseburger',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 250,
        'images': ['cheeseburger'],
        'weight': 250,
        'relatedProductIds': [7,12,4],
        'categoryId': 2
      }, {
        'id': 'pizza_mitzza',
        'productName': 'Pizza MitZZa',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 200,
        'images': ['mitzza'],
        'weight': 250,
        'relatedProductIds': [7,12,6],
        'categoryId': 2
      }, {
        'id': 'pizza_spinachfeta',
        'productName': 'Pizza Spinach Feta',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 155.05,
        'images': ['spinachfeta'],
        'weight': 176,
        'relatedProductIds': [7,12,7],
        'categoryId': 0
      }, {
        'id': 'pizza_margarita',
        'productName': 'Pizza Margarita',
        'productDescription': 'The classic pizza, just cheese, sauce and drought',
        'price': 140,
        'images': ['margarita'],
        'weight': 250,
        'relatedProductIds': [7,12,3],
        'categoryId': 0
      }]
    };
    const result = `<div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img src="./img/margarita.jpg" style="width: 100%">
      </div>
      <div class="col-md-8">
        <h1>Pizza Margarita</h1>
        <p>The classic pizza, just cheese, sauce and drought</p>

        <hr>

        <p>Weight: 250 <br>
          Price: 140
        </p>
        <button type="button" class="cartbtn btn btn-primary" id="pizza_margarita">Add to cart</button>
        <hr>

        <h3>Related products</h3>
        <div class="row">
<div class="col-md-4">
              <div class="thumbnail">
                <a href="#product/pizza_diavolo">
                  <img class="img-thumbnail" src="./img/diavolo.jpg" alt="Pizza Diavolo" style="width:100%">
                  <div class="caption">
                    <p>Pizza Diavolo</p>
                  </div>
                </a>
              </div>
            </div>
<div class="col-md-4">
              <div class="thumbnail">
                <a href="#product/pizza_hawaii">
                  <img class="img-thumbnail" src="./img/hawaii.jpg" alt="Pizza Hawaii" style="width:100%">
                  <div class="caption">
                    <p>Pizza Hawaii</p>
                  </div>
                </a>
              </div>
            </div>
<div class="col-md-4">
              <div class="thumbnail">
                <a href="#product/pizza_cheeseburger">
                  <img class="img-thumbnail" src="./img/cheeseburger.jpg" alt="Pizza Cheeseburger" style="width:100%">
                  <div class="caption">
                    <p>Pizza Cheeseburger</p>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>`;
    expect(display(data, 'pizza_margarita')).toEqual(result);
  });
});