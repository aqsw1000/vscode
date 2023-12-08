var a = new Vue({
	el:"#box",
	data:{
		
	},
	methods:{
		kkk:function(){ //이벤트 핸들링 메소드
			var o = 123;
			var z = 100;
			this.bbb(o,z); //this로 해당 메소드로 이동
		},
		bbb:function(a,b){ //이벤트 메소드
			console.log("메소드 이동")
			var result = this.ccc();
			console.log(result);
			console.log(a+ b);
		},
		ccc:function(){ //클로저 메소드
			return "홍길동";
		}
	}
});