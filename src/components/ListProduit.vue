<template>
	<div class="list-row">
		<div class="list-produit" >
			<ul>
				<li>
					<img :src="produits['photo']" alt="user computeur" width="180" height="120">
					<h3>{{ produits['name'] }}</h3>
					<span>
					<p>{{ produits['quantiter'] }}</p>
					<p>{{ produits['prix'] }}</p>
				</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "ListProduit",
	data(){
		return{
			test: [],
			list: [],
		}
	},
	props: {
		produits: Object,
	},
	methods: {
		Affiche() {
			console.log("Props", this.produits)
			console.log(this.test)
		}
	},
	/*async created() {
		this.test = (await axios.get("http://localhost:4000/")).data
	}*/
}
</script>

<style scoped>
.list-produit ul li img {
	position: relative;
	left: -10px;
}

li {
	list-style: none;
	position: relative;
	top: 3rem;
	left: 5rem;
}

.list-produit ul li p {
	font-size: 15px;
	font-weight: bolder;
}

.list-produit ul li h3 {
	font-size: 20px;
	text-align: center;
}

.list-produit ul li {
	width: 10rem;
	height: 13rem;
	margin-left: 60px;
	list-style: none;
	background: #F5F5F5;
	padding-left: 18px;
	padding-right: 15px;
	padding-top: 10px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 8px 8px 16px rgba(0, 0, 0, 0.08);
	transition: all 0.15s;

}

.list-produit ul li:hover {
	margin-top: -1rem;
	/*transition-delay: 0.2s;*/
	transition-duration: 0.6s;
}

.list-row {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	position: relative;
	left: -5rem;
	top: 4rem;
}

span {
	position: relative;
	top: -2rem;
	display: flex;
	justify-content: space-between;
}
</style>