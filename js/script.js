const {createApp} = Vue;

createApp ({
	data(){
		return {
			index: 0,
			tasks:[
				{
					text: 'lavare piatti',
					done: false
				},
				{
					text: 'lavare pavimento',
					done: false
				},
				{
					text: 'lavare piedi',
					done: false
				}
			],
			newTaskask:'',
			IsDone: false,
			isError: false,
			errorMsg:''
		
		}
	},
	methods: {

		addTask(){
			if(this.newTask.length < 5) {
				this.isError = true;
			} else {
				const newTaskObj = {
					text: this.newTask,
					done: false
				}
			}
			this.tasks.unshift(newTaskObj);
			this.newTask='';
		},
		
		removeTask(index){
			if(this.tasks[index].done){
				this.tasks.splice(index, 1);
			} else {
				errorMsg = 'Attenzione!!! Il task NON è ancora completo!!!'
			}
		}
	},
	mounted(){
		console.log('ciao')
	}
}).mount('#app');