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
                link: '/reference/rest/',
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
                    '/reference/rest/',
                    '/reference/rest/order-create',
                    '/reference/rest/ipns',
                ]
            },
            {
                title: 'Code Samples',
                collapsable: false,
                children: [
                    'reference/samples/node',
                ]
            }
        ],
    }
};