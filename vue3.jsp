<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue - 핸들링 이벤트 및 가상번호 활용법</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<body>
	<section id="box">
		첫번째 값 : <input type="text" v-model="t1" v-bind:placeholer="p"><br>
		두번째 값 : <input type="text" v-model="t2" v-bind:placeholer="p"><br>
		<input type="button" value="클릭" v-on:click="abc()">
		<span>{{total}}</span>
	</section>
	<section id="box2">
		<input type="text" v-model="a"><font v-bind:color="d">{{c}}</font><br>
		<input type="button" value="확인" v-on:click="aaa()">
	</section>
</body>
<script src="./vue3.js?v=1"></script>
</html>