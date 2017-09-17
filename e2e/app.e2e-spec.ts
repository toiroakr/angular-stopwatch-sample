import { AngularStopwatchSamplePage } from './app.po';

describe('angular-stopwatch-sample App', function() {
  let page: AngularStopwatchSamplePage;

  beforeEach(() => {
    page = new AngularStopwatchSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
