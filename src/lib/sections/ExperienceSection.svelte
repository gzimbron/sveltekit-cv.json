<script lang="ts">
	import SectionBase from '$components/SectionBase.svelte';
	import WorkCard from '$components/WorkCard.svelte';
	import { work } from '$cv';
</script>

<SectionBase title="Experiencia Laboral">
	<ul>
		{#each work as w}
			<li>
				<WorkCard work={w}></WorkCard>
			</li>
		{/each}
	</ul>
</SectionBase>

<style lang="postcss">
	ul {
		@apply flex flex-col gap-10;
	}
</style>
