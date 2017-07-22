import { InstagramMapGeneratorPage } from './app.po';

describe('instagram-map-generator App', () => {
  let page: InstagramMapGeneratorPage;

  beforeEach(() => {
    page = new InstagramMapGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
