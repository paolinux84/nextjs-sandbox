import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: Promise<{ id: number }>
}

export default async function UserDetailPage({ params }: Props) {
    const { id } = (await params);

    if (id > 10) {
        notFound()
    }


    console.log(id)
    return (
        <div>UserDetailPage {id}</div>
    )
}


