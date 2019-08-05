import "jquery";
import "bootstrap";

import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		siteName: '我的博客'
	},
});

export default app;