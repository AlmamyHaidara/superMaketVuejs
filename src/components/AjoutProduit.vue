<template>
  <div class="ajout-produit">
    <form>
      <div class="field">
        <div class="col-md-4">
          <div class="form-outline">
            <label for="validationDefault01" class="form-label">Produit</label>
            <input
              type="text"
              name="produit"
              class="form-control"
              id="validationDefault01 produit"
              v-model="produit"
              required
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-outline">
            <label for="validationDefault01" class="form-label"
              >Quantiter</label
            >
            <input
              type="number"
              name="quantiter"
              class="form-control"
              id="validationDefault01 quantiter"
              v-model="quantiter"
              required
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-outline">
            <label for="validationDefault01" class="form-label">Prix</label>
            <input
              type="text"
              name="prix"
              class="form-control"
              id="validationDefault01 prix"
              v-model="prix"
              required
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-outline">
            <label for="validationDefault01" class="form-label"
              >Catégorie</label
            >
            <select
              class="form-select categorie"
              aria-label="Default select example"
              id="prix"
              name="categorie"
              v-model="categorie"
            >
              <option value="legume">Chaussure</option>
              <option value="letue">Vaitement</option>
              <option value="viand">Caascette</option>
              <option value="poisson">Lunette</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        id="btn"
        @click.stop.prevent="submite()"
      >
        Enregistre
      </button>
      <!--			<input class="form-control" type="file" id="image" multiple @change="previewImage" accept="image/*" />-->
      <input
        type="file"
        class="form-control"
        id="image"
        @change="previewImage"
        accept="image/*"
      />
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
  <list-produit :list_produit="list_produit" />
</template>

<script>
import ListProduit from "@/components/ListProduit.vue";
// import axios from "axios";

export default {
  components: { ListProduit },
  name: "AjoutProduit",
  data: () => {
    return {
      quantiter: "",
      prix: "",
      produit: "",
      produits: {},
      list_produit: [],
      categorie: "",
      datainfo: [],
      photo: "",
      imageData: require("@/assets/Images/defauletImage.png"),
    };
  },
  methods: {
    // dom_collector() {
    //   this.name = document.getElementById("produit");
    //   this.quantiter = document.getElementById("quantiter");
    //   this.prix = document.getElementById("prix");
    // },
    async submite() {
      // this.dom_collector();
      this.photo = document.getElementById("photo");
      
      console.log("image: " , this.imageData)

      if (
        (this.produit || this.quantiter || this.prix || this.categorie) == "") {
        alert(
          "Veuillez correctement remplire correctement les differente champs"
        );
      } else {
        /*await axios.post("http://localhost:4000", {
					name: this.name_field,
					quantiter: parseFloat(this.quantiter_field),
					prix: parseFloat(this.prix_field),
				});*/
        this.produits = {
          produit: this.produit,
          quantiter: parseFloat(this.quantiter),
          prix: parseFloat(this.prix),
          categorie: parseFloat(this.categorie),
          photo: this.photo.getAttribute("src"),
        };
        this.list_produit.push(this.produits);
        localStorage.getItem(this.list_produit);
        console.log(this.list_produit);
        console.log(this.produit, this.quantiter, this.prix, this.categorie);
      }
    },
    previewImage: function (event) {
      let input = event.target;
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
  margin-top: -4rem;
  margin-left: 8rem;
}

#btn {
  position: relative;
  top: 3rem;
  left: 9rem;
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
