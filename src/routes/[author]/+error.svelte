<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div>
	<h1>{page.status}: {page.error?.message}</h1>
	<a href={resolve('/')}>return home</a>
</div>
