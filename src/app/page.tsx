import AddBlogsSec from "@/components/addBlogSec/addBlogSec";
import BlogSection from "@/components/blogSection";
import MainSec from "@/components/mainSec";

export default function Home() {
  return (
    <>
      <MainSec />
      <section className="max-w-[1200px] m-auto">
        <BlogSection />
        <AddBlogsSec />
      </section>
    </>
  );
}