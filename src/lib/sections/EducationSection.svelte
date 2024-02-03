<script lang="ts">
	import EducationCard from '$components/EducationCard.svelte';
	import SectionBase from '$components/SectionBase.svelte';
	import { education } from '$cv';
</script>

<SectionBase title="Educación">
	<ul>
		{#each education as item}
			<li>
				<EducationCard education={item}></EducationCard>
			</li>
		{/each}
	</ul>
</SectionBase>

<style lang="postcss">
	ul {
		@apply flex flex-col gap-10;
	}
</style>
