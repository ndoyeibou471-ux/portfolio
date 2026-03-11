import { motion } from "motion/react";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Développement",
      description: "Création d'applications web robustes avec React, TypeScript et Node.js"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Conception d'interfaces élégantes et centrées sur l'utilisateur"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation pour des expériences rapides et fluides"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">À propos de moi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Avec plus de 5 ans d'expérience dans le développement web, je combine expertise technique 
            et sens du design pour créer des solutions digitales qui font la différence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-linear-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
