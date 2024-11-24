import { IBlogData } from "@/components/blogPost/blogPost"
import axios from "axios"
import Image from "next/image"
import CommentSec from "../components/commentSec"
import Like from "../components/like"
import Share from "../components/share"
import NoComment from "../components/noComment"

interface IBlog {
    params: { id: number }
}

export default async function Blogs({ params }: IBlog) {

    const { data } = await axios.get(`http://localhost:3001/blogs/${params.id}`)

    return (
        <section className="p-5">
            <div className="max-w-[800px] m-auto">
                <h1 className="text-5xl font-extrabold capitalize">{data.title}</h1>
                <p className="text-gray-400 text-xl capitalize py-3">{data.specific}</p>
                <div className="flex gap-2">
                    <div>
                        <Image src={data.userImage} alt="logo" width={30} height={30} className="rounded-full" />
                    </div>
                    <div>
                        <p>{data.userName}</p>
                    </div>
                </div>
                <div className="pt-3">
                    <div className="flex items-center gap-2">
                        <p className="font-extralight text-sm">{data.time} to read</p>
                        <span>-</span>
                        <p className="font-extralight text-sm">{data.date}</p>
                    </div>
                </div>
                <div className="border-y my-6">
                    <div className="flex justify-between py-4">
                        <div className="flex gap-5 text-center">
                            <div className="flex font-extralight items-center gap-1">
                                <Like
                                    id={params.id}
                                    length={data.like}
                                />
                            </div>
                            <div className="flex font-extralight items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                </svg>
                                <span className="text-md">{data.comments.length}</span>
                            </div>
                            <div className="flex font-extralight items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                                <span className="text-md">{data.saved}</span>
                            </div>
                        </div>
                        <div>
                            <Share />
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <p className="text-2xl text-justify">{data.paragraphs}</p>
                </div>
                <div className="py-10">
                    <div className="pb-3">
                        <CommentSec
                            comments={data.comments}
                            id={params.id}
                        />
                    </div>

                    {data.comments.length != 0 ? <p>{data.comments.length} Comment</p> : null}

                    <div className="py-2">
                        {data.comments.length == 0 ? <NoComment />
                            : (
                                data.comments.map((comment: { text: string }) => (
                                    <div key={comment.text} className="py-4 px-5 border rounded-md mb-3">
                                        <span>{comment.text}</span>
                                    </div>
                                ))
                            )}
                    </div>
                </div>
            </div>
        </section>
    )
}