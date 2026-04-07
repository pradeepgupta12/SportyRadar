// import { memo } from 'react'
// import { Link } from 'react-router-dom'
// import BlogCard from './BlogCard'
// import { blogPosts } from '@/shared/constants/blogs.data'

// const BlogsSection = memo(({ limit = 4 }) => {
//   const posts = blogPosts.slice(0, limit)

//   return (
//     <div className="py-8">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold text-gray-900 dark:text-white">Blogs</h2>
//         <Link
//           to="/blogs"
//           className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00698c] dark:hover:text-[#3387a3] transition-colors"
//         >
//           View all
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {posts.map((post) => (
//           <BlogCard key={post.id} post={post} compact />
//         ))}
//       </div>
//     </div>
//   )
// })

// BlogsSection.displayName = 'BlogsSection'

// export default BlogsSection



import { memo } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'
import { blogPosts } from '@/shared/constants/blogs.data'

const BlogsSection = memo(({ limit = 4 }) => {
  const posts = blogPosts.slice(0, limit)

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-4">
        {/* CHANGED: text-xl font-bold → text-2xl font-extrabold */}
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Blogs</h2>
        <Link
          to="/blogs"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00698c] dark:hover:text-[#3387a3] transition-colors"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} compact />
        ))}
      </div>
    </div>
  )
})

BlogsSection.displayName = 'BlogsSection'

export default BlogsSection


////// ye neeche api vala hai

// import { memo } from 'react'
// import { Link } from 'react-router-dom'
// import BlogCard from './BlogCard'
// import { useEffect, useState } from 'react'
// import { getBlogs } from '../../service/blogs.service.js'

// const BlogsSection = memo(({ limit = 4 }) => {
// const [blogs, setBlogs] = useState([])

// useEffect(() => {
//   const fetchBlogs = async () => {
//     try {
//       const res = await getBlogs()
//       setBlogs(res.data.blogs || [])
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   fetchBlogs()
// }, [])

// const posts = blogs.slice(0, limit).map((post) => ({
//   id: post._id,
//   slug: post.slug, // ✅ must for routing
//   title: post.title,
//   excerpt: post.description,
//   categoryLabel: post.category,
//   image: post.banner?.src
//     ? post.banner.mode === "url"
//       ? post.banner.src
//       : `${import.meta.env.VITE_BACKEND_URL}${post.banner.src}`
//     : "",
//   date: new Date(post.createdAt).toLocaleDateString(), // ✅ fix date
//   author: post.author,
// }))

//   return (
//     <div className="py-8">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold text-gray-900 dark:text-white">Blogs</h2>
//         <Link
//           to="/blogs"
//           className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00698c] dark:hover:text-[#3387a3] transition-colors"
//         >
//           View all
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {posts.map((post) => (
//           <BlogCard key={post.id} post={post} compact />
//         ))}
//       </div>
//     </div>
//   )
// })

// BlogsSection.displayName = 'BlogsSection'

// export default BlogsSection