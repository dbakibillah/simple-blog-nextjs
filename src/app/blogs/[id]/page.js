import axios from "axios";
const blogPage = async ({ params }) => {
  const { id } = await params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return (
    <section className="container mx-auto lg:p-24">
      <h1 className="text-2xl font-bold">{res.data.title}</h1>
      <p className="text-lg">{res.data.body}</p>
    </section>
  );
};

export default blogPage;
