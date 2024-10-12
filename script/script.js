import puppeteer from 'puppeteer';
import {load} from 'cheerio';
import { writeFileSync } from 'fs';

(async () => {
    const url = 'https://example.com';

    // Launch Puppeteer and open a new browser page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the target URL
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Get the page content
    const content = await page.content();

    // Load the HTML content into Cheerio
    const $ = load(content);

    // Define the class names for image containers
    const classNames = [
        'a-image-container',
        'a-dynamic-image-container',
        '_offer-faceout-carousel-card_style_imgContainer__2tNFH'
    ];

    // List to store image URLs
    const imageUrls = [];

    //  tagssclasLoop through the  names to find image
    classNames.forEach(className => {
        $(`.${className} img`).each((i, img) => {
            const imageUrl = $(img).attr('src');
            if (imageUrl) {
                imageUrls.push(imageUrl);
            }
        });
    });

    // Save the image URLs to a JSON file
    const outputFile = 'image_urls.json';
    writeFileSync(outputFile, JSON.stringify(imageUrls, null, 4));

    console.log(`Successfully saved ${imageUrls.length} image URLs to ${outputFile}`);

    // Close the browser
    await browser.close();
})();
