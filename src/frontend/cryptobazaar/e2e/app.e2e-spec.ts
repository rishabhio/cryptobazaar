import { CryptobazaarPage } from './app.po';

describe('cryptobazaar App', () => {
  let page: CryptobazaarPage;

  beforeEach(() => {
    page = new CryptobazaarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
