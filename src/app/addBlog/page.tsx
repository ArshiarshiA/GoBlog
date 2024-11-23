'use client'
import { ChangeEvent, useState } from "react"
import blogs from '../../data/data.json'
import axios from "axios"

export default function AddBlog() {

    const [dataObject, setDataObject] = useState({})

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDataObject({
            id: (blogs.blogs.length + 1).toString(),
            ...dataObject,
            [e.target.name]: e.target.value,
            userName: document.cookie.split('=')[1],
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMC747Ll7OW84ElcrU_3PzOO9F-xmJ0fyDg&s',
            comment: 0,
            like: 0,
            saved: 0,
            comments: [],
            date: new Date().toDateString()
        })
    }

    const postHandler = () => {
        axios.post('http://localhost:3001/blogs', dataObject)
        location.assign('/')
    }

    return (
        <>
            <main>
                <div>
                    <form className="py-10 px-10 flex justify-between max-[758px]:flex-col" action="">
                        <div className="w-9/12">
                            <div className="flex items-center gap-1 pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p>Time To Read :</p>
                                <input name="time"
                                    onChange={changeHandler}
                                    type="number"
                                    max={10}
                                    min={1}
                                    className="border outline-none appearance-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-3xl text-red-300" htmlFor="">Title</label>
                                <input
                                    onChange={changeHandler}
                                    name="title"
                                    maxLength={35}
                                    className="outline-none text-xl border-b text-black pt-4"
                                    type="text"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Write..."
                                    onChange={changeHandler}
                                    className="w-full min-h-[400px] appearance-none outline-none pt-6"
                                    name="paragraphs"
                                >

                                </textarea>
                            </div>
                        </div>
                        <div className="w-3/12  max-[758px]:w-full">
                            <textarea
                                onChange={changeHandler}
                                placeholder="Overview of the blog"
                                className="outline-none border w-full max-h-[200px] p-4"
                                maxLength={60}
                                name="specific"
                            >
                            </textarea>
                            <input
                                onClick={postHandler}
                                type="button"
                                value="Post"
                                className="px-5 py-1 bg-red-300 rounded-md cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}