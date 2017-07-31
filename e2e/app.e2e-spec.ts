import { AuthAngularPage } from './app.po';

describe('auth-angular App', () => {
  let page: AuthAngularPage;

  beforeEach(() => {
    page = new AuthAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
