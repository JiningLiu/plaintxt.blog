<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';
	import Footer from '$lib/Footer.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.manifest.author} ({data.username})</title>
	<meta name="description" content="Read {data.manifest.author}'s articles on plaintxt.blog." />

	<meta property="og:url" content="https://plaintxt.blog/{data.username}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{data.manifest.author} ({data.username})" />
	<meta
		property="og:description"
		content="Read {data.manifest.author}'s articles on plaintxt.blog."
	/>
	<meta property="og:image" content="https://github.com/{data.username}.png" />

	<meta name="twitter:card" content="summary" />
	<meta property="twitter:domain" content="plaintxt.blog" />
	<meta property="twitter:url" content="https://plaintxt.blog/{data.username}" />
	<meta name="twitter:title" content="{data.manifest.author} ({data.username})" />
	<meta
		name="twitter:description"
		content="Read {data.manifest.author}'s articles on plaintxt.blog."
	/>
	<meta name="twitter:image" content="https://github.com/{data.username}.png" />
</svelte:head>

<div id="container">
	<div id="header">
		<h1>{data.manifest.author}</h1>
		<h4>({data.username})</h4>
	</div>

	{#each data.manifest.directories as dir (dir.path)}
		{#each dir.articles as article (article.path)}
			<h3>
				<a href={resolve(`/${data.username}/${article.path}`)}>
					{article.title}
				</a>
			</h3>
			<h4>{article.subtitle}</h4>
		{/each}
	{/each}

	<Footer username={data.username} isArticle={false} />
</div>

<style>
	#header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-top: 4rem;
	}
</style>
