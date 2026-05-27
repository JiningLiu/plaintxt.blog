<script lang="ts">
	import { resolve } from '$app/paths';

	let { username, isArticle } = $props();
</script>

<br />
<hr />

<h6 id="footer">
	plaintxt.blog © 2026 <a href={resolve('/jiningliu')}> jining liu</a>, all rights reserved.

	<br />
	<br />

	please view
	<a href="https://github.com/{username}/myplaintxtblog" target="_blank">{username}'s GitHub repo</a
	>
	for license and copyright information regarding {isArticle
		? 'this article'
		: 'the above articles'}.

	<br />
	<br />

	the articles published on this site are independent works of the respective authors and do not
	necessarily reflect the views of plaintxt.blog or jining liu.
</h6>
