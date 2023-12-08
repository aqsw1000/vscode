let code = new Vue({
	el:"#box",
	data:{
		view:3,
		banner_no:0 //배너 번호를 배열번호 형태
	},
	methods:{
		banner_movie:function(z){
			if(z == "right"){ //다음
				this.banner_no++;
				if(this.banner_no > 2){ //+값 중 배너 맨 마지막 배너일 경우 처음 배너번호 호출
					this.banner_no = 0;
				}
			} else { //이전
				this.banner_no--;
				if(this.banner_no < 0){ //-값일 경우 맨 마지막 배너를 호출
					this.banner_no = 2;
				}
			}
		}
	}
});