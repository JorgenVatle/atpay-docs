module.exports = {
    title: 'ATPay Docs',
    description: 'Documentation & REST API reference.',
    themeConfig: {
        nav: [
            {
                text: 'Introduction',
                link: '/'
            },
            {
                text: 'Reference',
                link: '/rest/',
            },
            {
                text: 'Admin Dashboard',
                link: 'https://atpay.io'
            }
        ],
        sidebar: [
            {
                title: 'REST Reference',
                collapsable: false,
                children: [
                    '/rest/',
                    '/rest/order-create',
                    '/rest/ipns',
                ]
            },
            {
                title: 'Code Samples',
                collapsable: false,
                children: [
                    '/samples/node',
                    '/samples/php',
                    '/samples/java'
                ]
            }
        ],
    }
};
