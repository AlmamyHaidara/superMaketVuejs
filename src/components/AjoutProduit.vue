<template>
	<div class="ajout-produit">
		<form>
			<div class="field">
				<div class="col-md-4">
					<div class="form-outline">
						<label for="validationDefault01" class="form-label">First name</label>
						<input type="text" name="produit" class="form-control" id="validationDefault01 produit"
							   v-model="name_field" required/>
					</div>
				</div>

				<div class="col-md-4">
					<div class="form-outline">
						<label for="validationDefault01" class="form-label">First name</label>
						<input type="text" name="quantiter" class="form-control" id="validationDefault01 quantiter"
							   v-model="quantiter_field" required/>
					</div>
				</div>

				<div class="col-md-4">
					<div class="form-outline">
						<label for="validationDefault01" class="form-label">First name</label>
						<input type="text" name="prix" class="form-control" id="validationDefault01 prix"
							   v-model="prix_field" required/>
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-primary" id="btn" @click.stop.prevent="submite()">Enregistre</button>
			<!--			<input class="form-control" type="file" id="image" multiple @change="previewImage" accept="image/*" />-->
			<input type="file" class="form-control" id="image" @change="previewImage" accept="image/*"/>
			<!--			<input type="file" @change="previewImage" accept="image/*" id="image"/>-->
			<img
				class="preview"
				id="photo"
				:src="imageData"
				width="280"
				height="220"
			/>
		</form>
	</div>
		<list-produit :produits="produit"/>
		<h1>{{ datainfo }}</h1>
</template>

<script>
import ListProduit from "@/components/ListProduit.vue";
import axios from "axios";

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
			datainfo: [],
			imageData: require("@/assets/Images/defauletImage.png"),
		};
	},
	methods: {
		dom_collector() {
			this.name = document.getElementById("produit");
			this.quantiter = document.getElementById("quantiter");
			this.prix = document.getElementById("prix");
			this.photo = document.getElementById("photo");
		},
		async submite() {
			this.dom_collector();
			this.produit = {
				name: this.name_field,
				quantiter: parseFloat(this.quantiter_field),
				prix: parseFloat(this.prix_field),
				photo: this.photo.getAttribute("src"),
			};
			if ((this.name_field || this.quantiter_field || this.prix_field) == "") {
				alert(
					"Veuillez correctement remplire correctement les differente champs"
				);
			} else {
				/*await axios.post("http://localhost:4000", {
					name: this.name_field,
					quantiter: parseFloat(this.quantiter_field),
					prix: parseFloat(this.prix_field),
				});*/
				console.log(this.name_field);
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
				};
				reader.readAsDataURL(input.files[0]);
			}
		},
	},
	/*async created() {
		this.datainfo = (await axios.get("http://localhost:4000")).data;

		console.log(this.datainfo.length);
	},*/
};
</script>

<style scoped>
.ajout-produit form {
	position: absolute;
	left: 18%;
	top: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60rem;
	height: 25rem;
	border-radius: 5px;
	box-shadow: 0px 0px 4px rgb(0 0 0 / 4%), 8px 8px 16px rgb(0 0 0 / 8%);

}

.field {
	margin-top: -7rem;
	margin-left: 8rem;
}

input {


}

#btn {
	position: relative;
	top: 3.5rem;
	left: 10rem;
	width: 15rem;
}

#image {
	position: absolute;
	left: 32rem;
	top: 18rem;
	width: 18rem;
}

input #file-upload-button {
	width: 20rem;
}

.preview {
	border-radius: 5px;
	position: absolute;
	top: 2rem;
	left: 32rem;
	box-shadow: 0px 0px 4px rgb(0 0 0 / 4%), 8px 8px 16px rgb(0 0 0 / 8%);
}
</style>
