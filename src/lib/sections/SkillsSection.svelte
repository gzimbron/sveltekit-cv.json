<script lang="ts">
	import SectionBase from '$components/SectionBase.svelte';
	import { skills } from '$cv';
</script>

<SectionBase title="Habilidades">
	<ul>
		{#each skills as { name, level }}
			<li class="badge badge-outline badge-sm text-primary sm:badge-md">
				{name}
				<progress class="progress progress-primary w-20" value={level} max="100"></progress>
			</li>
		{/each}
	</ul>
</SectionBase>

<style lang="postcss">
	ul {
		@apply flex flex-wrap gap-2;
	}
	li {
		@apply flex gap-2;
	}
</style>
