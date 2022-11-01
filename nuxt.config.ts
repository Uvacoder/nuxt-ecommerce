// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/image-edge'],
	css: ['@/assets/reset.css'],
	vite: {
		resolve: {
			alias: {
				'vue-easy-lightbox/style.css': 'vue-easy-lightbox/external-css/vue-easy-lightbox.css',
				'vue-easy-lightbox': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js',
			}
		}
	}
})
