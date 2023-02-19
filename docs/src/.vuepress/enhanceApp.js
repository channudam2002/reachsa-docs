/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default ({
    plugins: [
        googleAnalyticsPlugin({
            id: 'G-ZWMMFN2SF6 '
        }),
    ],
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
})