<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
	import SectionBase from '$components/SectionBase.svelte';
	import { projects } from '$cv';
</script>

<SectionBase title="Proyectos">
	<ul>
		{#each projects as project}
			<li>
				<ProjectCard {project}></ProjectCard>
			</li>
		{/each}
	</ul>
</SectionBase>

<style lang="postcss">
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>
