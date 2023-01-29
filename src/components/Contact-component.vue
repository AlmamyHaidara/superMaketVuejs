<template>
	<div class="contact-component">
		<h1>Contact</h1>
		<div class="list-contact">
			<span>
				<h3>Hello</h3>
			</span>
			<span>
				<h3>Hello</h3>

			</span>
				<h3>Hello</h3>
			<span>

			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact-component",
}
</script>

<style scoped>
.contact-component{
	width: 100%;
	height: 25rem;
	background: #F5F5F5;
}
.contact-component h1{
	text-align: center;
	position: relative;
	top: 1rem;
	font-size: 30px;
	font-weight: bold;
	font-family: sans-serif;
}
.list-contact {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	margin-top: 4rem;
	margin-left: 15rem;
}
</style>