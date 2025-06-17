<script lang="ts">
    let mobileMenuOpen = false;
    
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
        startTerminalAnimation();
    });
    
    async function startTerminalAnimation() {
        // Wait a bit, then show prompt
        await sleep(1000);
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
</script>

<svelte:head>
    <title>David Love - Developer Portfolio</title>
	<script src="https://cdn.tailwindcss.com"></script>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex flex-col min-h-screen bg-white text-gray-900">

    <!-- Navigation Bar -->
    <header class="w-full">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold tracking-tight fade-in-element delay-1">
                <a href="/">DL.</a>
            </div>
            <nav class="hidden md:flex space-x-8 text-lg">
                <a href="#projects" class="hover:text-gray-500 transition-colors fade-in-element delay-2">Projects</a>
                <a href="#about" class="hover:text-gray-500 transition-colors fade-in-element delay-3">About</a>
                <a href="#contact" class="hover:text-gray-500 transition-colors fade-in-element delay-4">Contact</a>
            </nav>
            <div class="md:hidden">
                <button 
                    class="p-2 hover:bg-gray-100 rounded-lg transition-colors fade-in-element delay-4"
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
        <div class="md:hidden bg-white border-t border-gray-200 fade-in-element">
            <nav class="container mx-auto px-6 py-4 flex flex-col space-y-4">
                <a href="#projects" class="text-lg hover:text-gray-500 transition-colors" on:click={() => mobileMenuOpen = false}>Projects</a>
                <a href="#about" class="text-lg hover:text-gray-500 transition-colors" on:click={() => mobileMenuOpen = false}>About</a>
                <a href="#contact" class="text-lg hover:text-gray-500 transition-colors" on:click={() => mobileMenuOpen = false}>Contact</a>
            </nav>
        </div>
    {/if}

    <!-- Main Content -->
    <main class="flex-grow flex items-center min-h-screen">
        <div class="container mx-auto px-6">
            <div class="w-full md:w-2/3 lg:w-1/2">
                <!-- Terminal Animation -->
                {#if showPrompt}
                    <div class="terminal-font">
                        <div class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                            <span class="text-green-500">></span>
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
                                <div class="text-xl md:text-2xl text-gray-700 tracking-wide">
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
                    <div class="terminal-font">
                        <div class="text-6xl md:text-8xl font-bold tracking-tighter mb-4 opacity-0">
                            <span class="text-green-500">></span>
                            <span class="ml-2">David Love</span>
                        </div>
                        <div class="flex justify-end">
                            <div class="text-xl md:text-2xl text-gray-700 tracking-wide opacity-0">
                                Adaptive. Reasonable. Creative.
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </main>

    <!-- About Section -->
    <section id="about" class="w-full py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-8">About me</h2>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <br>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                </p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="w-full py-8">
        <div class="container mx-auto px-6 text-center">
            <div class="flex justify-center space-x-8">
                <!-- Instagram -->
                <a 
                    href="https://www.instagram.com/david.love121/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 transition-colors duration-300 opacity-60 hover:opacity-100"
                    aria-label="Instagram"
                >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>

                <!-- GitHub -->
                <a 
                    href="https://github.com/david-love121" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 transition-colors duration-300 opacity-60 hover:opacity-100"
                    aria-label="GitHub"
                >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>

                <!-- Substack -->
                <a 
                    href="https://substack.com/@davidlove677899" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 transition-colors duration-300 opacity-60 hover:opacity-100"
                    aria-label="Substack"
                >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>

</div>

<style>
    :global(body) {
        font-family: 'Inter', sans-serif;
    }

    .terminal-font {
        font-family: 'Fira Code', monospace;
    }

    /* Fade-in animation */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in-element {
        /* We set the animation properties here */
        animation: fadeIn 1s ease-out forwards;
    }

    /* Staggered animation delay */
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    .delay-3 { animation-delay: 0.6s; }
    .delay-4 { animation-delay: 0.8s; }
</style>
