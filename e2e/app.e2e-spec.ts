import { PphAgentsPage } from './app.po';

describe('pph-agents App', function() {
  let page: PphAgentsPage;

  beforeEach(() => {
    page = new PphAgentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
