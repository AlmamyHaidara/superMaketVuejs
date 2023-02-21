<template>
  <Nav-Component />
</template>

<script lang="ts">
import NavComponent from "@/components/Nav-component.vue";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
export default {
  name: "App",
  components: { NavComponent },
};
</script>

<style>
nav a {
  color: #2c3e50;
  text-decoration: none;
}
Nav-Component{
	position: fixed;
}
</style>
