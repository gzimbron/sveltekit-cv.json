<script lang="ts">
	export let title: string;
</script>

<section>
	<h2>{title}</h2>
	<slot />
</section>

<style lang="postcss">
	h2 {
		@apply mb-4;
	}
	section {
		@apply my-4;
	}
</style>
