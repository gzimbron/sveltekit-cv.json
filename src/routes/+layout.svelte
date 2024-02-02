<script>
	import '../app.pcss';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto min-h-screen max-w-3xl px-5 py-12 sm:px-10;
		@apply flex flex-col gap-4 md:border-x-2;
	}
</style>
