import puppeteer from 'puppeteer';
import { load } from 'cheerio';
import fs from 'fs/promises';

async function scrapeWebsite(url) {
    // Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: true, // Set to false if you want to see the browser in action
    });
    const page = await browser.newPage();
    
    // Open the given URL
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Get the page content
    const content = await page.content();
    
    // Close the browser
    await browser.close();

    const $ = load(content);

    const scrapedData = [];

    // Loop through the product elements and extract data from different classes
    $('.a-link-normal._offer-faceout-carousel-card_style_productTitle__2OT1H').each((i, elem) => {
        const title = $(elem).text().trim(); // First attribute: product title

        const priceElem = $(elem).closest('.s-main-slot').find('.a-price-whole'); // Second attribute: product price
        const price = priceElem.text().trim();

        const ratingElem = $(elem).closest('.s-main-slot').find('.a-icon-alt'); // Third attribute: product rating
        const rating = ratingElem.text().trim();

        // Create an object with the extracted data
        const product = {
            title,
            price,
            rating
        };

        // Push the object to the scrapedData array
        scrapedData.push(product);
    });

    // Save the scraped data into a JSON file
    await fs.writeFile('data.json', JSON.stringify(scrapedData, null, 2), 'utf-8');

    console.log('Data has been saved to data.json');
}

// Use the scraper
const url = 'https://www.amazon.in/l/27943762031?me=A1K6XQ7KUWCZYH&ref_=ssf_share';
scrapeWebsite(url)
    .then(() => console.log('Scraping completed'))
    .catch(err => console.error('Error:', err));
