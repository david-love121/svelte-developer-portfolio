import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {};
};

// Enable prerendering for the entire site
export const prerender = true;
