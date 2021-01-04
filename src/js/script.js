const Credit = {
    data(){
        return {
            label: 'Фамилия Имя Отчество',
            placeHolderString: 'Ваше имя',
            nameValue: '',
            rangeValue: 5000,
            timeValue: '6',
            show: false
        };
    },
    methods: {
        nameHandler(event){
            this.nameValue = event.target.value 
        },
        getRangeValue(event){
            this.rangeValue = event.target.value 
        },
        getTimeValue(event){
            console.log(event.target.value)
            this.timeValue = event.target.value
        },
        takeUser(event){
            if(event.type === 'click'){
                if (this.nameValue !='' && this.timeValue !=''){
                    this.show = true
                }

            }

            
        }
    }
};

Vue.createApp(Credit).mount('body');