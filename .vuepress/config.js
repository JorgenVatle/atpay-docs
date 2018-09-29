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
                link: '/reference',
            },
            {
                text: 'Admin Dashboard',
                link: 'https://atpay.io'
            }
        ],
        sidebar: {
            '/reference/': [
                '',
                'order-create',
                'ipns'
            ]
        },
    }
};