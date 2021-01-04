const Credit = {
    data(){
        return {
            label: 'Фамилия Имя Отчество',
            placeHolderString: 'Ваше имя',
            nameValue: ''
        };
    },
    methods: {
        nameHandler(event){
            this.nameValue = event.target.value
            console.log(this.nameValue);
        }
    }
};

Vue.createApp(Credit).mount('.main');