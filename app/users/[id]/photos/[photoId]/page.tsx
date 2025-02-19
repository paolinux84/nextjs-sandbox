import React from 'react'

interface Props {
    id: number,
    photoId: number
}


export default async function PhotoDetail({ params }: { params: Promise<Props> }) {
    const id = (await params).id;
    const photoId = (await params).photoId;

    return (
        <div>PhotoDetail {id} {photoId}</div>
    )
}

