import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Facebook, Instagram } from '../components/ui/icons';
import { Button } from '../components/ui/Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const cities = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fès',
    'Tangier',
    'Agadir',
    'Meknès',
    'Oujda',
    'Kenitra',
    'Tetouan',
    'Autre'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_5hqf866', 
        'template_5e9p2en',
        formData,
        '-Aw6aGIzBV3isK8Pm'
      )
      .then(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          subject: '',
          message: ''
        });
        setIsSending(false);
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      })
      .catch((e) => {
        console.log(e)
        setIsSending(false);
      });
  };

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] opacity-30 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full fill-sage-100">

            <path
              d="M41.2,-70.5C54.6,-63.6,67.5,-55.2,76.6,-44.1C85.7,-33,91,-19.2,89.9,-5.8C88.8,7.6,81.3,20.6,72.1,31.7C62.9,42.8,52,52,40.3,58.9C28.6,65.8,16.1,70.4,2.6,66C-10.9,61.6,-25.4,48.2,-38.3,37.2C-51.2,26.2,-62.5,17.6,-67.2,6.1C-71.9,-5.4,-70,-19.8,-62.4,-31.6C-54.8,-43.4,-41.5,-52.6,-28.6,-59.8C-15.7,-67,-3.2,-72.2,8.8,-70.5L20.8,-68.8"
              transform="translate(100 100)" />

          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6
              }}>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-6">
                Discutons ensemble
              </h1>
              <p className="text-xl text-charcoal-600 mb-12 leading-relaxed">
                Vous avez une question sur nos programmes ou souhaitez prendre
                rendez-vous ? N'hésitez pas à nous écrire, nous serons ravis
                d'échanger avec vous.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal-800 text-lg">
                      Email
                    </h3>
                    <a
                      href="mailto:info@punchway.org"
                      className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                      info@punchway.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal-800 text-lg">
                      Téléphone
                    </h3>
                    <div className="flex flex-col">
                      <a
                        href="tel:+212520136120"
                        className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                        +212 520-136120
                      </a>
                      <a
                        href="tel:+212776716156"
                        className="text-charcoal-600 hover:text-terracotta-600 transition-colors mt-2">

                        +212 776-716156
                      </a>
                      <a
                        href="tel:+212600049734"
                        className="text-charcoal-600 hover:text-terracotta-600 transition-colors mt-2">

                        +212 600-049734
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center text-charcoal-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal-800 text-lg">
                      Adresse
                    </h3>
                    <p className="text-charcoal-600">
                      Lot logimo 30 bd lqods
                      <br />
                      Ain chock Imm élite centre bureau Nº36. 3ème étage,
                      <br />
                      Casablanca, Maroc
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-charcoal-800 text-lg mb-4">
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/punch.way/"
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-all">

                    <Instagram className='size-6' />
                  </a>
                  <a
                    href="https://www.facebook.com/punchway1"
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-all">

                    <Facebook className='size-6' />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="bg-white rounded-4xl p-8 md:p-10 shadow-lg border border-cream-100">

              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-8">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-charcoal-700">

                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all"
                      placeholder="Achraf Hakimi"
                      required />

                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-charcoal-700">

                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all"
                      placeholder="achraf@exemple.com"
                      required />

                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-charcoal-700">

                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all"
                      placeholder="+212 600-123456" />

                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="text-sm font-bold text-charcoal-700">

                      Ville
                    </label>
                    <select
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all text-charcoal-600"
                      required>

                      <option value="">Sélectionnez une ville</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-charcoal-700">

                    Sujet
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all text-charcoal-600"
                    required>

                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="rdv">Prise de rendez-vous</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-charcoal-700">

                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                    required>
                  </textarea>
                </div>

                <Button type="submit" className={`w-full group transition-colors ${sent ? 'bg-green-600 text-white' : ''}`} size="lg" variant={sent ? 'nothing' : 'primary'} disabled={isSending}>
                  {!sent ? (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">Envoyer le message</span>
                      <motion.span
                        animate={isSending ? { rotate: 360 } : { rotate: 0 }}
                        transition={isSending ? { repeat: Infinity, duration: 0.8, ease: 'linear' } : { duration: 0 }}
                        className="ml-2">
                        <Send size={18} />
                      </motion.span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }} className="mr-2">
                        <Check size={18} />
                      </motion.span>
                      Envoyé
                    </span>
                  )}

                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}