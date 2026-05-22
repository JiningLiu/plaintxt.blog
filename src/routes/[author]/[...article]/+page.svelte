<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';

	let { data }: PageProps = $props();
</script>

<div id="container">
	<h3><a href={resolve(`/${data.author}`)}>{data.author}</a></h3>
	<hr />
	<h1>{data.title}</h1>
	<h2>{data.subtitle}</h2>
	<h4>{data.date}</h4>
	<p>{data.content}</p>
</div>
