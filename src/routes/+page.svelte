<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>plaintxt.blog</title>
	<meta name="description" content="simple, free, and no-nonsense plain text blogs." />

	<meta property="og:url" content="https://plaintxt.blog" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="plaintxt.blog" />
	<meta property="og:description" content="simple, free, and no-nonsense plain text blogs." />
	<meta property="og:image" content="/web-app-manifest-512x512.png" />

	<meta name="twitter:card" content="summary" />
	<meta property="twitter:domain" content="plaintxt.blog" />
	<meta property="twitter:url" content="https://plaintxt.blog" />
	<meta name="twitter:title" content="plaintxt.blog" />
	<meta name="twitter:description" content="simple, free, and no-nonsense plain text blogs." />
	<meta name="twitter:image" content="/web-app-manifest-512x512.png" />
</svelte:head>

<div id="container">
	<h1>plaintxt.blog</h1>
	<h2 class="hidden">simple, free, and no-nonsense plain text blogs.</h2>
	<h3>just plain text.</h3>

	<!-- <button>read</button>
    <button>write</button> -->

	<p>still under construction... come back soon</p>
	<h6>
		© 2026 <a href={resolve('/jiningliu')}> jining liu</a>, all rights reserved.
	</h6>
</div>

<style>
	.hidden {
		position: absolute;
		top: -100%;
		left: -100%;
		width: 0;
		height: 0;
		overflow: hidden;
		opacity: 0;
	}
</style>
