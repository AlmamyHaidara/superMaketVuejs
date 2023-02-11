<template>

	<div class="lst-sport">
		<ul class="float-start">
			<li>
				<div class="card">
					<div
						class="bg-image ripple"
						data-mdb-ripple-color="light"
					>
						<img
							:src="produits['photo']"
							alt="user computeur"
							width="180"
							class="img-fluid"
						/>
						<a href="#!">
							<div
								class="mask"
								style="background-color: rgba(251, 251, 251, 0.15)"
							></div>
						</a>
					</div>
					<div class="card-body">
						<h5 class="card-title">{{ produits["name"] }}</h5>
						<span
							style="justify-content: space-around;
								   display: flex;">
						<p class="mt-2">{{ produits["quantiter"] }}</p>
						<p class=" mt-2">{{ produits["prix"] }}$</p>
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
// import axios from "axios";

export default {
	name: "ListProduit",
	data() {
		return {
			test: [],
			list: [],
		};
	},
	props: {
		produits: Object,
	},
	methods: {
		Affiche() {
			console.log("Props", this.produits);
			console.log(this.test);
		},
	},
	/*async created() {
		  this.test = (await axios.get("http://localhost:4000/")).data
	  }*/
};
</script>

<style scoped>

.lst-sport {
	position: relative;
	top: 32rem;
	left: 1rem;
	border: 0px;
}


.lst-sport ul li {
	margin-left: 60px;
	list-style: none;
}


.lst-sport ul {
	display: flex;
	margin-top: 60px;
	margin-left: 0;
}

.card-text {
	width: 15rem;
}

</style>
