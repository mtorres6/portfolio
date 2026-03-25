import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('theme') || 'system';
	});
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const root = document.documentElement;
		
		if (theme === 'system') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			root.classList.toggle('dark', mediaQuery.matches);
			
			const handleChange = () => root.classList.toggle('dark', mediaQuery.matches);
			mediaQuery.addEventListener('change', handleChange);
			return () => mediaQuery.removeEventListener('change', handleChange);
		} else {
			root.classList.toggle('dark', theme === 'dark');
		}
		
		localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'projects', 'contact'];
			const scrollPosition = window.scrollY + 100;
			
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const themeIcons = {
		light: HiSun,
		dark: HiMoon,
		system: HiDesktopComputer
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-all duration-500">
			<motion.header 
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
				className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-700"
			>
				<div className="container mx-auto px-6 h-20 flex justify-between items-center">
					<motion.div 
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
					>
						Marcos Torres
					</motion.div>
					
					<nav className="hidden md:flex space-x-8">
						{['home', 'about', 'projects', 'contact'].map((section, index) => (
							<motion.a
								key={section}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
								href={`#${section}`}
								className={`relative px-4 py-2 font-medium capitalize transition-all duration-300 ${
									activeSection === section 
										? 'text-primary-600 dark:text-primary-400 scale-105' 
										: 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105'
								}`}
							>
								{section}
								{activeSection === section && (
									<motion.div
										layoutId="activeSection"
										className="absolute -bottom-1 left-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform -translate-x-1/2"
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									/>
								)}
							</motion.a>
						))}
					</nav>
					
					<motion.div 
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className="flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg"
					>
						{['light', 'dark', 'system'].map((themeOption) => {
							const IconComponent = themeIcons[themeOption];
							return (
								<button
									key={themeOption}
									onClick={() => setTheme(themeOption)}
									className={`p-2 rounded-md transition-all duration-200 ${
										theme === themeOption 
											? 'bg-white dark:bg-neutral-700 text-primary-600 shadow-md' 
											: 'text-neutral-600 dark:text-neutral-400 hover:text-primary-500'
									}`}
									title={`${themeOption.charAt(0).toUpperCase() + themeOption.slice(1)} theme`}
								>
									<IconComponent className="w-4 h-4" />
								</button>
							);
						})}
					</motion.div>
				</div>
			</motion.header>
			
			<main className="pt-20">
				<motion.section 
					id="home"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					<Home />
				</motion.section>
				
				<motion.section 
					id="about"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					<About />	
				</motion.section>
				
				<motion.section 
					id="projects"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					<Projects />
				</motion.section>
				
				<motion.section 
					id="contact"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					<Contact />
				</motion.section>
			</main>
		</div>
	);
}

export default App;
