<template>
  <div class="container">
    <form v-on:submit.prevent="submit">
      <div class="row">
        <div class="form-group col-12">
          <label for="">Enter URL</label>
          <input type="text" class="form-control"
            rows="1"
            v-model="request.url"
            @keyup="urlKeyup"
            >
         <!--  <textarea
            class="form-control"
            rows="1"
            v-model="request.url"
          ></textarea> -->
        </div>
        <div class="col-12 col-md-6 offset-md-3">
          <button class="btn btn-block btn-primary">Shortner</button>
        </div>
      </div>
    </form>
    <div class="container mt-5">
    	<h3>List Of shortend URLs</h3>
    	<urlList></urlList>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import urlList from "./UrlList.vue"

export default {
	components: {
		urlList: urlList
	},
	data() {
   		return {
			request : {
				url: "",
			},
    	}
	},
	methods: {
		submit() {
			if (!this.validateForm()) {
				return false;
			}
			axios.post(this.$store.state.baseUrl+'/shortner/create', this.request)
			.then(resp => {
				if (resp.data && resp.data.status) {
					this.$store.commit('pushShortenedUrls', resp.data.data)
				}
			})
			.catch( errors => {
				return true;
			});
		},

		validateForm() {
			if (!this.request.url) {
				this.$store.dispatch('pushErrors', 'URL field can not be empty');
				return false;
			}

			// const expression = "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)";
			// const regex = new RegExp(expression);

			// if (!this.request.url.match(regex)) {
			// 	this.$store.dispatch('pushErrors', 'Entered string is not in URL format');
			// }
			return true;
		},
		urlKeyup() {
			this.$store.dispatch('clearErrors')	
		}
	},
};
</script>
<style></style>
