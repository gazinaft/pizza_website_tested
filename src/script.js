import RenderEngine from './engine.js';
import Router from './router.js';
import Client from './client.js';
import Cart from './cartLogic.js';

const openNav = () => {
  document.getElementById('myNav').style.width = '100%';
};
  
const closeNav = () => {
  document.getElementById('myNav').style.width = '0%';
};


const show = async () => {
  const tag = document.getElementById('dropdown');
  if (tag.classList.contains('show')) {
    tag.classList.remove('show');
  } else {
    tag.classList.add('show');
    const data = await client.getData('db');
    cart.visualize(data, tag);
  }
};

const changeHash = hash => {
  router.changeURL(hash);
  mainF();
};

document.addEventListener('click', (evt) => {
  switch (evt.target.className.split(' ')[0]) {
  case 'closebt':
  case 'closebtn':
    closeNav();
    break;
  case 'openbtn':
    openNav();
    break;
  case 'cartbtn':
    cartadd(evt.target.id);
    break;
  case 'removebtn':
    cartremove(evt.target.id);
    break;
  case 'hashbtn':
    changeHash(evt.target.id);
    break;
  case 'showbtn':
    show();
    break;
  case 'submitformbtn':
    submitForm();
    break;
  default:
    break;
  }
});

const router = new Router();
const client = new Client();
const engine = new RenderEngine();
const cart = new Cart();

const cartadd = (item) => {
  cart.add(item);
};

const cartremove = (item) => {
  cart.delete(item);
};

const submitForm = async () => {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const name = document.getElementById('name');
  const address = document.getElementById('address');
  const time = document.getElementById('time');
  const cash = document.getElementById('cash');
  engine.loader();
  let db = await client.getData('db');
  console.log(db);
  console.log(cart.getItems());
  const obj = {
    email: email.value,
    phone: phone.value,
    name: name.value,
    address: address.value,
    time: time.value,
    payment: cash.checked ? 'cash' : 'card',
    order: cart.getItems(),
    price: cart.getPrice(db.products)
  };
  cart.clear();
  const orderId = (await client.post(obj, 'orders')).id;
  const view = (await import('./views/orderDone.js')).default;
  window.removeEventListener('hashchange', mainF);
  router.changeURL(`order${orderId}`);
  engine.render(view(obj, db.products));
  window.addEventListener('hashchange', mainF);
};


async function loadMain() {
  const view = await import('./views/mainPage.js').catch((e) => console.log(e));
  const data = await client.getData('db').catch((e) => console.log(e));
  engine.render(view(data));
}

let view;
const mainF = () => {
  const { viewName, endpointName } = router.getState();
  engine.loader();
  import(`./views/${viewName}.js`)
    .then((viewModel) => {
      view = viewModel.default;
      return client.getData(endpointName);
    })
    .catch(reason => {
      console.log(reason);
      loadMain();
    })
    .then(data => {
      engine.render(view(data, router.getHash()));
    })
    .catch(reason => {
      console.log(reason);
    });

};
mainF();
window.addEventListener('hashchange', mainF);

const checkEmpty = () => {
  if(cart.isEmpty() && router.getHash() === 'order') {
    router.goBack();
  }
};
window.addEventListener('hashchange', checkEmpty);


export {
  openNav,
  closeNav,
  submitForm,
  changeHash,
  cartadd,
  cartremove,
  mainF,
  loadMain,
  checkEmpty
};