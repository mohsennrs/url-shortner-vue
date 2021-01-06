export default {
	pushErrors (context:any, error:string) {
		context.commit('pushErrors', error);
	},
	clearErrors (context:any) {
		context.commit('clearErrors')
	},
	setShortenedUrls(context:any, urls:any) {
		context.commit('setShortenedUrls', urls)
	}
}