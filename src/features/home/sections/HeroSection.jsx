// import { memo } from 'react'
// import LiveTicker from '../../../layouts/LiveTicker'
// import Category from '../../../layouts/Category.jsx'
// import Headline from '../../../layouts/Headline.jsx'

// const HeroSection = memo(() => (
//   <div className="relative text-white overflow-hidden" style={{ minHeight: '600px' }}>
//     <img
//       src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1400&q=80"
//       alt="Stadium"
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-black/30" />

//     <div className="relative z-10">
//       <LiveTicker />
//     </div>

//     <div className="relative z-10">
//       <Category />
//     </div>

//     <div className="relative z-10 flex flex-col items-center justify-center text-center
//       px-4 sm:px-8 md:px-12
//       py-2 sm:py-8 md:py-10 lg:py-2
//       pointer-events-none">
//       <h1
//         className="text-white font-extrabold leading-none tracking-tight w-full"
//         style={{
//           fontSize: 'clamp(1.75rem, 5.5vw, 4.75rem)',
//           fontStyle: 'italic',
//           textShadow: '0 2px 28px rgba(0,0,0,0.55)',
//         }}
//       >
//         Sportly Radar
//       </h1>
//       <p
//         className="text-white/90 font-medium leading-relaxed mt-2 sm:mt-1
//           w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
//         style={{
//           fontSize: 'clamp(0.72rem, 1.6vw, 1rem)',
//           textShadow: '0 1px 10px rgba(0,0,0,0.6)',
//         }}
//       >
//         We don&apos;t just give you the score, we let you feel the pulse of the game. A unified
//         dashboard for multi-sport fans who are tired of switching between a cricket app, a
//         football app, and a tennis browser tab.
//       </p>
//     </div>

//     <div className="absolute bottom-0 left-0 right-0 z-10">
//       <Headline />
//     </div>
//   </div>
// ))

// HeroSection.displayName = 'HeroSection'

// export default HeroSection


import { memo, useState, useEffect } from 'react'
import LiveTicker from '../../../layouts/LiveTicker'
import Category from '../../../layouts/Category.jsx'
import Headline from '../../../layouts/Headline.jsx'

const HeroSection = memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      desktop: '/Deskimage1.png',
      laptop: '/lapimage1.png',
      tablet: '/Tablet1.png',
      mobile: '/mobile.png',
      alt: 'Sports Stadium 1'
    },
    {
      desktop: '/Deskimage2.png',
      laptop: '/lapimage2.png',
      tablet: '/Tablet2.png',
      mobile: '/mobile2.png',
      alt: 'Sports Stadium 2'
    },
    {
      desktop: '/Deskimage3.png',
      laptop: '/lapimage3.png',
      tablet: '/Tablet3.png',
      mobile: '/mobile3.png',
      alt: 'Sports Stadium 3'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const currentImage = images[currentImageIndex]

  return (
    <div className="relative text-white overflow-hidden h-screen">

      {/* Full responsive background image */}
      <picture>
        <source media="(min-width: 1280px)"                         srcSet={currentImage.desktop} />
        <source media="(min-width: 1024px) and (max-width: 1279px)" srcSet={currentImage.laptop} />
        <source media="(min-width: 768px)  and (max-width: 1023px)" srcSet={currentImage.tablet} />
        <source media="(max-width: 767px)"                          srcSet={currentImage.mobile} />
        <img
          src={currentImage.desktop}
          alt={currentImage.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
      </picture>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* LiveTicker */}
      <div className="relative z-10">
        <LiveTicker />
      </div>

      {/* Category */}
      <div className="relative z-10">
        <Category />
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentImageIndex === index
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Headline */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Headline />
      </div>

    </div>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection