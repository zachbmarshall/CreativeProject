var app = new Vue({
    el: '#app',
    data: {
        options: [],
        currOption: "",
        finalChoice: "",
    },
    methods: {
        addOption() {
            if(this.currOption  != ""){
                this.options.push(this.currOption);
            }
            this.currOption = "";
            this.finalChoice = "";
        },
        deleteItem(item) {
            var index = this.options.indexOf(item);
            if (index > -1)
                this.options.splice(index, 1);
        },
        randomize() {
            var randNum = Math.floor(Math.random() * this.options.length);
            this.finalChoice = this.options[randNum];
        },
        reset() {
            this.finalChoice = "";
            this.options = [];
        },
        checkError() {
            if(this.options.length === 0 && (this.finalChoice == "" || this.finalChoice == undefined)){
                return true;
            }
            else{
                return false;
            }
        },
        viewList() {
            this.finalChoice = "";
        },
    },
    computed: {

    }
});