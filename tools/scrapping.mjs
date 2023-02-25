import puppeteer from "puppeteer";

(async () => {
  console.log('web browser started')
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  let title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    return h1.innerHTML
  })
  console.log(title1)

  browser.close()
  console.log('web browser closed...')
})()
