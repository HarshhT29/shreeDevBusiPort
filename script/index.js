import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import fs from 'fs/promises'; 


export function extractCurrency($element) {
  return $element.text().trim();
}


export function extractDescription($) {
  const description = $('#feature-bullets ul li span').map((i, el) => $(el).text().trim()).get();
  return description.join(' ');
}


export function extractPrice(...elements) {
  for (const el of elements) {
    const priceText = el.text().replace(/[^\d.]/g, '');
    if (priceText) return priceText;
  }
  return null;
}


export async function scrapeAmazonProduct(url) {
  if (!url) return;

  let browser;
  try {

    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KJHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Get the page content
    const content = await page.content();
    const $ = cheerio.load(content);

    const title = $('#productTitle').text().trim();

    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('.a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base')
    );

    const originalPrice = extractPrice(
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    );

    const images =
      $('#imgBlkFront').attr('data-a-dynamic-image') ||
      $('#landingImage').attr('data-a-dynamic-image') ||
      '{}';

    const imageUrls = Object.keys(JSON.parse(images));

    // Extracted data object (only the fields we need)
    const productData = {
      name: title,
      image: imageUrls[0],
      price: Number(currentPrice) || Number(originalPrice),
    };


    await saveProductData(productData);

    return productData;
  } catch (error) {
    console.log('Error scraping Amazon product:', error);
    return null;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
async function saveProductData(productData) {
  try {
    let existingData;
    try {
      const data = await fs.readFile('data.json', 'utf8');
      existingData = JSON.parse(data);
    } catch (err) {
      existingData = [];
    }
    existingData.push(productData);
    await fs.writeFile('data.json', JSON.stringify(existingData, null, 2), 'utf8');
    console.log('Product data saved to data.json');
  } catch (error) {
    console.error('Error writing to data.json:', error);
  }
}

(async () => {
  const productData = await scrapeAmazonProduct('https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A2GP2T5FXD1LNX');
  console.log(productData);
})();
