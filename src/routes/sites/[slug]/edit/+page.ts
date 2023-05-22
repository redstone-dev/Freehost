import type { PageLoad } from './$types';

export const load = (({ params }) => {
    return {
        project: {
            site: {
                name: `${params.slug}`,
                author: `root`,
            },
        }
    };
}) satisfies PageLoad;