<template>
    <div class="lst-sport">
      <ul>
        <li>
          <img src="@/assets/Images/Viande.jpg" width="380" height="331">
          <h3>Local Race</h3>
          <p>Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident. </p>
        </li>
        <li>
          <img src="@/assets/Images/Sucrerrie.jpg" width="380" height="331">
          <h3>Networking</h3>
          <p>Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident.</p>
        </li>
        <li>
          <img src="@/assets/Images/Boisson.jpg" width="380" height="331">
          <h3>Programs</h3>
          <p>Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident.</p>
        </li>
      </ul>
    </div>

</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Prosto+One&family=Rubik+Bubbles&display=swap');
.lst-sport{
	margin-top: 10rem;
}
.lst-sport ul li p{
  font-size: 20px;
  width: 350px;
  height: 134px;
}
.lst-sport ul li h3{
  font-size: 34px;
}
.lst-sport ul li{
  margin-left: 60px;
  list-style: none;
  background: #F5F5F5;
  padding-left: 18px;
  padding-right: 15px;
  padding-top: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 8px 8px 16px rgba(0, 0, 0, 0.08);
	transition: all 0.15s;
}
.lst-sport ul li:hover{
	margin-top: -1rem;
	/*transition-delay: 0.2s;*/
	transition-duration: 0.6s;
}
.lst-sport ul{
 display: flex;
  margin-top: 60px;
  margin-left: 0;
}
</style>