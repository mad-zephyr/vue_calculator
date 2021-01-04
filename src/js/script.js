const Credit = {
    data(){
        return {
            label: 'Фамилия Имя Отчество',
            placeHolderString: 'Ваше имя',
            nameValue: '',
            rangeValue: 5000,
            timeValue: '6',
            show: false,
            rb: false,
            redText: false,
            creditGiver: 0
        };
    },
    methods: {
        getNameValue(event){
            this.nameValue = event.target.value
        },
        getRangeValue(event){ 
            this.rangeValue = event.target.value; 
        },
        getTimeValue(event){ 
            this.timeValue = event.target.value;
        },
        takeUser(event){
            if(event.type === 'click'){
                if (this.nameValue !='' && this.timeValue !=''){
                    this.show = true;
                } 
            }
            if (this.nameValue === ''){
                console.log('RB');
                this.rb = true;
                this.label = 'Введите ФИО';
                this.redText = true;
            } else {
                this.rb = false;
                this.label = 'Фамилия Имя Отчество';
                this.redText = false;
            }
        }
    },
    computed: {
        getNameValueComputed(){
            return this.nameValue 
        }
    },
    watch: {
        nameValue(value){
            console.log('changed', value);
        }
    }
};

Vue.createApp(Credit).mount('body');