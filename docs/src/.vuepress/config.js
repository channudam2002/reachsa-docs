const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Reachsa Docs',
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

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [{
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Tutorial',
                link: '/tutorial/'
            },
            {
                text: 'Example',
                link: '/example/'
            },
            {
                text: 'Reachsa.io',
                link: 'https://reachsa.digital'
            }
        ],
        sidebar: {
            '/guide/': [{
                title: 'Guide',
                collapsable: false,
                children: [
                    '',
                ]
            }],
            '/tutorial/': [{
                title: "Tutorial",
                collapsable: false,
                children: [
                    '',
                    'basic-electronic/basic-electronic',
                    'how-to-solder/how-to-solder-a-beginner’s-guide',
                ]
            }],
            '/example/': [{
                title: "Example",
                collapsable: false,
                children: [
                    '',
                ]
            }]

        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}