var a = new Vue({
	el:"#box",
	data:{
		cp:"" //radio 선택값
	},
	methods:{
		abc:function(z){
			z.preventDefault(); //submit 전용 //return false 동일
			if(this.cp == ""){
				alert("쿠폰을 선택해주세요");
			} else {
				//return false, return true (X)
				f.submit();
			}
		}
	}
});

var b = new Vue({
	el:"#box2",
	data:{
		search:""
	},
	methods:{
		gopage:function(k){
			k.preventDefault();
			if(this.search==""){
				alert("검색할 상품명을 입력해 주세요!")
				sh.search.focus(); //2.5이상 정상 작동
				//this.$refs.search.focus(); //2.5 이하
			} else {
				sh.submit();
			}
		}
	}
});