const express = require('express');
const router = express.Router();
const sm = require('sitemap');

let sitemap = sm.createSitemap({
  hostname: 'localhost:3200',
  cacheTime: 600000,
  urls: [
    { url: '/home', changefreq: 'yearly', priority: 0.9 },
    { url: '/products', changefreq: 'yearly', priority: 0.9 },
    { url: '/technology', changefreq: 'yearly', priority: 0.8 },
    { url: '/workshop', changefreq: 'yearly', priority: 0.3 },
    { url: '/shop', changefreq: 'yearly', priority: 0.3 },
    { url: '/order', changefreq: 'yearly', priority: 0.1 },
  ]
});

router.get('/sitemap.xml', function (req, res) {
  sitemap.toXML(function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

module.exports = router;