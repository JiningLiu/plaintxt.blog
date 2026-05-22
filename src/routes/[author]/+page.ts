import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Manifest } from '$lib/types';

export const load: PageLoad = async ({ params }) => {
    let response: Response;

    try {
        response = await fetch(`https://${params.author}.github.io/myplaintxtblog/manifest.json`);
    } catch (e) {
        const err = e as Error;

        error(500,
            `${err.message}
            ${err.cause}`
        );
    }

    if (!response.ok) {
        console.log(response.status);
        error(response.status, response.statusText);
    }

    try {
        const content = await response.json();

        return {
            username: params.author,
            manifest: content as Manifest
        };
    } catch (e) {
        const err = e as Error;

        error(500,
            `${err.message}
            ${err.cause}`
        );
    }
};