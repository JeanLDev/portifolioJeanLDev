import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'Incrível trabalho! O sistema de automações que ele criou para nossa empresa economiza mais de 20 horas por semana. Profissionalismo e qualidade excepcionais.',
    rating: 5,
  },
  {
    name: 'Ana Paula Silva',
    role: 'Fundadora, E-Shop Brasil',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'Nosso e-commerce ficou simplesmente perfeito. As vendas aumentaram 40% depois do redesign. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    name: 'Roberto Lima',
    role: 'Diretor, Agência Digital',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Já trabalhamos juntos em mais de 10 projetos. Sempre entrega antes do prazo e com qualidade acima do esperado. Parceiro de confiança.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'Product Manager, FinTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'O dashboard que ele desenvolveu transformou nossa forma de analisar dados. Interface intuitiva e performance impecável.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-medium tracking-wide uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3">
            O Que Dizem Sobre Mim
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
            Feedback de clientes que confiaram no meu trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-zinc-100 hover:border-violet-200 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-violet-100 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-zinc-900">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}