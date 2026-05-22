<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.title} by {data.author} ({data.username})</title>
	<meta name="description" content={data.subtitle} />

	<meta property="og:url" content="https://plaintxt.blog/{data.username}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{data.title} by {data.author} ({data.username})" />
	<meta property="og:description" content={data.subtitle} />
	<meta property="og:image" content="https://github.com/{data.username}.png" />

	<meta name="twitter:card" content="summary" />
	<meta property="twitter:domain" content="plaintxt.blog" />
	<meta property="twitter:url" content="https://plaintxt.blog/{data.username}" />
	<meta name="twitter:title" content="{data.title} by {data.author} ({data.username})" />
	<meta name="twitter:description" content={data.subtitle} />
	<meta name="twitter:image" content="https://github.com/{data.username}.png" />
</svelte:head>

<div id="container">
	<h3><a href={resolve(`/${data.username}`)}>{data.username}</a></h3>

	<hr />

	<h1>{data.title}</h1>
	<h2>{data.subtitle}</h2>
	<h4>{data.author} | {data.date}</h4>

	{#each data.content.split('\n\n') as paragraph (paragraph)}
		<p>
			{#each paragraph.split('\n') as line, i (i)}
				{line}

				{#if i < paragraph.split('\n').length - 1}
					<br />
				{/if}
			{/each}
		</p>
	{/each}
</div>
