const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-400">
                        Simple-blog is your go-to platform for insightful blogs and updates.
                        Join our community and stay informed!
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>
                            <a href="/" className="hover:text-blue-500 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/blogs" className="hover:text-blue-500 transition-colors duration-300">
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a href="/profile" className="hover:text-blue-500 transition-colors duration-300">
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Email: support@simple-blog.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Blog Street, Web City</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
                <p>
                    © {new Date().getFullYear()} Simple-blog. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
