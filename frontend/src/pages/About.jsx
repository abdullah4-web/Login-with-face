import React from 'react'
import AboutMeHome from '../components/ui/AboutMeHome';
import ProjectSection from '../components/ui/ProjectSection';
import MediaSection from '../components/ui/MediaSection';

const About = () => {
    return (
        <>
            <AboutMeHome />
            <div className="w-full overflow-x-hidden bg-gray-50">
                {/* Hero Section */}
                <div className="w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    {/* Hero Section */}
                    <section className="w-full bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-900 dark:to-gray-800 text-white py-20 px-4">
                        <div className="w-full max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 px-2">About Me</h1>
                            <p className="text-xl md:text-2xl opacity-90 px-2">
                                Passionate developer creating innovative solutions with modern technologies.
                                Here's a glimpse of my work and creative process.
                            </p>
                        </div>
                    </section>

                    {/* Code Showcase Section */}
                    <section className="w-full py-16 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
                        <div className="w-full max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 relative inline-block px-4">
                                My Code Philosophy
                                <span className="absolute bottom-0 left-4 w-12 h-1 bg-blue-500 dark:bg-indigo-500"></span>
                            </h2>

                            <div className="w-full bg-gray-100 dark:bg-gray-700 border-l-4 border-blue-500 dark:border-indigo-500 rounded p-4 md:p-6 transition-colors duration-300 mx-2 md:mx-0">
                                <pre className="w-full bg-gray-800 dark:bg-gray-900 text-gray-200 p-2 md:p-4 rounded-md overflow-x-auto">
                                    <code className="text-sm md:text-base">
                                        {`const blockBlockedIPs = async (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const blocked = await BlockedIP.findOne({ ip });

  if (blocked) {
    logger.warn({ message: 'Blocked IP attempted access', ip });

    await sendAlertEmail({
      subject: '🚨 Blocked IP Access Attempt',
      text: 'IP: ' + ip + ' tried to access your API\\nUser-Agent:Path: ' + req.originalUrl
    });

    return res.status(403).send({ message: 'Access Denied Due IP Blocked' });
  }

  next();
};`}
                                    </code>
                                </pre>
                                <p className="text-gray-600 dark:text-gray-300 italic mt-4 px-2 transition-colors duration-300">
                                    Clean, modular, and maintainable code is at the heart of everything I build.
                                    This simple React component reflects my approach to development - focused and efficient.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <ProjectSection />
                    {/* Media Section */}
                    <MediaSection />
                </div>
            </div>
        </>
    );
};

export default About;