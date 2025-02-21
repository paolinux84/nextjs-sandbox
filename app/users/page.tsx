import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
    searchParams: Promise<{ sortOrder: string }>
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>

            <Link href="/users/new" className='btn btn-primary m-3'>New User</Link>

            {/* one way to have SUSPEND element shown at place of long-time loading element is to enclose the element within Suspense */}
            <Suspense fallback={<p>Loading....</p>}>
                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </>
    )
}

export default UsersPage