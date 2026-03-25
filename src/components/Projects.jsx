import React from "react";
import { motion } from "framer-motion";
import { 
    HiExternalLink, 
    HiCode, 
    HiEye,
    HiLockClosed,
    HiChartBar,
    HiGlobeAlt,
    HiShoppingCart,
    HiOfficeBuilding,
    HiCog
} from "react-icons/hi";
import { 
    FaWordpress, 
    FaReact, 
    FaShoppingCart
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
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

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Proyectos basados en experiencia real
    const conceptualProjects = [
        {
            id: 1,
            title: "E-commerce Híbridos WordPress + Shopify",
            description: "Serie de tiendas online desarrolladas combinando WordPress como CMS principal con integración API de Shopify. Incluye desarrollo de sistemas de promociones, descuentos y ofertas especializadas adaptables a diferentes tipos de artículos e industrias.",
            category: "E-commerce Avanzado",
            icon: HiShoppingCart,
            color: "primary",
            technologies: ["WordPress", "Shopify API", "WooCommerce", "ACF Pro", "Custom PHP", "Plugin Customization", "JavaScript", "REST API", "Payment Gateways"],
            challenges: [
                "Sincronización en tiempo real entre WordPress y Shopify",
                "Sistemas de promociones configurables (descuentos por categoría, marca, temporada, volumen)", 
                "Integración con múltiples pasarelas de pago regionales",
                "Ofertas personalizadas para diferentes tipos de clientes (mayorista, minorista, VIP)",
                "Performance optimization para catálogos extensos con múltiples variaciones de producto"
            ],
            industries: "Equipos industriales, venta de llantas, restaurantes",
            type: "demo"
        },
        {
            id: 2,
            title: "Plataformas Corporativas Multi-Industria",
            description: "Múltiples sitios web robustos para empresas industriales con catálogos técnicos complejos, sistemas de cotización, gestión de distribuidores y diferentes niveles de integración CRM según las necesidades.",
            category: "Sitios Corporativos Avanzados", 
            icon: HiOfficeBuilding,
            color: "secondary",
            technologies: ["WordPress", "ACF Pro", "Custom Post Types", "WP Hooks", "CRM Integration", "Multi-site", "WPML", "Custom Dashboards"],
            challenges: [
                "Arquitecturas multi-idioma para mercados internacionales",
                "Sistemas de cotización automatizada personalizados",
                "Gestión de roles complejos (distribuidores, técnicos, administradores)",
                "Integraciones con CRMs diversos (Salesforce, HubSpot, propietarios)",
                "Catálogos técnicos con especificaciones dinámicas y filtrados avanzados"
            ],
            industries: "Fulminantes industriales, bombas y compresores, constructoras",
            type: "demo"
        },
        {
            id: 3,
            title: "Ecosistemas de Servicios Automotrices",
            description: "Desarrollo de múltiples plataformas digitales para talleres mecánicos y servicios automotrices, cada una con funcionalidades adaptadas: sistemas de citas, diagnósticos, presupuestos y redes de proveedores.",
            category: "Sistemas de Servicios",
            icon: HiCog,
            color: "accent", 
            technologies: ["WordPress", "Custom Dashboards", "Payment Gateways", "Google APIs", "Geolocation", "Custom PHP", "MySQL"],
            challenges: [
                "Incremento significativo en notoriedad de marca y presencia digital",
                "Destacar productos y servicios especializados con presentación profesional", 
                "Atracción de nuevos clientes a través de posicionamiento web optimizado",
                "Renovación de confianza en clientes existentes mediante plataforma moderna",
                "Consolidación de imagen corporativa y credibilidad en el sector automotriz"
            ],
            industries: "Talleres mecánicos, servicios pesados, hojalatería y pintura",
            type: "demo"
        },
        {
            id: 4,
            title: "Portfolio React SPA Moderno", 
            description: "Single Page Application desarrollada con React, Tailwind CSS y Framer Motion. Optimizada para GitHub Pages con sistema de temas dinámico y formulario de contacto funcional.",
            category: "Frontend React",
            icon: FaReact,
            color: "primary",
            technologies: ["React 19", "Tailwind CSS", "Framer Motion", "Vite", "Formspree", "GitHub Actions"],
            challenges: [
                "Migration de conocimiento WordPress a React ecosystem",
                "Implementación de animaciones fluidas y profesionales", 
                "Sistema de temas persistent con localStorage",
                "Deploy automation con GitHub Pages",
                "Responsive design mobile-first"
            ],
            industries: "Desarrollo personal y profesional",
            type: "current",
            status: "Este proyecto actual - demostración de crecimiento técnico"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
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
                            Proyectos Destacados
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                            Proyectos representativos de mi experiencia técnica real en diferentes industrias y complejidades
                        </p>
                    </motion.div>

                    {/* Confidentiality Notice */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-400 p-6 rounded-r-lg"
                    >
                        <div className="flex items-start space-x-3">
                            <HiLockClosed className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                                    Experiencia Real Verificable
                                </h3>
                                <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                                    Los proyectos mostrados representan mi experiencia técnica real desarrollada para 
                                    empresas de diferentes industrias. Por acuerdos de confidencialidad, no puedo 
                                    mostrar detalles específicos públicamente, pero durante el proceso de entrevista 
                                    estaré encantado de demostrar casos reales, screenshots de administración, 
                                    arquitectura técnica implementada y discutir desafíos específicos resueltos.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Grid - First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {conceptualProjects.map((project, index) => {
                            const IconComponent = project.icon;
                            return (
                                <motion.div
                                    key={project.id}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-700"
                                >
                                    {/* Project Type Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        {project.type === 'current' ? (
                                            <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                                                Proyecto Actual
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                                Experiencia Real
                                            </span>
                                        )}
                                    </div>

                                    {/* Header with Icon */}
                                    <div className={`h-32 bg-gradient-to-br from-${project.color}-400 to-${project.color}-600 flex items-center justify-center relative`}>
                                        <IconComponent className="w-16 h-16 text-white opacity-90" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <p className={`text-sm font-medium text-${project.color}-600 dark:text-${project.color}-400 mb-3`}>
                                                {project.category}
                                            </p>
                                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                                Stack técnico:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technical Challenges */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                                Desafíos técnicos resueltos:
                                            </h4>
                                            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                                                {project.challenges.slice(0, 3).map((challenge, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Industries */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                                                Industrias:
                                            </h4>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                                                {project.industries}
                                            </p>
                                        </div>

                                        {/* Action Button */}
                                        {project.type === 'current' ? (
                                            <div className="pt-2">
                                                <div className={`inline-flex items-center text-sm font-medium text-${project.color}-600 dark:text-${project.color}-400`}>
                                                    <HiEye className="w-4 h-4 mr-2" />
                                                    {project.status}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="pt-2">
                                                <div className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                                                    <HiCode className="w-4 h-4 mr-2" />
                                                    Disponible para discusión en entrevista
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Call to Action */}
                    <motion.div 
                        variants={itemVariants}
                        className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
                    >
                        <h3 className="text-2xl font-bold mb-4">¿Interesado en conocer más detalles técnicos?</h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            En una entrevista técnica puedo profundizar en la arquitectura, desafíos resueltos, 
                            integraciones complejas y resultados específicos de estos proyectos reales con 
                            métricas de performance y casos de uso detallados.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors duration-300 shadow-lg"
                        >
                            Programar Entrevista Técnica
                            <HiExternalLink className="w-5 h-5 ml-2" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;