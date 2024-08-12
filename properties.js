define(['qlik'], function (qlik) {
    return {
        type: 'items',
        component: 'accordion',
        items: {
            dimensions: {
                uses: 'dimensions',
            },
            appearance: {
                uses: 'settings',
            },
        },
    };
});
