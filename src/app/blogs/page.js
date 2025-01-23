import axios from "axios";
import BlogCards from "../components/BlogCards";

const Home = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  return (
    <section className="container mx-auto lg:p-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {posts.map((post) => (
        <BlogCards key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Home;
