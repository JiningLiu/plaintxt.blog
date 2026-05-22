<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';

	let { data }: PageProps = $props();
</script>

<div id="container">
	<h1>{data.author}</h1>
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
