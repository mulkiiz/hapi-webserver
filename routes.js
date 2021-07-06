const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // return 'Homepage';
            return h.response('Homepage').code(203)
            .type('text/plain')
            .header('X-Custom', 'some-value');
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}! (lang=id)`;
            }
            return `Hello, ${name}! (lang=en)`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;