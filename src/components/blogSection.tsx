import axios from "axios";
import BlogPost, { IBlogData } from "./blogPost/blogPost";

export default async function BlogSection() {

    const { data } = await axios.get('http://localhost:3001/blogs')

    return (
        <main className="pt-80 pb-20 px-5">
            <h1 className="text-gray-400 text-2xl uppercase verbFont px-2">Some Blog Uploaded</h1>
            <div className="pt-3">
                <div className="flex flex-wrap">
                    {await data.filter((blog: IBlogData) => blog.id != undefined ? blog.id <= 6 : null).map((blog: IBlogData) => <BlogPost key={blog.id} {...blog} />)}
                </div>
            </div>
        </main>
    )
}