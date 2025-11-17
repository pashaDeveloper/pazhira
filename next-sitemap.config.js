/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pazhira.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: [
      'https://pazhira.com/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/_next/*', '/404', '/500'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,
};