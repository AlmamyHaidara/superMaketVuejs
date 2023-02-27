<template>
  <div>
	
    <slider class="content" />
    <Contenaire-Component class="mt-5 float-start table-responsive" />
    <ContactComponent></ContactComponent>
  </div>
</template>
<script lang="js">
import ContenaireComponent from "@/components/Contenaire-component.vue"
import ContactComponent from "@/components/Contact-component.vue";
import slider from "@/components/slider.vue";

export default {
	components: {ContenaireComponent, ContactComponent,slider},
	data() {
		return {
			slides: [
				require('@/assets/Images/img4.png'),
				require('@/assets/Images/img14.jpg'),
				require('@/assets/Images/img9.jpg'),
				require('@/assets/Images/test.png'),
				require('@/assets/Images/img11.png'),
			],
		}
	}
}
</script>
<style scoped>
.content {
  position: relative;
  top: 3.5rem;
}
.contact {
  margin-top: 40rem;
}
.text{
	position: absolute;
	top: 18rem;
	left: 5rem;
	width: 50rem;
}
</style>
