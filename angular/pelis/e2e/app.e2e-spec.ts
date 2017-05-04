import { PelisPage } from './app.po';

describe('pelis App', () => {
  let page: PelisPage;

  beforeEach(() => {
    page = new PelisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
