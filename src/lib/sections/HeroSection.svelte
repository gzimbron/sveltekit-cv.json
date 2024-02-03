<script lang="ts">
	import { basics } from '$cv';
	import GitHub from '$icons/GitHub.svelte';
	import LinkedIn from '$icons/LinkedIn.svelte';
	import Mail from '$icons/Mail.svelte';
	import MapPoint from '$icons/MapPoint.svelte';
	import YouTube from '$icons/YouTube.svelte';
	import type { ComponentType } from 'svelte';

	const {
		name,
		label,
		image,
		location: { city, region },
		profiles,
		email
	} = basics;

	const SOCIAL_ICONS: Record<string, ComponentType> = {
		GitHub,
		LinkedIn,
		YouTube
	};
</script>

<section>
	<figure>
		<img src={image} alt={name} />
	</figure>
	<div class="data">
		<h1>{name}</h1>
		<h2 class="text-secondary">{label}</h2>
		<span class="flex items-baseline justify-center gap-2 text-sm sm:justify-normal">
			<MapPoint class="text-primary" />
			{city}, {region}
		</span>

		<footer>
			{#if email}
				<a
					href={`mailto:${email}`}
					title={`Enviar un correo electrónico a ${name} al correo ${email}`}
					target="_blank"
					rel="noopener noreferrer"
					class="iconbtn"
				>
					<Mail />
				</a>
			{/if}
			{#each profiles as { url, network }}
				<a
					href={url}
					title={`Visitar el perfil de ${name} en ${network}`}
					target="_blank"
					rel="noopener noreferrer"
					class="iconbtn"
				>
					<svelte:component this={SOCIAL_ICONS[network]} />
				</a>
			{/each}
		</footer>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col items-center gap-10;
		@apply sm:flex-row sm:items-start;
	}
	.data {
		@apply flex flex-1 flex-col items-center gap-1 sm:items-start;

		& h1,
		h2 {
			@apply text-center sm:text-left;
		}
	}

	img {
		@apply aspect-square w-full max-w-sm rounded-md sm:w-36;
	}

	footer {
		@apply flex items-center gap-2;
	}

	a.iconbtn {
		@apply rounded-md bg-slate-100 p-2;
	}

	a.iconbtn:hover {
		@apply bg-slate-200;
	}
</style>
