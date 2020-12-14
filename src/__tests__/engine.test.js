/* eslint-env jest */ 
import RenderEngine from '../engine.js';

describe('Render Engine', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="main"></div>';
  });

  it('Test rendering', () => {
    const view = '<a>test string</a>';
    const res = '<div id="main"><a>test string</a></div>';

    expect(document.body.innerHTML).toEqual('<div id="main"></div>');
    const engine = new RenderEngine();
    engine.render(view);
    expect(document.body.innerHTML).toEqual(res);
  });
});
