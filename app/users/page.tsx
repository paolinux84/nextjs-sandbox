import React from 'react'
import UserTable from './UserTable'

interface Props {
    searchParams: Promise<{ sortOrder: string }>
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <UserTable sortOrder={sortOrder} />
        </>
    )
}

export default UsersPage