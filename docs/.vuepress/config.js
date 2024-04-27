const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'libfintx',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: '@vuepress/default',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'libfintx/libfintx',
    editLinks: true,
    docsRepo: 'libfintx/libfintx.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Features',
        link: '/features/',
      },
      /*{  # disabled. Does currently not work.
        text: 'Blog',
        link: '/blog/'
      },*/
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'Download',
        link: '/package/'
      }
    ],
    /*sidebar: {  # this side bar just shows the Docs document and not more. Maybe we might activate it in the future...
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },*/
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/libfintx/libfintx'
        },
        {
          type: 'mail',
          link: 'mailto:torsten.klinger@googlemail.com'
        }
      ],
      copyright: [
        {
          text: 'LGPL-3.0 licensed | Copyright © 2016-2024 Torsten Klinger'
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: 'blog/_posts',
            path: '/blog/',
            itemPermalink: '/blog/:year/:month/:day/:slug',
          }
        ],
        /*sitemap: {  # Not tested, therefore not activated. Take a look a thttps://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#sitemap
          hostname: 'https://libfintx.github.io'
        },*/
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'Tip',
          '/de': 'Tipp',
          '/zh/': '提示',
        },
      },
    ],
  ]
}
