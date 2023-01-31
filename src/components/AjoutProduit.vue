<template>
	<div class="ajout-produit">
		<form>
			<label class="name">Nom produit: </label>
			<input type="text" name="produit" id="produit" v-model="name_field">
			<label class="qt">Quantiter:</label>
			<input type="text" name="quantiter" id="quantiter" v-model="quantiter_field">
			<label class="prix">Prix:</label>
			<input type="text" name="prix" id="prix" v-model="prix_field">
			<button id="btn" @click.stop.prevent="submite()" @click="submite()">Enregistre</button>
			<input type="file" @change="previewImage" accept="image/*" id="image">
			<img class="preview" id="photo" :src="imageData" width="280" height="220">
		</form>
	</div>
	<list-produit :produits="produit" />
	<h1>{{datainfo}}</h1>
</template>

<script>
import ListProduit from "@/components/ListProduit.vue";
import axios from 'axios'
export default {
	components: {ListProduit},
	component: ListProduit,
	name: "AjoutProduit",
	data: () => {
		return {
			name_field: "",
			quantiter_field: "",
			prix_field: "",
			produit: {},
			datainfo:[],
			imageData: require("@/assets/Images/defauletImage.png"),
		}
	},
	methods: {
		dom_collector() {
			this.name = document.getElementById("produit")
			this.quantiter = document.getElementById("quantiter")
			this.prix = document.getElementById("prix")
			this.photo = document.getElementById("photo")
		},
		async submite() {
			this.dom_collector()
			this.produit = {
				'name': this.name_field,
				'quantiter': parseFloat(this.quantiter_field),
				'prix': parseFloat(this.prix_field),
				'photo': this.photo.getAttribute("src"),
			}
			if ((this.name_field || this.quantiter_field || this.prix_field) == "") {
				alert('Veuillez correctement remplire correctement les differente champs')

			} else {
				await axios.post("http://localhost:3000",{
					'name': this.name_field,
					'quantiter': parseFloat(this.quantiter_field),
					'prix': parseFloat(this.prix_field),
				})
				console.log(this.name_field)
			}
		},
		previewImage: function (event) {
			// Reference to the DOM input element
			var input = event.target;
			// Ensure that you have a file before attempting to read it
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = (e) => {
					this.imageData = e.target.result;
				}
				reader.readAsDataURL(input.files[0]);
			}
		}
	},
	async created() {
		this.datainfo = (await (axios.get("http://localhost:4000"))).data

		console.log(this.datainfo.length)
	}
}
</script>

<style scoped>
.ajout-produit form {
	position: relative;
	left: 18%;
	top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60rem;
	height: 20rem;
	border: 0;
	border-radius: 5px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 8px 8px 16px rgba(0, 0, 0, 0.08);

}

input {
	width: 20rem;
	height: 1.5rem;
	position: relative;
	left: 13.5rem;
	border: 3px solid;
	border-radius: 6px;
}

.qt {
	left: 6rem;
}

.prix {
	left: 9rem;
}

label {
	position: relative;
	top: 1.6rem;
	left: 4.2rem;
	font-size: 20px;
	font-weight: bold;
	font-family: sans-serif;
}

#btn {
	position: relative;
	top: 2rem;
	left: 16.5rem;
	width: 15rem;
	height: 2rem;
	font-family: sans-serif;
	font-size: 20px;
	font-weight: bold;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 8px 8px 16px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	background: rgba(0, 0, 0, 0.94);
	color: #fff;
}

#image {
	position: relative;
	top: 1rem;
	left: 40rem;
	border: 0;
	padding: 5px;
}

input #file-upload-button {
	width: 20rem;
}

.preview {
	border-radius: 5px;
	position: absolute;
	top: 1rem;
	left: 38rem;
	box-shadow: 0px 0px 4px rgb(0 0 0 / 4%), 8px 8px 16px rgb(0 0 0 / 8%);

}

</style>