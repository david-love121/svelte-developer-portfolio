import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Dark mode store with persistence
function createDarkModeStore() {
	const defaultValue = false;
	const initialValue = browser 
		? localStorage.getItem('theme') === 'dark' 
		: defaultValue;
	
	const { subscribe, set, update } = writable<boolean>(initialValue);

	return {
		subscribe,
		set: (value: boolean) => {
			if (browser) {
				localStorage.setItem('theme', value ? 'dark' : 'light');
				document.documentElement.classList.toggle('dark', value);
			}
			set(value);
		},
		update: (fn: (value: boolean) => boolean) => {
			update((value) => {
				const newValue = fn(value);
				if (browser) {
					localStorage.setItem('theme', newValue ? 'dark' : 'light');
					document.documentElement.classList.toggle('dark', newValue);
				}
				return newValue;
			});
		},
		toggle: () => {
			update((value) => {
				const newValue = !value;
				if (browser) {
					localStorage.setItem('theme', newValue ? 'dark' : 'light');
					document.documentElement.classList.toggle('dark', newValue);
				}
				return newValue;
			});
		}
	};
}

export const darkMode = createDarkModeStore();

// Mobile menu store
export const mobileMenuOpen = writable<boolean>(false);
