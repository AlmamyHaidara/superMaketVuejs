<template>
	<Nav-Component/>
</template>

<script lang="ts">

import NavComponent from "@/components/Nav-component.vue"
export default {
	name: "App",
	components: { NavComponent },
}
</script>

<style>

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 20px;
  font-family: sans-serif;
  letter-spacing: .1px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>