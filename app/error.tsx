'use client';
import { AlertDialog } from 'radix-ui';
import React from 'react'

//only params and searchParams are async
//not the other props.
//a general list can be found here: 

/*Which APIs Are Affected?
The following APIs have been updated to require asynchronous handling in Next.js 15:

- cookies: Used for reading cookies.
- headers: Accesses request headers.
- draftMode: Manages draft mode states.
- params: Used in files such as layout.js, page.js, route.js, and more.
- searchParams: Extracts query parameters from URLs in page.js.
*/


interface Props {
    error: Error,
    reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
    //logging for example
    console.log(error);

    //guide advise to send to sentry.io

    return (
        <>

            <div>An unexpected error has happened</div>
            <button className='btn btn-accent' onClick={() => (reset())}>Retry to call Users!</button>
        </>
    )
}

export default ErrorPage