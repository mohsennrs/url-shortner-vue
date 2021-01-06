export default {
	pushErrors(state:any, error:string) {
		state.errors.push(error)
	},
	clearErrors (state:any) {
		state.errors = []
	},
	setShortenedUrls(state:any, urls:any) {
		state.shortenedUrls = urls;
	}, 
	pushShortenedUrls(state:any, url:any) {
		state.shortenedUrls.push(url);
	}
}