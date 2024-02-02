<script lang="ts">
	import SectionBase from '$components/SectionBase.svelte';
	import { basics } from '$cv';

	const { summary } = basics;
</script>

<SectionBase title="Sobre mí">
	<p>
		{@html summary}
	</p>
</SectionBase>

<style lang="postcss">
</style>
