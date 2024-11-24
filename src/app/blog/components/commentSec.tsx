'use client'
import axios from "axios"
import { ChangeEvent, useState } from "react"

export default function CommentSec({ id, comments }: { id: number, comments: { text: string }[] }) {

    const [text, setText] = useState('')

    const catchComment = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    const sendHandler = () => {
        if (document.cookie.split('=')[1]) {
            if (text != '') {
                axios.patch(`http://localhost:3001/blogs/${id}`, {
                    comments: [
                        ...comments,
                        {
                            text
                        }
                    ]
                })
                location.reload()
            }
        } else {
            location.assign('/login')
        }
    }

    return (
        <div>
            <form className="flex flex-col gap-2" action="">
                <input onChange={catchComment} className="w-full border px-3 py-2 outline-none rounded-md" type="text" placeholder="Enter your comment" />
                <input onClick={sendHandler} className="w-fit bg-red-300 text-white px-3 py-1 cursor-pointer rounded-md" type="button" value={'submit'} />
            </form>
        </div>
    )
}