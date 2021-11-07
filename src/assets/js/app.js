import Vue from 'vue'
import '../css/app.css'
import '../css/style.css'

new Vue({
    el: '#vue-app',
    data: {
        started: false,
        correct_answers: 0,
        wrong_answers: 0,
        currentQ: 0,
        selected_answer: '',
        questions: [
            {
                q: 'What is the current version of Laravel ?',
                answers: { a: '5', b: '6', c: '7', d: '8' },
                correct_answer: 'd',
            },
            {
                q: 'What is the PHP ORM used in Laravel ?',
                answers: { a: 'Propel', b: 'Doctrine', c: 'Eloquent', d: 'RedBeanPHP' },
                correct_answer: 'c',
            },
            {
                q: 'What is the template engine used in Laravel ?',
                answers: { a: 'Twig', b: 'Blade', c: 'Mustache', d: 'Volt' },
                correct_answer: 'b',
            },

        ],
    },
    methods: {
        Count_Questions() {
            return this.questions.length;
        },
        nextQuestion(event) {
            this.selected_answer = event.target.value;
            
            if (this.selected_answer == this.questions[this.currentQ].correct_answer) {
                this.correct_answers++
            } else {
                this.wrong_answers++
            }

            setTimeout(function()
            {
                this.currentQ++;
                this.selected_answer = '';
                document.querySelectorAll('input').forEach(el => el.checked = false);

            }.bind(this), 2000);
            
        },
        ShowCorrectAnswer(index) {
            return (index == this.questions[this.currentQ].correct_answer && this.selected_answer != '' ) ? 'CorrectAnswer' : ''
        },
        SelectedItem(index) {
            return this.selected_answer == index && this.selected_answer != this.questions[this.currentQ].correct_answer ? 'selectedIndex' : '';
        },
        Start() {
            this.started = true;
        },
        Reset() {
            this.started = false;
            this.currentQ = 0;
            this.correct_answers = 0;
            this.wrong_answers = 0;
            this.selected_answer = '';
        }
    },
    computed: { 
        Basic() {
            return {'default_style' : this.selected_answer == ''};
        }

    }
});
