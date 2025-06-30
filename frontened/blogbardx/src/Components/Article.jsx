import React from 'react';

const articles = [
  {
    title: "Mastering React for Production 🚀",
    author: "Dipanshu Singh",
    date: "June 29, 2025",
    summary: "Explore advanced patterns, optimization, and deployment strategies for real-world React apps.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "State Management Simplified",
    author: "Anjali Mehta",
    date: "June 25, 2025",
    summary: "Learn how to manage global and local state using Context API, Redux, and Zustand.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Next.js vs CRA: Which to Choose?",
    author: "Karan Saini",
    date: "June 20, 2025",
    summary: "A detailed comparison of Create React App and Next.js for modern web development.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGl0bGUlM0ElMjAlMjJOZXh0LmpzJTIwdnMlMjBDUkElM0ElMjBXaGljaCUyMHRvJTIwQ2hvb3NlJTNGJTIyJTJDfGVufDB8fDB8fHww",
  },
  {
    title: "Tailwind CSS Crash Course 💅",
    author: "Neha Kapoor",
    date: "June 19, 2025",
    summary: "Quickly build beautiful UIs with utility-first Tailwind CSS. Get productive instantly.",
    image: "https://media.istockphoto.com/id/673884192/photo/css3-in-code-editor.webp?a=1&b=1&s=612x612&w=0&k=20&c=bXdPzLhXUrR7bnr5gU-ERDnFv9ZwaKFi-A0ml4USf1Q=",
  },
  {
    title: "Building a Portfolio in React",
    author: "Mohit Jain",
    date: "June 15, 2025",
    summary: "Step-by-step guide to building a developer portfolio using React, GitHub and Vercel.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Using Framer Motion for Animations",
    author: "Ishita Roy",
    date: "June 12, 2025",
    summary: "Create smooth, delightful UI animations in your React apps with Framer Motion.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dark Mode with Tailwind & React",
    author: "Aryan Yadav",
    date: "June 10, 2025",
    summary: "Add sleek dark mode support with Tailwind's dark classes and React state management.",
    image: "https://media.istockphoto.com/id/2163995739/photo/css-sass-styles-preprocessor-script-lines-abstract-screen-of-web-developer.webp?a=1&b=1&s=612x612&w=0&k=20&c=SXL5cWMe0a523VwY2wYlCxNMl3LGHwGK7aDRmfd152Y=",
  },
  {
    title: "React Performance Optimization",
    author: "Preeti Sharma",
    date: "June 8, 2025",
    summary: "Reduce re-renders, split bundles, and improve load time in React apps.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhY3QlMjBQZXJmb3JtYW5jZSUyME9wdGltaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Create a Blog with Markdown & React",
    author: "Nikhil Verma",
    date: "June 5, 2025",
    summary: "Use MDX or react-markdown to render articles from .md files into your React site.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Responsive Design Tips in Tailwind",
    author: "Riya Patel",
    date: "June 2, 2025",
    summary: "Master responsive breakpoints and mobile-first layouts with Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1657812159077-90649115008c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlc3BvbnNpdmUlMjBEZXNpZ24lMjBUaXBzJTIwaW4lMjBUYWlsd2luZCUyMHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "How React Hooks Work",
    author: "Deepak Kumar",
    date: "May 30, 2025",
    summary: "Understand useState, useEffect, useCallback, and other powerful React hooks.",
    image: "https://media.istockphoto.com/id/641323764/photo/businesswoman-with-cloud-service-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=Niy2R4TFeYRSdpU5FsEHCfXbE2Qw0mSY4vUKohvSTUg=",
  },
  {
    title: "Deploy React Apps for Free",
    author: "Sneha Bhatt",
    date: "May 28, 2025",
    summary: "Use GitHub Pages, Netlify, or Vercel to host your React website without cost.",
    image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Form Validation in React",
    author: "Arjun Malhotra",
    date: "May 25, 2025",
    summary: "Implement beautiful, real-time validation using libraries like React Hook Form and Yup.",
    image: "https://images.unsplash.com/photo-1586436008950-a483ec6447ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZvcm0lMjBWYWxpZGF0aW9uJTIwaW4lMjBSZWFjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "React Query Crash Course",
    author: "Divya Ghosh",
    date: "May 22, 2025",
    summary: "Efficient data fetching, caching, and revalidation with React Query.",
    image: "https://media.istockphoto.com/id/1344037902/photo/react-native-inscription-against-laptop-and-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=yhWUuYkbajHB5e_55CEC-TgShDKwbQpPz3z5jESCpzo=",
  },
  {
    title: "Using Axios with React",
    author: "Rajiv Bansal",
    date: "May 20, 2025",
    summary: "Master API calls in React with Axios for error handling and request tracking.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "React Router v6 Guide",
    author: "Vandana Sinha",
    date: "May 18, 2025",
    summary: "Navigate the new React Router v6 features: nested routes, loaders, and more.",
    image: "https://plus.unsplash.com/premium_photo-1661320941506-9fbe0aab091c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVhY3QlMjBRdWVyeSUyMENyYXNoJTIwQ291cnNlfGVufDB8fDB8fHww",
  },
  {
    title: "Authentication in React Apps",
    author: "Puneet Arora",
    date: "May 15, 2025",
    summary: "Protect routes and use tokens with Firebase Auth, Auth0, or your own backend.",
    image: "https://plus.unsplash.com/premium_photo-1661320941506-9fbe0aab091c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVhY3QlMjBRdWVyeSUyMENyYXNoJTIwQ291cnNlfGVufDB8fDB8fHww",
  },
  {
    title: "Unit Testing in React",
    author: "Aarti Nanda",
    date: "May 10, 2025",
    summary: "Learn how to write tests using Jest and React Testing Library.",
    image: "https://images.unsplash.com/photo-1514070706115-47c142769603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlYWN0JTIwUXVlcnklMjBDcmFzaCUyMENvdXJzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "TypeScript with React",
    author: "Satyam Dubey",
    date: "May 5, 2025",
    summary: "Enhance your React code with strong typing using TypeScript.",
    image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
  },
  {
    title: "Custom Hooks in React",
    author: "Kriti Sharma",
    date: "May 1, 2025",
    summary: "Create reusable and elegant custom hooks to reduce code repetition.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
];

const ArticleListPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">📰 Latest Blog Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{article.author} • {article.date}</p>
              <p className="mt-2 text-gray-700 text-sm">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleListPage;
