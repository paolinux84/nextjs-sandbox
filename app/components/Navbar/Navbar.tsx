import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex'>
            <Link className="p-2 mr-2" href="/">HomePage</Link>
            <Link className="p-2 mr-2" href="/admin">Admin</Link>
            <Link className="p-2 mr-2" href="/products">Products</Link>
            <Link className="p-2 mr-2" href="/users">Users</Link>
        </div>
    )
}

export default Navbar