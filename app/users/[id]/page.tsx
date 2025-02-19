import React from 'react'

interface Props {
    id: number
}

export default async function UserDetailPage({ params }: { params: Promise<Props> }) {
    const id = (await params).id;
    console.log(id)

    return (
        <div>UserDetailPage {id}</div>
    )
}


