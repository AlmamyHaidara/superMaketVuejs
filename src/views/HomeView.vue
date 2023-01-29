<template>
	<carousel :slides="slides" :interval="3000" controls indicators></carousel>
	<Contenaire-Component/>
	<ContactComponent></ContactComponent>
</template>
<script lang="js">
import Carousel from "@/components/carousels/Carousel.vue";
import ContenaireComponent from "@/components/Contenaire-component.vue"
import ContactComponent from "@/components/Contact-component.vue";

export default {
	components: {Carousel, ContenaireComponent, ContactComponent},
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
</style>