/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cubyts-website-assets.s3.amazonaws.com']
  },
  async redirects() {
    return [
      {
        source: '/#why-cubyts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/platform',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cubyts-for-design-teams',
        destination: '/solution/design-teams',
        permanent: true,
      },
      {
        source: '/cubyts-for-product-teams',
        destination: '/solution/product-teams',
        permanent: true,
      },
      {
        source: '/cubyts-for-design-driven-organization',
        destination: '/solution/enterprise',
        permanent: true,
      },
      {
        source: '/integrations',
        destination: '/product/integrations',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/security/cubyts_security',
        permanent: true,
      },
      {
        source: '/soc',
        destination: '/security/soc',
        permanent: true,
      },
      {
        source: '/gdpr',
        destination: '/security/gdpr',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/resources/blogs',
        permanent: true,
      },
      {
        source: '/cubcast',
        destination: '/resources/podcasts',
        permanent: true,
      },
      {
        source: '/webinar',
        destination: '/resources/webinars',
        permanent: true,
      },
      {
        source: '/about-us/#contact-us',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/legal',
        destination: '/compliance',
        permanent: true,
      },
      {
        source: '/2022/11/webinar-1-scaling-product-development',
        destination: '/resources/webinars',
        permanent: true,
      },
      {
        source: '/solution/security/gdpr',
        destination: '/security/gdpr',
        permanent: true,
      },
      {
        source: '/podcast',
        destination: '/resources/podcasts',
        permanent: true,
      },
      {
        source: '/compliance',
        destination: '/compliance/privacy-policy',
        permanent: true,
      },
      {
        source: '/solution/security/soc',
        destination: '/security/soc',
        permanent: true,
      },
      {
        source: '/register',
        destination: 'https://id.cubyts.com/signup',
        permanent: true,
      },

      {
        source: '/jobs/ui-ux',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/aurobinda',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/nehacubyts-com',
        destination: '/',
        permanent: true,
      },
      {
        source: '/2021/12/framework-to-measure-roi-of-design-activities',
        destination: '/',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/request_demo',
        permanent: true,
      },
      // {
      //   source: 'https://support.cubyts.com/support/solutions/articles/80000980212-start-a-project',
      //   destination: 'https://cubyts.freshdesk.com/support/home',
      //   permanent: true,
      // },
      {
        source: '/job-category/development',
        destination: 'https://www.linkedin.com/company/cubyts/jobs',
        permanent: true,
      },
      // {
      //   source: 'https://support.cubyts.com/support/solutions/folders/80000703886',
      //   destination: 'https://cubyts.freshdesk.com/support/home',
      //   permanent: true,
      // },
      {
        source: '/2021/12/how-do-you-measure-roi-in-design-in-just-4-steps-cubyts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/2022/06/design-portfolio-processfolio-2',
        destination: '/resources/blogs/design-portfolio-processfolio',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/compliance/:path',
        destination: '/compliance',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          }
        ],
      },
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
