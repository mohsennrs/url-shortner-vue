<template>
  <div class="home">
    <h1>Shorten Your Long URL's</h1>
    <p v-if="getErrors.length">
	    <ul>
	      <li class="text-danger" v-for="error in getErrors" :key="error">{{ error }}</li>
	    </ul>
 	</p>
    <UrlComponent></UrlComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UrlComponent from "@/components/UrlComponent.vue"; // @ is an alias to /src
import { mapGetters } from 'vuex';

// @Component({
//   components: {
//     UrlComponent,
//   }
// })

export default  {
	components :{
		UrlComponent
	},
	computed: {
		...mapGetters([
		  'getErrors',
		  // ...
		])
	},
};

</script>
<style>
.home {
  margin-top: 100px;
}
</style>
