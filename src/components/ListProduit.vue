<template>
  <div class="lst-sport">
    <ul class="float-start" v-for="(produits, id) in list_produit" :key="id">
      <li>
        <div class="card">
          <div class="bg-image ripple" data-mdb-ripple-color="light">
            <button type="button" class="btn" id="btn-delete" @click="deletebtn" >
              <i class="fas fa-trash"></i>
            </button>
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
            <h5 class="card-title">{{ produits["produit"] }}</h5>
            <span style="justify-content: space-around; display: flex">
              <p class="mt-2">{{ produits["quantiter"] }}</p>
              <p class="mt-2">{{ produits["prix"] }}$</p>
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
    list_produit: [],
  },
  methods: {
    Affiche() {
      localStorage.getItem(this.list_produit);
      console.log("Props", this.list_produit);
      console.log("this.test: ", this.test);
    },
    deletebtn: (evt)=>{
      // let thisbtn = document.querySelector("#btn-delete")
      // thiss.parentNode.parentNode.parentNode.parentNode.style.display="none"
      let del = evt.target.parentNode.parentNode.parentNode.parentNode
      del.style.display = 'none'
      del.style.left = '-10rem'
    }
  },
  /*async created() {
		  this.test = (await axios.get("http://localhost:4000/")).data
	  }*/
};
</script>

<style scoped>
#btn-delete {
  position: relative;
  top: -4rem;
  left: 11rem;
  border: 0;
}
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
.img-fluid{
  height: 10rem!important;
}
</style>
