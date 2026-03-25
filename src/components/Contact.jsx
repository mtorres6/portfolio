import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { 
    HiMail, 
    HiLocationMarker, 
    HiPhone,
    HiPaperAirplane,
    HiCheckCircle,
    HiExclamationCircle
} from "react-icons/hi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [state, handleSubmit] = useForm("xvzvpkbl"); // Tu endpoint de Formspree
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const contactMethods = [
        {
            icon: HiMail,
            title: "Email",
            value: "marcos.torresba@gmail.com",
            link: "mailto:marcos.torresba@gmail.com",
            color: "primary",
            description: "Respuesta en menos de 24 horas"
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            value: "Marcos Torres",
            link: "https://www.linkedin.com/in/marcos-torres-24562771/",
            color: "secondary",
            description: "Conectemos profesionalmente"
        },
        {
            icon: HiLocationMarker,
            title: "Ubicación",
            value: "Chihuahua, México",
            link: "#",
            color: "accent",
            description: "Disponible para trabajo remoto"
        }
    ];

    if (state.succeeded) {
        return (
            <section className="py-20 px-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                            <HiCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                            ¡Mensaje Enviado Exitosamente!
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                            Gracias por tu interés. He recibido tu mensaje y me pondré en contacto contigo 
                            en las próximas 24 horas para discutir tu proyecto.
                        </p>
                        <motion.button
                            onClick={() => window.location.reload()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                        >
                            Enviar Otro Mensaje
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
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
                            Trabajemos Juntos
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                            ¿Tienes un proyecto WordPress en mente? Hablemos sobre cómo puedo ayudarte a 
                            llevarlo desde la idea hasta el lanzamiento exitoso.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                                    Cuéntame sobre tu proyecto
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Completa el formulario y te responderé en menos de 24 horas con una propuesta personalizada.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Tu nombre"
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="tu@email.com"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                        Empresa / Organización
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Nombre de tu empresa (opcional)"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Cuéntame sobre tu proyecto: ¿Qué tipo de sitio necesitas? ¿Cuáles son tus objetivos principales? ¿Tienes algún requerimiento específico?"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={state.submitting}
                                    whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                                    whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {state.submitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <HiPaperAirplane className="w-5 h-5" />
                                            <span>Enviar Mensaje</span>
                                        </>
                                    )}
                                </motion.button>

                                {state.errors && state.errors.length > 0 && (
                                    <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm">
                                        <HiExclamationCircle className="w-4 h-4" />
                                        <span>Por favor, corrige los errores en el formulario</span>
                                    </div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                                    Información de contacto
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    ¿Prefieres contactarme directamente? Aquí tienes todas las opciones disponibles.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactMethods.map((method, index) => {
                                    const IconComponent = method.icon;
                                    return (
                                        <motion.a
                                            key={method.title}
                                            href={method.link}
                                            target={method.link.startsWith('http') ? '_blank' : '_self'}
                                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.02 }}
                                            className="group flex items-start space-x-4 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                                        >
                                            <div className={`flex-shrink-0 p-3 rounded-lg bg-${method.color}-100 dark:bg-${method.color}-900 group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className={`w-6 h-6 text-${method.color}-600 dark:text-${method.color}-400`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {method.title}
                                                </h4>
                                                <p className="text-neutral-600 dark:text-neutral-300 font-medium mb-1">
                                                    {method.value}
                                                </p>
                                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                    {method.description}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Additional CTA */}
                            <motion.div 
                                variants={itemVariants}
                                className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white text-center"
                            >
                                <h4 className="text-xl font-bold mb-2">¿Necesitas una consulta rápida?</h4>
                                <p className="text-primary-100 mb-4">
                                    Para proyectos urgentes o consultas técnicas específicas
                                </p>
                                <motion.a
                                    href="https://www.linkedin.com/in/marcos-torres-24562771/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-neutral-50 transition-colors duration-300"
                                >
                                    <FaLinkedin className="w-4 h-4 mr-2" />
                                    Mensaje directo en LinkedIn
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;