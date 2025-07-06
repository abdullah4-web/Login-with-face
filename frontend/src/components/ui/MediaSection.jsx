import React, { useState } from 'react'

const MediaSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const media = [
    {
      type: "video",
      title: "ERP Demo",
      embedUrl: "https://drive.google.com/file/d/1Uv_Hw6yDphyOulJwLYPROnudbl697uZp/preview",
      thumbnail: "https://res.cloudinary.com/dtcmf6iqn/image/upload/v1745143514/hofp4ce629k7dgcfzv9c.png",
      duration: "2:45"
    },
    {
      type: "Reel",
      title: "Quick Tutorial of Middlewares",
      embedUrl: "https://www.tiktok.com/embed/v2/7510454955333913864",
      thumbnail: "https://res.cloudinary.com/dtcmf6iqn/image/upload/v1749033032/90bd4dfc-5e54-4397-bc0d-b260562ec7dc_ioasov.jpg",
      views: "15K"
    }
  ];

  const handlePlay = (index) => {
    setPlayingVideo(index);
  };

  const handleClose = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 relative inline-block">
          Media & Tutorials
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 dark:bg-indigo-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {media.map((item, index) => (
            <div key={index} className="group">
              {playingVideo === index ? (
                <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden">
                  <button 
                    onClick={handleClose}
                    className="absolute top-2 right-2 z-10 bg-gray-900/70 text-white p-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  {item.type === 'video' ? (
                    <iframe 
                      src={item.embedUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay"
                      allowFullScreen
                    />
                  ) : (
                    <iframe 
                      src={item.embedUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  )}
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-700/50 cursor-pointer">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => handlePlay(index)}
                  />
                  
                  <span className="absolute top-2 left-2 bg-gray-900/70 text-white text-xs px-2 py-1 rounded">
                    {item.type === 'video' ? 'Video' : 'Reel'}
                  </span>
                  
                  <span className="absolute bottom-2 right-2 bg-gray-900/70 text-white text-xs px-2 py-1 rounded">
                    {item.type === 'video' ? item.duration : `${item.views} views`}
                  </span>
                  
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handlePlay(index)}
                  >
                    <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center gap-2">
                      {item.type === 'video' ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Watch Video
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          View Reel
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                {item.type === 'video' ? 'Detailed product walkthrough' : 'Short tutorial snippet'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaSection