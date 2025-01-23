import Link from "next/link";

const BlogCards = ({ post }) => {
    return (
        <section className="shadow-lg rounded-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between border border-black">
            <h1 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                {post.title.length > 50 ? `${post.title.slice(0, 50)}...` : post.title}
            </h1>
            <Link href={`/blogs/${post.id}`} className="btn btn-ghost border border-black text-gray-500 hover:text-blue-600 transition-colors duration-300">
                Read More...
            </Link>
        </section>
    );
};

export default BlogCards;
