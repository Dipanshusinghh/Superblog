import React from "react";

const posts = [
  {
    title: "Mastering React for Production 🚀",
    summary:
      "Explore advanced patterns, optimization, and deployment strategies for real-world React apps.",
    image:
      "https://images.unsplash.com/photo-1645070858656-816d780df8e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JTIyTWFzdGVyaW5nJTIwUmVhY3QlMjBmb3IlMjBQcm9kdWN0aW9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    credit:
      "https://unsplash.com/photos/kcA-c3f_3FE",
  },
  {
    title: "Tailwind CSS Tips You Didn't Know 🎨",
    summary:
      "Push your Tailwind skills further with lesser-known utilities and custom setups.",
    image:
      "https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=9eGus3FWLIZAL4IDMWC77rTBs7rVKwJDV05BHDuRhBU=",
    credit:
      "https://unsplash.com/photos/Lks7vei-eAg",
  },
  {
    title: "VS Code Setup Like a Pro 💡",
    summary:
      "Craft the perfect developer environment with powerful extensions and themes.",
    image:
      "https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VlMlMjBDb2RlJTIwU2V0dXAlMjBMaWtlJTIwYSUyMFByb3xlbnwwfHwwfHx8MA%3D%3D",
    credit:
      "https://unsplash.com/photos/IQbCFe2pQwA",
  },
  {
    title: "Boost JavaScript Performance ⚡",
    summary:
      "Practical techniques to speed up your JS code and enhance user experience.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    credit:
      "https://unsplash.com/photos/FHnnjk1Yj7Y",
  },
  {
    title: "Build an Accessible Web 🌐",
    summary:
      "Learn to create inclusive interfaces that work for all users, regardless of ability.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    credit:
      "https://unsplash.com/photos/gcsNOsPEXfs",
  },
  {
    title: "Learn Git Like a Ninja 🧠",
    summary:
      "Master Git with smart branching strategies, rebasing, and real-world collaboration flows.",
    image:
      "https://plus.unsplash.com/premium_photo-1661694230988-2076317f2732?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExlYXJuJTIwR2l0JTIwTGlrZSUyMGElMjBOaW5qYSUyMGluJTIwd2ViJTIwZGV2fGVufDB8fDB8fHww",
    credit:
      "https://unsplash.com/photos/R_LK3sqLiBw",
  },
  {
    title: "Web3: The Future of the Internet 🌐",
    summary:
      "Dive into the decentralized web, blockchain basics, and what it means for developers.",
    image:
      "https://images.unsplash.com/photo-1719253481072-5579e62d0a3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2ViMyUzQSUyMFRoZSUyMEZ1dHVyZSUyMG9mJTIwdGhlJTIwSW50ZXJuZXxlbnwwfHwwfHx8MA%3D%3D",
    credit:
      "https://unsplash.com/photos/dcZsxUAAJXs",
  },
  {
    title: "Docker for Frontend Developers 🐳",
    summary:
      "Learn how to use Docker to isolate, deploy, and scale your frontend applications.",
    image:
      "https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9ja2VyJTIwZm9yJTIwRnJvbnRlbmQlMjBEZXZlbG9wZXJzfGVufDB8fDB8fHww0",
    credit:
      "https://unsplash.com/photos/PQ2iKe6QKkI",
  },
];

const Content = () => {
  return (
    <main className="bg-gray-50 py-12 px-6">
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in">
          Latest from <span className="text-blue-600">SuperBlog</span>
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in delay-200">
          Stay sharp with hand-picked articles on development & design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.summary}</p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Read more →
              </a>
              <div className="mt-4 text-sm text-gray-400">
                Photo by{" "}
                <a
                  href={post.credit}
                  className="underline hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Content;
