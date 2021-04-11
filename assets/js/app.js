var app = new Vue({
    el: '#vue-root',
    data: {
        name: 'Jhon doe',
        link1: {
            text:"Facebook", title: "Go Facebook", url: "facebook.com"
        },
        link2: {
            text:"Twitter", title: "Go Twitter", url: "twitter.com"
        },
        skills: [
            {language: 'html', item: 2},
            {language: 'css', item: 3},
            {language: 'php', item: 4},
            {language: 'jQuery', item: 5},
            {language: 'vue.js', item: 6},
            {language: 'react.js', item: 7},
        ],
    },

    mounted: function() {
        console.log('mounted');
    }
    
});