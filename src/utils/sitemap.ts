import fs from 'fs';
import path from 'path';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlElements = urls.map(url => {
    const urlOpen = '<url>';
    const urlClose = '</url>';
    const loc = `<loc>${url.loc}</loc>`;
    const lastmod = url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : '';
    const changefreq = url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : '';
    const priority = url.priority !== undefined ? `<priority>${url.priority}</priority>` : '';

    return `${urlOpen}${loc}${lastmod}${changefreq}${priority}${urlClose}`;
  }).join('');

  return `${xmlHeader}${urlsetOpen}${urlElements}${urlsetClose}`;
};

// Resource-based routes helpers
const resourceCategories = ['articles', 'tutorials', 'comparisons'];
const publicResourcesDir = path.resolve(process.cwd(), 'public', 'content', 'resources');

type ResourceIndexItem = { slug: string; date?: string };

function safeReadResourceIndex(category: string): ResourceIndexItem[] {
  try {
    const file = path.join(publicResourcesDir, category, 'index.json');
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf-8');
      const data = JSON.parse(raw);
      if (Array.isArray(data)) return data;
    }
  } catch (e) {
    console.warn('[sitemap] Failed reading index for', category, e);
  }
  return [];
}

export const getPrerenderRoutes = (): string[] => {
  const routes: string[] = ['/resources'];
  for (const cat of resourceCategories) {
    routes.push(`/resources/${cat}`);
    const items = safeReadResourceIndex(cat);
    for (const item of items) {
      if (item?.slug) routes.push(`/resources/${cat}/${item.slug}`);
    }
  }
  return Array.from(new Set(routes));
};

export const getSitemapUrls = (): SitemapUrl[] => {
  const baseUrl = 'https://autorply.sa';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/pricing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about-us`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/faq`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/vision`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/technology`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/success-story`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/campaign`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/tech-partners`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/business-partners`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/sitemap`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4
    },
    {
      loc: `${baseUrl}/resources`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    }
  ];

  for (const cat of resourceCategories) {
    urls.push({
      loc: `${baseUrl}/resources/${cat}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    });

    const items = safeReadResourceIndex(cat);
    for (const item of items) {
      if (!item?.slug) continue;
      urls.push({
        loc: `${baseUrl}/resources/${cat}/${item.slug}`,
        lastmod: item.date || currentDate,
        changefreq: 'monthly',
        priority: 0.6
      });
    }
  }

  const dedup = new Map<string, SitemapUrl>();
  for (const u of urls) dedup.set(u.loc, u);
  return Array.from(dedup.values());
};

