<script lang="ts">
	import type { CV } from '../../cv';

	export let project: CV['projects'][0];

	const { name, highlights, isActive, description, url, image } = project;
</script>

<div class="card w-full bg-base-100 shadow-xl">
	<figure>
		<img src={image || '/projects/defaultbg.webp'} alt="Shoes" />
	</figure>
	<div class="card-body px-5 py-4">
		<h2 class="card-title">
			{#if isActive}
				<div class="badge badge-success badge-xs"></div>
			{/if}
			{#if url}
				<a href={url} title={name} target="_blank">{name}</a>
			{:else}
				{name}
			{/if}
		</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			{#each highlights as highlight}
				<div class="badge badge-info badge-sm">{highlight}</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
</style>
