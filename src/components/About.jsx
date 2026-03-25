import React from "react";
import { motion } from "framer-motion";
import { 
    HiServer, 
    HiCode, 
    HiChartBar, 
    HiSupport, 
    HiMail, 
    HiGlobeAlt,
    HiCog,
    HiDesktopComputer,
    HiColorSwatch,
    HiLightningBolt
} from "react-icons/hi";
import { 
    FaWordpress, 
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaBootstrap, 
    FaGitAlt,
    FaSass
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Importar tu foto aquí cuando la agregues a src/assets/
import profilePhoto from "../assets/marcos-torres.jpg";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: { width: 0 },
        visible: { 
            width: "100%", 
            transition: { 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const wpExpertise = [
        {
            icon: HiServer,
            title: "Infrastructure & Hosting",
            description: "Configuración de hosting, dominios, correos corporativos y gestión de servidores",
            color: "primary"
        },
        {
            icon: HiCode,
            title: "Custom Development",
            description: "Temas personalizados, ACF, Custom Post Types, hooks y REST API integration",
            color: "secondary"
        },
        {
            icon: HiChartBar,
            title: "SEO & Performance",
            description: "Optimización SEO, Core Web Vitals, caching strategies y speed optimization",
            color: "accent"
        },
        {
            icon: HiSupport,
            title: "Post-Launch Support",
            description: "Mantenimiento, actualizaciones, troubleshooting y soporte continuo",
            color: "primary"
        }
    ];

    const technicalSkills = {
        expert: [
            { 
                name: "WordPress", 
                icon: FaWordpress, 
                description: "5+ años desarrollando temas custom, ACF, CPT, y soluciones completas",
                color: "primary"
            },
            { 
                name: "HTML5 & CSS3", 
                icon: FaHtml5, 
                description: "Semantic markup, accesibilidad, CSS Grid, Flexbox, y responsive design",
                color: "secondary"
            },
            { 
                name: "JavaScript (ES6+)", 
                icon: FaJs, 
                description: "Vanilla JS, DOM manipulation, APIs, y frameworks modernos",
                color: "accent"
            }
        ],
        advanced: [
            { 
                name: "SASS/SCSS", 
                icon: FaSass, 
                description: "Arquitectura CSS escalable, mixins, y metodologías BEM",
                color: "primary"
            },
            { 
                name: "Tailwind CSS", 
                icon: SiTailwindcss, 
                description: "Utility-first, custom configurations, y design systems",
                color: "secondary"
            },
            { 
                name: "Bootstrap", 
                icon: FaBootstrap, 
                description: "Responsive frameworks, customización, y componentes",
                color: "accent"
            },
            { 
                name: "Git & Version Control", 
                icon: FaGitAlt, 
                description: "Branching strategies, colaboración, y deployment workflows",
                color: "primary"
            }
        ],
        learning: [
            { 
                name: "React", 
                icon: FaReact, 
                description: "Hooks, componentes, estado, y este portafolio como ejemplo",
                color: "secondary"
            }
        ]
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-neutral-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
                            Acerca de Mí
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Personal Introduction & Photo */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Tu foto profesional */}
                            <div className="relative group mx-auto lg:mx-0 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                                <img src={profilePhoto} alt="Marcos Torres" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                            </div>

                            <div className="space-y-4 text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                                    WordPress Full-Cycle Engineer
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    Desarrollador Frontend Senior especializado en WordPress con experiencia completa 
                                    en todo el ciclo de vida de proyectos web. Desde la configuración inicial del hosting 
                                    y correos corporativos hasta el soporte post-launch, me encargo de cada aspecto 
                                    técnico para entregar soluciones robustas y escalables.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    Con sólida experiencia en desarrollo frontend y conocimientos emergentes en React, 
                                    combino expertise técnico con enfoque en SEO, performance y experiencia de usuario 
                                    para crear sitios web que no solo se ven bien, sino que funcionan excepcionalmente.
                                </p>
                            </div>
                        </motion.div>

                        {/* WordPress Expertise */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 text-center lg:text-left">
                                Expertise WordPress
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {wpExpertise.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.title}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            className="group p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                                        >
                                            <div className={`inline-flex p-3 rounded-lg mb-4 bg-${skill.color}-100 dark:bg-${skill.color}-900`}>
                                                <IconComponent className={`w-6 h-6 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                                            </div>
                                            <h4 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {skill.title}
                                            </h4>
                                            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                                                {skill.description}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Technical Skills */}
                    <motion.div variants={itemVariants} className="space-y-12">
                        <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
                            Habilidades Técnicas
                        </h3>
                        
                        {/* Expert Level */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Expert Level</h4>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {technicalSkills.expert.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03, y: -5 }}
                                            className="group p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                                        >
                                            <div className={`inline-flex p-3 rounded-lg mb-4 bg-${skill.color}-100 dark:bg-${skill.color}-900 group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className={`w-8 h-8 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                                            </div>
                                            <h5 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                {skill.name}
                                            </h5>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                                {skill.description}
                                            </p>
                                            <div className="mt-3 flex items-center space-x-1">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                ))}
                                                <span className="text-xs font-medium text-green-600 dark:text-green-400 ml-2">Expert</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Advanced Level */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Advanced Level</h4>
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {technicalSkills.advanced.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03, y: -5 }}
                                            className="group p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                                        >
                                            <div className={`inline-flex p-3 rounded-lg mb-4 bg-${skill.color}-100 dark:bg-${skill.color}-900 group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className={`w-7 h-7 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                                            </div>
                                            <h5 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {skill.name}
                                            </h5>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                                {skill.description}
                                            </p>
                                            <div className="mt-3 flex items-center space-x-1">
                                                {[...Array(2)].map((_, i) => (
                                                    <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                ))}
                                                <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                                                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 ml-2">Advanced</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Learning Level */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                                <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Currently Learning</h4>
                                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                            </div>
                            <div className="flex justify-center">
                                {technicalSkills.learning.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03, y: -5 }}
                                            className="group p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 max-w-sm"
                                        >
                                            <div className={`inline-flex p-3 rounded-lg mb-4 bg-${skill.color}-100 dark:bg-${skill.color}-900 group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className={`w-8 h-8 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                                            </div>
                                            <h5 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                                                {skill.name}
                                            </h5>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                                {skill.description}
                                            </p>
                                            <div className="mt-3 flex items-center space-x-1">
                                                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                                                <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                                                <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                                                <span className="text-xs font-medium text-accent-600 dark:text-accent-400 ml-2">Learning</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Approach */}
                    <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
                        <HiLightningBolt className="w-12 h-12 mx-auto mb-4 opacity-90" />
                        <h3 className="text-2xl font-bold mb-4">Mi Enfoque Profesional</h3>
                        <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Creo en la importancia de entender completamente el ciclo de vida de un proyecto web. 
                            Desde el primer contacto con el cliente hasta años después del lanzamiento, mi objetivo 
                            es proporcionar soluciones técnicas sólidas que crezcan con el negocio y generen 
                            resultados reales.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;