import { projects } from '$lib/constants/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		projects
	};
};
