/* eslint-env jest */
import RenderEngine from '../engine.js';

describe('Render Engine', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="main"></div>';
  });

  it('Rendering', () => {
    const view = '<a>test string</a>';
    const res = '<div id="main"><a>test string</a></div>';

    expect(document.body.innerHTML).toEqual('<div id="main"></div>');
    const engine = new RenderEngine();
    engine.render(view);
    expect(document.body.innerHTML).toEqual(res);
  });
  it('Loader', () => {
    const res = `
    <div class="text-center">
      <div class="spinner-border text-primary" role="status" style="width: 5rem; height: 5rem;">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    `;
    const engine = new RenderEngine();
    engine.loader();
    expect(document.getElementById('main').innerHTML).toEqual(res);

  });
});
