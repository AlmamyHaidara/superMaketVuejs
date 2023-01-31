<template>
	<div>
		<div class="log">

			<div class="login">
				<h2>Se connecter</h2>
				<i class="fa-solid fa-person"></i>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: "ConnectionViews",
	data(){
		return{

		}
	}

}

</script>

<style scoped>
.log {
	width: 100%;
	height: 100vh;
	background: #565151;
	z-index: 2000;
	position: absolute;
	top: 0;
	opacity: .5;
}

.login {
	width: 50rem;
	height: 40rem;
	margin: 5% 25%;
	background: #ffffff;
	position: center;
	border-radius: 10px;
	box-shadow: 0 10px 25px -12px #080909;
}

.login h2 {
	font-family: sans-serif;
	font-weight: bold;
	font-size: 30px;
	text-align: center;
	position: relative;
	top: 2rem;
	color: rgba(80, 168, 197, 0.98);
}

.log::before{
	content: ' ';
	width: 5px;
	height: 3rem;
	position: absolute;
	top: 2rem;
	right: 5rem;
	opacity: 10;
	background: #fff;
	transform: rotate(40deg);
}
.log::after{
	content: ' ';
	width: 5px;
	height: 3rem;
	position: absolute;
	top: 2rem;
	right: 5rem;
	opacity: 10;
	background: #fff;
	transform: rotate(-40deg);
}
</style>