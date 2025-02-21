'use client';

//important to specify from next/navigation instead than from next/router
//next/navigation --> AppRouter
//next/router --> OLD PagesRouter 
import { useRouter } from 'next/navigation';
import React from 'react'

const NewUserPage = () => {

    const router = useRouter();
    return (
        <>
            <div>NewUserPage</div>
            <button
                className='btn btn-secondary m-3'
                onClick={() => { router.push("/users") }}
            >Create New User</button>

        </>
    )
}

export default NewUserPage