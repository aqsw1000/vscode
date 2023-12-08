let code = new Vue({
	el:"#box",
	data:{
		a:"",
		b:"",
		total:""
	},
	methods:{
		abc:function(){
			this.total = (Number(this.a) * Number(this.b)).toLocaleString();
			
		}
	}
});