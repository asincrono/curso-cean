import { FirstTaskPage } from './app.po';

describe('first-task App', () => {
  let page: FirstTaskPage;

  beforeEach(() => {
    page = new FirstTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
