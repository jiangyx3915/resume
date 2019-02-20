const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://r.jiangyixin.top', {waitUntil: 'networkidle2'});
  await page.pdf({path: './resume.pdf', format: 'A4', 'printBackground': true});

  await browser.close();
  console.log('pdf export success')
})();