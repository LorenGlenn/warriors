import { WarriorsPage } from './app.po';

describe('warriors App', function() {
  let page: WarriorsPage;

  beforeEach(() => {
    page = new WarriorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
