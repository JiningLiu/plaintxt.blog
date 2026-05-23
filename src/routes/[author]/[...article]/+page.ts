import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    let response: Response;

    try {
        response = await fetch(`https://${params.author}.github.io/myplaintxtblog/${params.article}.txt`);
    } catch (e) {
        const err = e as Error;

        error(500,
            `${err.message}
            ${err.cause}`
        );
    }

    if (!response.ok) {
        error(response.status, response.statusText);
    }

    let content: string;

    try {
        content = await response.text();

        response = await fetch(`https://${params.author}.github.io/myplaintxtblog/name`);
    } catch (e) {
        const err = e as Error;

        error(500,
            `${err.message}
            ${err.cause}`
        );
    }

    if (!response.ok) {
        error(response.status, response.statusText);
    }

    let author: string;

    try {
        author = await response.text();

        const lines = content.split('\n');

        const date = new Intl.DateTimeFormat(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
        }).format(new Date(`${lines[2]}T00:00:00Z`));

        return {
            username: params.author,
            author: author,
            title: lines[0],
            subtitle: lines[1],
            date: date,
            content: lines.slice(3).join('\n')
        };
    } catch (e) {
        const err = e as Error;

        error(500,
            `${err.message}
            ${err.cause}`
        );
    }
};