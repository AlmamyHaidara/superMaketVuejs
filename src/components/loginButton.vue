<template>
  <modale :revele="revele" :toggleModale="toggleModale"></modale>

  <div class="d-flex align-items-center me-5">
    <div class="d-flex align-items-center">
      <button
        type="button"
        class="btn btn-light px-3 me-2"
        data-mdb-ripple-color="dark"
        @click="toggleModale()"
      >
        Login
      </button>

      <router-link to="/inscribtion">
        <button type="button" class="btn btn-primary me-3 inscribe">
          Inscription
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import modale from "./Modale.vue";

export default {
  components: {
    modale,
  },

  data() {
    return {
      revele: false,
    };
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
   
   
  },
};
</script>

<style></style>
