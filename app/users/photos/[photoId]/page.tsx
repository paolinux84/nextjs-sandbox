import React from 'react'

export default async function PhotoDetail({ params }: { params: Promise<{ id: number, photoId: number }> }) {
    const id = (await params).id;
    const photoId = (await params).photoId;

    return (
        <div>PhotoDetail {id} {photoId}</div>
    )
}

