import React from "react";
import { motion } from "framer-motion";
import { HiDownload, HiMail, HiLocationMarker, HiCode } from "react-icons/hi";
import { FaWordpress, FaReact } from "react-icons/fa";

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center space-y-6"
                >
                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-20 left-10 opacity-20"
                        animate={{ 
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FaWordpress className="text-6xl text-primary-400" />
                    </motion.div>
                    
                    <motion.div
                        className="absolute top-40 right-10 opacity-20"
                        animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, -3, 3, 0]
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <FaReact className="text-6xl text-secondary-400" />
                    </motion.div>
                    
                    <motion.div
                        className="absolute bottom-40 left-20 opacity-20"
                        animate={{ 
                            y: [0, -12, 0],
                            x: [0, 5, 0]
                        }}
                        transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    >
                        <HiCode className="text-5xl text-accent-400" />
                    </motion.div>
                    
                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 text-neutral-600 dark:text-neutral-400">
                        <HiLocationMarker className="w-5 h-5 text-primary-500" />
                        <span className="font-medium">Chihuahua, México</span>
                    </motion.div>
                    
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent leading-tight"
                    >
                        Marcos Torres
                    </motion.h1>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="relative"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                            WordPress Full-Cycle Engineer
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                                Senior Frontend Developer
                            </span>
                            <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full">
                                WordPress Specialist
                            </span>
                        </div>
                    </motion.div>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Experto en desarrollo WordPress con experiencia completa desde configuración de hosting 
                        y correos hasta soporte post-launch. Especializado en temas personalizados, ACF, 
                        optimización SEO y performance, con conocimientos emergentes en React.
                    </motion.p>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Contáctame</span>
                        </motion.a>
                        
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center space-x-2 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-8 py-4 rounded-lg font-semibold border-2 border-neutral-300 dark:border-neutral-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                        >
                            <HiDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Ver Proyectos</span>
                        </motion.a>
                    </motion.div>
                    
                    {/* Stats */}
                    <motion.div 
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                            <div className="text-neutral-600 dark:text-neutral-400">Años de experiencia</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">100+</div>
                            <div className="text-neutral-600 dark:text-neutral-400">Proyectos completados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">24/7</div>
                            <div className="text-neutral-600 dark:text-neutral-400">Soporte disponible</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;