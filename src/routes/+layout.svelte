<script lang="ts">
	import '../app.css';
	import { darkMode } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize dark mode from local storage or system preference
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
			
			darkMode.set(shouldBeDark);
			
			// Listen for system theme changes when no manual preference is set
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleSystemThemeChange = (e: MediaQueryListEvent) => {
				// Only apply system theme if user hasn't manually set a preference
				if (!localStorage.getItem('theme')) {
					darkMode.set(e.matches);
				}
			};
			
			mediaQuery.addEventListener('change', handleSystemThemeChange);
			
			// Cleanup listener on component destroy
			return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
		}
	});
</script>

<slot />
