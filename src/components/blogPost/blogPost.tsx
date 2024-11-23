import Image from "next/image";
import Link from "next/link";

interface TCommentData{
    text?: string
} 

export interface IBlogData {
    id?: number
    userImage?: string
    userName?: string
    title?: string
    specific?: string
    like?: number
    comment?: number
    saved?: number
    time?: number
    paragraphs?: string
    comments?: TCommentData[]
}

export default function BlogPost({ userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMC747Ll7OW84ElcrU_3PzOO9F-xmJ0fyDg&s', userName, comments, like = 0, saved = 0, specific, time, title, id }: IBlogData) {
    return (
        <div className="p-2 py-5 w-full min-[860px]:w-6/12 min-[1290px]:w-4/12">
            <Link href={`/blog/${id}`}>
                <div className="border border-gray-300 rounded-lg p-5 py-2 h-fit shadow">
                    <div className="flex items-center gap-1">
                        <Image
                            src={userImage}
                            width={30}
                            height={30}
                            alt="user image"
                            className="rounded-full"
                        />
                        <p className="font-extralight">{userName}</p>
                    </div>
                    <div className="py-4 pb-2 border-b">
                        <h1 className="font-bold pb-2">{title}</h1>
                        <p className="font-extralight">{specific}</p>
                    </div>
                    <div className="flex justify-between pt-2">
                        <div className="flex gap-3 text-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <span className="text-xs">{like}</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                </svg>
                                <span className="text-xs">{comments?.length}</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                                <span className="text-xs">{saved}</span>
                            </div>
                        </div>
                        <div>
                            {time && (
                                <span className="text-xs text-gray-500">Time To Read : {time}m</span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    )
}