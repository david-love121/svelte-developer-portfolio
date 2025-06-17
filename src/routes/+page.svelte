<script lang="ts">
    import { base } from '$app/paths';
    
    let mobileMenuOpen = false;
    let connectDropdownOpen = false;
    let connectDropdownClosing = false;
    let darkMode = false;

    // Social media links configuration
    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/david.love121/',
            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/david-love121',
            icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
        },
        {
            name: 'Substack',
            url: 'https://substack.com/@davidlove677899',
            icon: 'M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z'
        }
    ];
    
    // Animation state management
    let mounted = false;
    let animationsStarted = false;
    let isAnimating = false;
    let animationComplete = false;
    let showNavigation = false;
    
    // Terminal animation variables
    let displayedName = '';
    let displayedSubtitle = '';
    let showCursor = true;
    let showPrompt = false;
    
    const fullName = 'David Love';
    const fullSubtitle = 'Adaptive. Reasonable. Creative.';
    
    // Start the terminal animation when component mounts
    import { onMount } from 'svelte';
    
    onMount(() => {
        // Prevent hydration mismatch by marking mounted state
        mounted = true;
        
        // Prevent duplicate animation execution
        if (animationsStarted) return;
        animationsStarted = true;
        
        // Initialize dark mode preference
        initializeDarkMode();
        
        // Setup event listeners
        setupEventListeners();
        
        // Start animations after hydration is completely done
        requestAnimationFrame(() => {
            setTimeout(() => {
                if (mounted && !animationComplete) {
                    startTerminalAnimation();
                }
            }, 100);
        });
    });
    
    function initializeDarkMode() {
        if (typeof window !== 'undefined') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme) {
                darkMode = savedTheme === 'dark';
            } else {
                darkMode = prefersDark;
            }
            
            updateTheme();
            
            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    darkMode = e.matches;
                    updateTheme();
                }
            });
        }
    }
    
    function setupEventListeners() {
        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (connectDropdownOpen && !connectDropdownClosing) {
                const dropdown = document.querySelector('.connect-dropdown');
                const button = (event.target as Element)?.closest('button');
                
                if (dropdown && !dropdown.contains(event.target as Node) && 
                    (!button || !button.textContent?.includes('Connect'))) {
                    closeDropdown();
                }
            }
        };
        
        document.addEventListener('click', handleClickOutside);
    }
    
    async function startTerminalAnimation() {
        // Ensure we're in the right state to start animations
        if (isAnimating || animationComplete || !mounted) return;
        
        // Reset state to prevent any restart artifacts
        if (displayedName !== '' || displayedSubtitle !== '' || showPrompt) {
            return;
        }
        
        isAnimating = true;
        
        try {
            // Show navigation first
            await sleep(200);
            showNavigation = true;
            
            // Wait for navigation animation, then show prompt
            await sleep(400);
            showPrompt = true;
            
            // Blink cursor a few times before typing
            await blinkCursor(3);
            
            // Type the name
            await typeText(fullName, (text) => displayedName = text);
            
            // Blink cursor a couple times
            await blinkCursor(2);
            
            // Type the subtitle
            await typeText(fullSubtitle, (text) => displayedSubtitle = text);
            
            // Final blinks before hiding cursor
            await blinkCursor(3);
            showCursor = false;
            animationComplete = true;
            
        } catch (error) {
            console.error('Animation error:', error);
        } finally {
            isAnimating = false;
        }
    }
    
    async function typeText(text: string, updateFunction: (text: string) => void) {
        for (let i = 0; i <= text.length; i++) {
            updateFunction(text.slice(0, i));
            await sleep(100); // Typing speed
        }
    }
    
    async function blinkCursor(times: number) {
        for (let i = 0; i < times; i++) {
            showCursor = false;
            await sleep(300);
            showCursor = true;
            await sleep(300);
        }
    }
    
    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Function to smoothly close the dropdown with animation
    function closeDropdown() {
        if (connectDropdownOpen && !connectDropdownClosing) {
            connectDropdownClosing = true;
            setTimeout(() => {
                connectDropdownOpen = false;
                connectDropdownClosing = false;
            }, 150); // Match the animation duration
        }
    }

    // Function to open the dropdown
    function toggleDropdown() {
        if (connectDropdownOpen) {
            closeDropdown();
        } else {
            connectDropdownOpen = true;
            connectDropdownClosing = false;
        }
    }

    // Dark mode functions
    function updateTheme() {
        if (typeof document !== 'undefined') {
            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        updateTheme();
    }
</script>

<svelte:head>
    <title>David Love - Developer Portfolio</title>
</svelte:head>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

    <!-- Navigation Bar -->
    <header class="w-full animation-ready" class:initial-hidden={!mounted || !showNavigation}>
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold tracking-tight fade-in-element delay-1">
                <a href="{base}/">DL.</a>
            </div>
            <nav class="hidden md:flex space-x-8 text-lg">
                <a href="{base}/projects" class="hover:text-gray-500 transition-colors fade-in-element delay-2">Projects</a>
                <div class="relative">
                    <button 
                        class="hover:text-gray-500 transition-colors fade-in-element delay-3 focus:outline-none"
                        on:click={toggleDropdown}
                    >
                        Connect
                    </button>
                     <!-- Connect Dropdown -->
                    {#if connectDropdownOpen}
                        <div class="absolute right-0 top-full mt-2 w-48 bg-adaptive rounded-lg shadow-lg border border-adaptive py-2 z-50 connect-dropdown" class:closing={connectDropdownClosing}>
                            {#each socialLinks as link}
                                <a 
                                    href={link.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="flex items-center justify-between px-4 py-3 hover-bg-adaptive transition-colors"
                                >
                                    <span class="text-adaptive">{link.name}</span>
                                    <svg class="w-5 h-5 text-secondary-adaptive" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={link.icon}/>
                                    </svg>
                                </a>
                            {/each}
                        </div>
                    {/if}
                </div>
            </nav>
            
            <!-- Dark Mode Toggle -->
            <button 
                class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors fade-in-element delay-3 focus:outline-none"
                on:click={toggleDarkMode}
                aria-label="Toggle dark mode"
            >
                {#if darkMode}
                    <!-- Sun icon for light mode -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                {:else}
                    <!-- Moon icon for dark mode -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                {/if}
            </button>
            
            <div class="md:hidden">
                <button 
                    class="p-2 hover:bg-gray-100 rounded-lg transition-colors fade-in-element delay-3"
                    on:click={() => mobileMenuOpen = !mobileMenuOpen}
                    aria-label="Toggle mobile menu"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 fade-in-element">
            <nav class="container mx-auto px-6 py-4 flex flex-col space-y-4">
                <a href="{base}/projects" class="text-lg hover:text-gray-500 transition-colors" on:click={() => mobileMenuOpen = false}>Projects</a>
                <div class="flex flex-col">
                    <button 
                        class="text-lg hover:text-gray-500 transition-colors text-left"
                        on:click={toggleDropdown}
                    >
                        Connect
                    </button>
                    
                    <!-- Mobile Connect Dropdown -->
                    {#if connectDropdownOpen}
                        <div class="mt-2 ml-4 flex flex-col space-y-3 connect-dropdown" class:closing={connectDropdownClosing}>
                            {#each socialLinks as link}
                                <a 
                                    href={link.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="flex items-center justify-between py-2 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                    on:click={() => {mobileMenuOpen = false; closeDropdown();}}
                                >
                                    <span class="text-adaptive">{link.name}</span>
                                    <svg class="w-5 h-5 text-secondary-adaptive" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={link.icon}/>
                                    </svg>
                                </a>
                            {/each}
                        </div>
                    {/if}
                </div>
            </nav>
        </div>
    {/if}

    <!-- Main Content -->
    <main class="flex-grow flex items-center min-h-screen animation-ready" class:initial-hidden={!mounted}>
        <div class="container mx-auto px-6">
            <div class="w-full md:w-2/3 lg:w-1/2">
                <!-- Terminal Animation -->
                {#if showPrompt}
                    <div class="font-mono">
                        <div class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                            <span class="text-green-500 dark:text-green-400">></span>
                            <span class="ml-2">{displayedName}</span>
                            <span class="cursor-placeholder">
                                {#if showCursor && displayedSubtitle === ''}
                                    <span class="animate-pulse">|</span>
                                {:else}
                                    <span class="invisible">|</span>
                                {/if}
                            </span>
                        </div>
                        
                        {#if displayedName === fullName}
                            <div class="flex justify-end">
                                <div class="text-xl md:text-2xl text-secondary-adaptive tracking-wide">
                                    <span>{displayedSubtitle}</span>
                                    <span class="cursor-placeholder">
                                        {#if showCursor && displayedSubtitle !== ''}
                                            <span class="animate-pulse">|</span>
                                        {:else}
                                            <span class="invisible">|</span>
                                        {/if}
                                    </span>
                                </div>
                            </div>
                        {/if}
                    </div>
                {:else}
                    <!-- Fallback for when animation hasn't started yet -->
                    <div class="font-mono">
                        <div class="text-6xl md:text-8xl font-bold tracking-tighter mb-4 opacity-0">
                            <span class="text-green-500 dark:text-green-400">></span>
                            <span class="ml-2">David Love</span>
                        </div>
                        <div class="flex justify-end">
                            <div class="text-xl md:text-2xl text-secondary-adaptive tracking-wide opacity-0">
                                Adaptive. Reasonable. Creative.
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </main>

    <!-- About Section -->
    <section id="about" class="w-full py-20 bg-secondary-adaptive">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-adaptive">About me</h2>
                <p class="text-lg md:text-xl text-secondary-adaptive leading-relaxed">
                I am a computer scientist at UIC with a passion for machine learning and pure mathematics. I tutored 4th grade mathematics with Teach for America. 
                </p>
                <br>
                <p class="text-lg md:text-xl text-secondary-adaptive leading-relaxed">
                    I pursue passion projects in my freetime to learn more about computer science and the recent revolution in generative AI. I recently began a project rewriting my feed-forward neural network in C++.
                </p>
                <br>
                <p class="text-lg md:text-xl text-secondary-adaptive leading-relaxed">
                    When I'm not coding, I enjoy reading and practicing calligraphy. Typography and patterns interest me.
                </p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="w-full py-8">
        <div class="container mx-auto px-6 text-center">
            <div class="flex justify-center space-x-8">
                {#each socialLinks as link}
                    <a 
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="social-link-base"
                        aria-label={link.name}
                    >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d={link.icon}/>
                        </svg>
                    </a>
                {/each}
            </div>
        </div>
    </footer>

</div>
