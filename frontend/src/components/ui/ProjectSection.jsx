import React from 'react'

const ProjectSection = () => {
    const projects = [
        {
            title: "ERP System",
            description: "Full-featured ERP system for business management",
            image: "https://res.cloudinary.com/dtcmf6iqn/image/upload/v1745143514/hofp4ce629k7dgcfzv9c.png",
            liveUrl: "",
            tags: ["React", "Node.js", "MongoDB" ,"Socket.IO" , "twillo"]
        },
        {
            title: "Rental Management System",
            description: "Manage properties, tenants, and leases",
            image: "https://res.cloudinary.com/dn1oz4vt9/image/upload/v1720697632/phkdk89tmz1z7y9op9yc.png",
            liveUrl: "https://jrms.netlify.app/",
            tags: ["React",  "Node.js", "MongoDB", "Express" , "context API"] 
        },
        {
            title: "AI Tools App",
            description: "This platform caters to developers aiming to elevate their applications and businesses in search of innovative solutions. ",
            image: "https://res.cloudinary.com/dn1oz4vt9/image/upload/v1720524970/fc9na3o7kfibejn9d2rz.png",
            liveUrl: "https://zeeaitools.netlify.app/",
            tags: ["React", "Firebase", "Redux" ]
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 relative inline-block">
                    Featured Projects
                    <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 dark:bg-indigo-500"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-600/50"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-48 object-cover" 
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white text-center py-2 px-4 rounded transition-colors duration-300"
                                >
                                    View Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection