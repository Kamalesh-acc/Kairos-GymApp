import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const screenshotsDir = join(__dirname, 'temporary screenshots');

if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const existing = existsSync(screenshotsDir) ? readdirSync(screenshotsDir) : [];
const numbers  = existing
  .map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] ?? '0'))
  .filter(n => !isNaN(n) && n > 0);
const nextNum = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;

const filename = label ? `screenshot-${nextNum}-${label}.png` : `screenshot-${nextNum}.png`;
const filepath = join(screenshotsDir, filename);

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
