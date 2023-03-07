const c = require('../c');

describe('Question C', () => {
  test('should get the text of all the a tags on the page http://home.mcom.com/home/welcome.html', async () => {
    const aText = await c();
    expect(aText).toBe(`here's an exampleGuided TourNetscape HandbookFrequently Asked QuestionsWelcomeWhat's New!What's Cool!Go to NewsgroupsInternet DirectoryInternet SearchInternet White Pages.About the Internet?How to Create World
Wide Web Services.Mosaic Communications CorporationHow to Give FeedbackHow
to Get Supportinfo@mcom.com`)
  })
});
