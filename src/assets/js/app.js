import Vue from 'vue'

new Vue({
    el: '#vue-app',
    data: {
        currentQ: 0,
        questions: [
            {
                q: 'What is the current version of Laravel ?',
                answers: { a: '5', b: '6', c: '7', d: '8' },
                correct_answer: 'd',
            },
        ],
    },
    methods: {
        Count_Questions() {
            return this.questions.length;
        },

    }
});