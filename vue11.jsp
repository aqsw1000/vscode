<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue - 반복문 v-for(for in)</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<!-- body태그에는 vue 컨테이너 생성이 안됨 -->
<!-- v-for : 배열이 기본(키배열, 배열) -->
<body>
	<section id="box">
		<ul>
			<!-- v-for는 vue 전용 반복문 출력 (for in) 기본 사항 -->
			<!-- lists 배열값 a 배열에 데이터값 -->
			<li v-for="a in lists">{{a}}</li>
		</ul>
		<ul>
			<!-- key 배열 키이름을 이용하여 출력형태, index : 배열번호 -->
			<li v-for="z,b in person">{{z.names}} : {{z.age}} : {{b}}</li>
		</ul>
		<dl>
			<dt>응시자 시험합격 현황</dt>
			<dd v-for="(c,d,e) in pass">
				{{c}}{{d}}{{pass[0]}}
			</dd>
		</dl>
		<!-- 배열값 없이 사용시 숫자는 1부터 시작함 -->
		<ul>
			<li v-for="aa,bb in 5"><input type="file" name="mfile">{{aa}} : {{bb}}</li>
		</ul>
		<input type="button" value="hi" v-on:click="ccc">
	</section>
</body>
<script src="./vue11.js?v=2"></script>
</html>