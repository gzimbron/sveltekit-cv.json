<script lang="ts">
	import SectionBase from '$components/SectionBase.svelte';
	import { skills } from '$cv';
	import Icon from '@iconify/svelte';
</script>

<SectionBase title="Habilidades">
	<ul>
		{#each skills as { name, level }}
			<li class="badge badge-outline badge-sm text-secondary sm:badge-md">
				<Icon icon="fa6-solid:star" class="text-xs text-warning"></Icon>
				{name}
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
