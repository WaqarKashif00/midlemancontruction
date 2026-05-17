const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  const pages = [
    'https://www.middlemanconstruction.com/',
    'https://www.middlemanconstruction.com/services',
    'https://www.middlemanconstruction.com/team',
    'https://www.middlemanconstruction.com/projects'
  ];

  for (const page of pages) {
    console.log(`\n=== Images on ${page} ===`);
    try {
      const html = await fetchUrl(page);
      
      // Match img tags
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        console.log(`Image Src: ${match[1]}`);
      }

      // Match div inline styles like background-image
      const bgRegex = /background-image:\s*url\(["']?([^"')]+)["']?\)/gi;
      while ((match = bgRegex.exec(html)) !== null) {
        console.log(`BG Image Src: ${match[1]}`);
      }
    } catch (err) {
      console.error(`Error fetching ${page}: ${err.message}`);
    }
  }
}

scrape();
