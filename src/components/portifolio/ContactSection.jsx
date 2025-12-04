import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  Github, Linkedin, Twitter, ArrowUpRight,
  Loader2, CheckCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Lucas__jean@outlook.com', href: "mailto:Lucas__jean@outlook.com?subject=Contato%20sobre%20seu%20portf%C3%B3lio&body=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." },
  { icon: Phone, label: 'WhatsApp', value: '+55 (71) 98129-8548', href: 'https://wa.me/5571981298548' },
  { icon: MapPin, label: 'Localização', value: 'Salvador, Bahia', href: null },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/JeanLDev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/jean-lucas-86314225b/', label: 'LinkedIn' }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      "service_0u7l5se",
      "template_gqgjmt9",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "3yWhvD9qRML28K9nR"
    );

    toast.success("Mensagem enviada com sucesso!");

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);

  } catch (error) {
    console.error(error);
    toast.error("Falha ao enviar mensagem. Tente novamente.");
  }

  setIsSubmitting(false);
};

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-medium tracking-wide uppercase text-sm">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
            Entre em contato para discutir seu próximo projeto
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-100">
                    <item.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target='_blank'
                        className="font-medium text-zinc-900 hover:text-violet-600 transition-colors flex items-center gap-1"
                      >
                        {item.value}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <p className="font-medium text-zinc-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-zinc-100">
              <p className="text-sm text-zinc-500 mb-4">Me siga nas redes</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href} 
                    target='_blank'
                    className="p-3 rounded-xl bg-zinc-100 text-zinc-600 hover:bg-violet-100 hover:text-violet-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium text-zinc-900">Disponível para projetos</span>
              </div>
              <p className="text-sm text-zinc-600">
                Atualmente aceitando novos projetos. Tempo de resposta: até 24h.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Nome
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="h-12 rounded-xl border-zinc-200 focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="h-12 rounded-xl border-zinc-200 focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Assunto
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que você quer falar?"
                  className="h-12 rounded-xl border-zinc-200 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto ou ideia..."
                  className="min-h-[150px] rounded-xl border-zinc-200 focus:border-violet-500 focus:ring-violet-500 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || submitted}
                className="w-full h-14 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}