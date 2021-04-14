var app = new Vue({
    el: '#vue-root',
    data: {
        newSkill: "",
        name: 'Jhon doe',
        link1: {
            text:"Facebook", title: "Go Facebook", url: "facebook.com"
        },
        link2: {
            text:"Twitter", title: "Go Twitter", url: "twitter.com"
        },
        // skills: [
        //     {language: 'html', item: 2},
        //     {language: 'css', item: 3},
        //     {language: 'php', item: 4},
        //     {language: 'jQuery', item: 5},
        //     {language: 'vue.js', item: 6},
        //     {language: 'react.js', item: 7},
        // ],
        skills: ['html', 'css', 'css', 'php', 'jQuery', 'vue.js',],

        payments: [
            {name: 'house rent', amount: 1500, paid: true},
            {name: 'electricity', amount: 1200, paid: false},
            {name: 'gas', amount: 1400, paid: false},
            {name: 'water', amount: 110, paid: true},
            {name: 'net', amount: 117, paid: true},
        ],
    },

    computed: {
        unpaidPamynts: function(){
            return this.payments.filter( function(arg){
                return !arg.paid;
            });
            
        },

        totalAmount: function(){
            var sum = 0;

            for( var i=0; i < this.payments.length; i++ ){
                sum += this.payments[i].amount;
            }
            return sum;
        }
    },

    methods: {
        addNewSkill: function(){
            this.skills.push(this.newSkill);
            this.newSkill = '';
        }
    },

    mounted: function() {
        console.log('mounted');
    }
    
});