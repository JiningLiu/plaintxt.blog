<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';

	let { data }: PageProps = $props();
</script>

<div id="container">
	<div id="header">
		<h1>{data.manifest.author}</h1>
		<h4>({data.author})</h4>
	</div>

	{#each data.manifest.directories as dir (dir.path)}
		{#each dir.articles as article (article.path)}
			<h3>
				<a href={resolve(`/${data.author}/${article.path}`)}>
					{article.title}
				</a>
			</h3>
			<h4>{article.subtitle}</h4>
		{/each}
	{/each}
</div>

<style>
	#header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}
</style>
