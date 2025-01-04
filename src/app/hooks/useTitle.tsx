'use client';

import { useEffect } from 'react';

const title = 'HJ';

function useTitle(...parts: unknown[]) {
    useEffect(() => {
        const suffix = parts
            .filter((v) => v)
            .map((v) => '' + v)
            .join(' ');
        document.title = title + (suffix ? ` - ${suffix}` : '');
    }, parts);
}

export default useTitle;
