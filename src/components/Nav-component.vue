<template>
  <nav>
    <ul>
      <span class="span1">
        <img src="../assets/Images/logo.png" alt width="100" height="50" />
      </span>
      <span class="span2">
        <li>
          <router-link to="/home">Acceuil</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/produit">Produit</router-link>
        </li>
        <li>
          <router-link to="/about">Autre</router-link>
        </li>
      </span>
    </ul>
    <router-view />
  </nav>
</template>

<script setup>
</script>

<style scoped>
li {
  list-style: none;
}
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  box-shadow: 0px 0.5px 25px -12px #777373;
}
nav ul {
  display: flex;
  justify-content: space-between;
}
.span2{
  display: flex;
  margin-right: 10rem;
}
.span2 li{
  padding: 10px 30px ;
}
</style>