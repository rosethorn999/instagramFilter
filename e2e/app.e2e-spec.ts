import { InstagramFilterPage } from './app.po';

describe('instagram-filter App', () => {
  let page: InstagramFilterPage;

  beforeEach(() => {
    page = new InstagramFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
