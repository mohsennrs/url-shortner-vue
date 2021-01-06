<template>
	<div class="table">
		<table class="table-responsive">
			<thead>
				<th>ID</th>
				<th>Original URL</th>
				<th>Shortened URL</th>
			</thead>
			<tbody>
				<tr v-for="url in getShortenedUrls" :key="url._id">
					<td>{{ url._id }}</td>
					<td>{{ url.original_url }}</td>
					<td>{{ url.shortened_url }}</td>
				</tr>
			</tbody>
		</table>

	</div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios"

export default {
	data() {
		return {

		}
	},
	created() {
		this.fetchShortenedUrls();
	}, 
	computed: {
		...mapGetters([
		  "getShortenedUrls",
		])
	},
	methods: {
		fetchShortenedUrls() {
			axios.get(this.$store.state.baseUrl+'/shortner')
			.then(resp => {
				if (resp.data && resp.data.status) {
					this.$store.dispatch('setShortenedUrls', resp.data.urls)
				}
			})
			.catch( errors => {
				return true;
			});
		}
	}
};
</script>
<style>
	
</style>