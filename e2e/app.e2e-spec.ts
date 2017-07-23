import { LevelsbeyondFrontendPage } from './app.po';

describe('levelsbeyond-frontend App', () => {
  let page: LevelsbeyondFrontendPage;

  beforeEach(() => {
    page = new LevelsbeyondFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
