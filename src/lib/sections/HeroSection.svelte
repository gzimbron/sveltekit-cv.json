<script lang="ts">
	import Icon from '@iconify/svelte';
	import { basics } from '$cv';

	const {
		name,
		label,
		image,
		location: { city, region },
		profiles,
		email
	} = basics;

	const linkedInfo = profiles.find(({ network }) => network === 'LinkedIn');
	const linkedUrl = linkedInfo?.url;
	const printInfo = [email, linkedUrl].filter(Boolean).join(' • ');
</script>

<section>
	<figure>
		<img src={image} alt={name} />
	</figure>
	<div class="data">
		<h1>{name}</h1>
		<h2>{label}</h2>
		<span class="flex items-baseline gap-2">
			<Icon icon="fa-solid:map-marker-alt" class="text-red-500" />
			{city}, {region}
		</span>
		<footer class="print">
			{printInfo}
		</footer>
		<footer class="no-print">
			{#if email}
				<a
					href={`mailto:${email}`}
					title={`Enviar un correo electrónico a ${name} al correo ${email}`}
					target="_blank"
					rel="noopener noreferrer"
					class="iconbtn"
				>
					<Icon icon="fa6-solid:envelope" />
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
					<Icon icon={`fa6-brands:${network.toLowerCase()}`} />
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
		@apply flex flex-1 flex-col gap-1;
	}
	img {
		@apply aspect-square w-48 rounded-md sm:w-32;
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
