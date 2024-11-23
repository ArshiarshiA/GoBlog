'use client'
import axios from "axios"
import { useMemo, useState } from "react"

export default function Like({id, length }: {id: number, length: number }) {
        
    const [likes , setLikes] = useState(length)
    
    const likeHandler = () => {
        setLikes(likes + 1)
    }
    
    const prevLike = useMemo(() => {
        axios.patch(`http://localhost:3001/blogs/${id}` , {
            like: likes
        })
    } , [likes])

    return (
        <>
            <svg onClick={likeHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span className="text-md">{likes}</span>
        </>
    )
}