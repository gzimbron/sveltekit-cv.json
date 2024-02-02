<script>
	import '../app.pcss';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto min-h-screen max-w-3xl px-10 py-12;
		@apply flex flex-col gap-4 border-x-2;
	}
</style>
