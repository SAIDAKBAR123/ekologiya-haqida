
var types = new Vue({ 
    el: '#types',
    data: {
        modal: {
            title: '',
            name: ''
        },
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
    ],
    murjat: {
        title: '',
        type: '',

    }
    },
    methods: {
      getData: function(params) {
           console.log(params)
           this.modal.title = params.name
       }
    },
    created() {

    }

});

