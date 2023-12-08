let html = new Vue({ //실시간 데이터를 반영할 수 있습니다.
	el:"#box",
	data:{
		t1:"",
		t2:"",
		p:"숫자를 입력하세요.",
		total:""
	},
	methods:{
		abc:function(){ //vue의 html 값은 기본 문자
			this.total = Number(this.t1) + Number(this.t2); //this => data함수를 지칭
		}
	}
});

let html2 = new Vue({
	el:"#box2",
	data:{
		a:"", //사용자
		b:"0123456", //발급된 보안코드
		c:"보안코드를 입력해주세요.",
		d:"black"
	},
	methods:{
		aaa:function(){
			if(this.a == this.b){
				this.c = "보안코드를 확인 하였습니다.";
				this.d = "blue";
			} else {
				this.c = "해당 보안코드가 잘못 되었습니다.";
				this.d = "red";
			}
		}
	}
});