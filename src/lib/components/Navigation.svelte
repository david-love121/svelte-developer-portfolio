<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { darkMode, mobileMenuOpen } from '$lib/stores';
	import { socialLinks } from '$lib/constants/social';
	import ConnectDropdown from './ConnectDropdown.svelte';
	
	let connectDropdownOpen = false;
	let connectDropdownClosing = false;

	function closeDropdown() {
		if (connectDropdownOpen && !connectDropdownClosing) {
			connectDropdownClosing = true;
			setTimeout(() => {
				connectDropdownOpen = false;
				connectDropdownClosing = false;
			}, 150);
		}
	}

	function toggleDropdown() {
		if (connectDropdownOpen) {
			closeDropdown();
		} else {
			connectDropdownOpen = true;
			connectDropdownClosing = false;
		}
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as Element;
		// Only close dropdown if clicking outside both dropdown areas and not in mobile menu
		if (!target.closest('[data-dropdown]') && !target.closest('[data-mobile-menu]')) {
			closeDropdown();
		}
	}

	function toggleMobileMenu() {
		mobileMenuOpen.update(value => !value);
	}

	function closeMobileMenu() {
		mobileMenuOpen.set(false);
	}

	// Check if current route is active
	$: currentPath = $page.url.pathname;
	$: isProjectsActive = currentPath.includes('/projects');
</script>

<svelte:window on:click={handleClickOutside} />

<header class="w-full absolute top-0 left-0 z-10">
	<div class="container mx-auto px-6 py-4 flex justify-between items-center">
		<!-- Logo -->
		<div class="text-2xl font-bold tracking-tight">
			<a href="{base}/" class="hover:opacity-80 transition-opacity">DL.</a>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex space-x-8 text-lg items-center">
			<a 
				href="{base}/projects" 
				class="hover:text-gray-500 transition-colors {isProjectsActive ? 'text-blue-600 dark:text-blue-400' : ''}"
				aria-label="View projects"
				aria-current={isProjectsActive ? 'page' : undefined}
			>
				Projects
			</a>
			
			<div class="relative" data-dropdown>
				<button 
					on:click={toggleDropdown} 
					class="hover:text-gray-500 transition-colors"
					aria-expanded={connectDropdownOpen}
					aria-haspopup="true"
					aria-label="Social media links"
				>
					Connect
				</button>
				<ConnectDropdown 
					bind:isOpen={connectDropdownOpen} 
					bind:isClosing={connectDropdownClosing} 
				/>
			</div>
		</nav>

		<!-- Theme Toggle -->
		<button 
			class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
			on:click={darkMode.toggle}
			aria-label="Toggle dark mode"
		>
			{#if $darkMode}
				<!-- Moon icon -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
				</svg>
			{:else}
				<!-- Sun icon -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
				</svg>
			{/if}
		</button>

		<!-- Mobile Menu Button -->
		<div class="md:hidden">
			<button 
				on:click={toggleMobileMenu} 
				aria-label="Toggle mobile menu"
				aria-expanded={$mobileMenuOpen}
				class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if $mobileMenuOpen}
		<div class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700" data-mobile-menu>
			<nav class="container mx-auto px-6 py-4 flex flex-col space-y-4">
				<a 
					href="{base}/projects" 
					class="hover:text-gray-500 transition-colors {isProjectsActive ? 'text-blue-600 dark:text-blue-400' : ''}"
					on:click={closeMobileMenu}
					aria-current={isProjectsActive ? 'page' : undefined}
				>
					Projects
				</a>
				<button 
					on:click={toggleDropdown} 
					class="hover:text-gray-500 text-left transition-colors"
					aria-expanded={connectDropdownOpen}
					data-mobile-menu
				>
					Connect
				</button>
				
				<!-- Mobile Connect Links -->
				{#if connectDropdownOpen}
					<div class="ml-4 flex flex-col space-y-3" data-mobile-menu>
						{#each socialLinks as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								on:click={closeMobileMenu}
							>
								<svg class="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
									<path d={link.icon} />
								</svg>
								{link.name}
							</a>
						{/each}
					</div>
				{/if}
			</nav>
		</div>
	{/if}
</header>
