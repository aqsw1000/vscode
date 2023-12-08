let code = new Vue({
	el:"#box",
	data:{
		lists:["홍길동","이순신","강감찬"], //원시배열
		person:[
			{names:"홍길동",age:"29"},
			{names:"강감찬",age:"21"},
			{names:"이순신",age:"30"}
		],
		pass:{ //기본키 배열
			username:"조경훈",
			usertest:"정보처리기사 실기시험",
			userscore:"98점 합격"
		}
	},
	methods:{
		ccc:function(){
			for(var z in this.pass){
				if(z == "username"){
					console.log(this.pass["usertest"])
				} else if(z == "usertest"){
					console.log(this.pass["username"])
				} else if(z == "userscore"){
					console.log(this.pass["userscore"])
				}
			}
		}
		
	}
});