const phantom = require('phantom');

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open('./index.html');
  page.property('viewportSize',{width: 1200, height: 600});
  const content = await page.property('content');
  const result = await page.render('./resume.pdf');
  console.log(result)
  await instance.exit();
})();