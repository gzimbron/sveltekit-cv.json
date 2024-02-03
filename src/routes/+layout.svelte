<script>
	import '../app.pcss';
	import { basics } from '$cv';
	import Seo from '$components/Seo.svelte';

	const { name, label } = basics;
</script>

<Seo metadescription="Currículum Vitae de {name}. {label}" title="{name} - CV"></Seo>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto min-h-screen max-w-3xl px-5 py-12 sm:px-10;
		@apply flex flex-col gap-4;
	}
</style>
