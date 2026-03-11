import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Bonjour, je suis <span className="text-indigo-600">Ibou Ndoye</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Développeur Full Stack & Designer UI/UX
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mb-12">
              Passionné par la création d'expériences web modernes et intuitives. 
              Je transforme vos idées en solutions digitales performantes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="#projets"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Me contacter
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#apropos"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-indigo-600" />
      </motion.a>
    </section>
  );
}
export default Hero;