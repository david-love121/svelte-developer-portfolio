<script lang="ts">
	import Navigation from './Navigation.svelte';
	import { socialLinks } from '$lib/constants/social';

	export let title = 'David Love - Developer Portfolio';
	export let showNavigation = true;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
	{#if showNavigation}
		<Navigation />
	{/if}

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="w-full py-8">
		<div class="container mx-auto px-6 text-center">
			<div class="flex justify-center space-x-8 mb-4">
				{#each socialLinks as link}
					<a 
						href={link.url}
						target="_blank" 
						rel="noopener noreferrer"
						class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						aria-label="Visit {link.name}"
					>
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d={link.icon}/>
						</svg>
					</a>
				{/each}
			</div>
			<p class="text-gray-600 dark:text-gray-400 text-sm">
				© {new Date().getFullYear()} David Love. Built with 
				<a 
					href="https://kit.svelte.dev" 
					target="_blank" 
					rel="noopener noreferrer"
					class="text-blue-600 dark:text-blue-400 hover:underline"
				>
					SvelteKit
				</a>
				
			</p>
		</div>
	</footer>
</div>
