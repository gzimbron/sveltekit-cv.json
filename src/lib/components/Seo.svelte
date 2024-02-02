<script lang="ts">
	import { page } from '$app/stores';

	/**
	 * @description Meta descripción de la página.
	 */
	export let metadescription: string;
	export let article = false;
	/**
	 * @description path de la página CON slash (/) inicial.
	 */
	export let title: string;
	export let locale = 'es_MX';
	export let image = '/me.webp';
	export let imageAlt = title;
	export let path = $page.url.pathname;

	const siteUrl = $page.url.origin;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={`${siteUrl}${path}`} />
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
	/>

	<meta property="og:url" content={`${siteUrl}${path}`} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
	<meta property="og:description" content={metadescription} />
	<meta property="og:site_name" content={title} />
	<meta property="og:locale" content={locale} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metadescription} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}
	{#if imageAlt}
		<meta name="twitter:image:alt" content={imageAlt} />
	{/if}
	<meta name="twitter:card" content="summary" />
</svelte:head>
