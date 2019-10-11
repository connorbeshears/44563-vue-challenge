const mult = (a, b) => {return a*b}

const app = new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0
    },
    computed: {
        numOfStudents: function () {
        const i = parseInt(this.num1)
        const j = parseInt(this.num2)
        return `Total students: ${mult(i, j)}`
        }
    }
})