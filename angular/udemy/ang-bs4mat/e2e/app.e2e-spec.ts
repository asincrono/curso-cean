import { AngBs4matPage } from './app.po';

describe('ang-bs4mat App', () => {
  let page: AngBs4matPage;

  beforeEach(() => {
    page = new AngBs4matPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
