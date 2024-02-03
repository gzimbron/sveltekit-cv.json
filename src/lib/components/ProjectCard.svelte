<script lang="ts">
	import type { CV } from '../../cv';

	export let project: CV['projects'][0];

	const { name, highlights, isActive, description, url, image } = project;
</script>

<div class="card w-full bg-base-100 shadow-xl">
	<figure>
		<img src={image || '/projects/defaultbg.webp'} width="360" height="180" alt={name} />
	</figure>
	<div class="card-body px-5 py-4">
		<h2 class="card-title">
			<div class="badge badge-xs {isActive ? 'badge-success' : 'badge-error'}"></div>

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
	img {
		@apply aspect-[2] object-cover object-top;
	}
</style>
