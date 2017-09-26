import { SearchEmailsPage } from './app.po';

describe('search-emails App', () => {
  let page: SearchEmailsPage;

  beforeEach(() => {
    page = new SearchEmailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
