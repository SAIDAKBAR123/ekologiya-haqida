var app = new Vue({ 
    el: '#apps',
    data: {
        message: 'Hizmatlar'
    }
});

var types = new Vue({ 
    el: '#types',
    data: {
        message: 'Hello Vue!',
        categories: [{
            name: 'Shisha',
            type: '1',
            icon: 'shisha.png'
        },
        {
            name: 'Metall',
            type: '1',
            icon: 'metall.png'
        },
        {
            name: 'Qogoz',
            type: '1',
            icon: 'qogoz.png'
        },
        {
            name: 'Plastik',
            type: '1',
            icon: 'plastik.png'
        },
        {
            name: 'Banka',
            type: '1',
            icon: 'shisha.png'
        },
        {
            name: 'Elektronika',
            type: '2',
            icon: 'elektronika.png'
        }
    ]
    },
});

