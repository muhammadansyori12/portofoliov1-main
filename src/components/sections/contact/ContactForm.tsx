'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import {
  Send,
  User,
  Mail,
  MessageSquare,
  ArrowUpRight,
  Check,
  AlertCircle,
} from 'lucide-react'

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
}

const socialLinks = [
  {
    title: 'Instagram',
    user: '@instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/mhd.ari18?igsh=MXh0MW5xeW85MGc1Nw%3D%3D&utm_source=qr',
  },
  {
    title: 'Youtube',
    user: '@youtube',
    icon: FaYoutube,
    link: 'https://youtube.com/',
  },
  {
    title: 'Github',
    user: '@github',
    icon: FaGithub,
    link: 'https://github.com/muhammadansyori12',
  },
  {
    title: 'TikTok',
    user: '@tiktok',
    icon: FaTiktok,
    link: 'https://www.tiktok.com/@itsme.ikky_?_r=1&_t=ZS-95yAYr5PHUb',
  },
]

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setLoading(true)

    try {
      // Buka aplikasi email pengguna secara langsung (fetch tidak bisa digunakan untuk mailto)
      window.location.href = `mailto:muhammadansyori1812@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`
      
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: smoothEase }}
      viewport={{ once: false, amount: 0.2 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 md:p-8 flex flex-col h-full"
    >
      {/* HEADER */}
      <motion.div
        variants={fieldVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ delay: 0.05 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Hubungi Saya
        </h2>

        <p className="text-sm text-white/50 mb-7">
          Feel free to reach out if you want to collaborate,
          discuss ideas, or simply say hello.
        </p>
      </motion.div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME */}
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/15 bg-black/20 pl-12 pr-4 py-4 outline-none transition duration-200 focus:border-white focus:ring-1 focus:ring-white/40"
            />
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.16 }}
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/15 bg-black/20 pl-12 pr-4 py-4 outline-none transition duration-200 focus:border-white focus:ring-1 focus:ring-white/40"
            />
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.22 }}
        >
          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 text-white/40" />

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full rounded-2xl border border-white/15 bg-black/20 pl-12 pr-4 py-4 outline-none resize-none transition duration-200 focus:border-white focus:ring-1 focus:ring-white/40"
            />
          </div>
        </motion.div>

        {/* STATUS MESSAGE */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400"
          >
            <Check size={16} />
            <span className="text-sm">Message sent! Check your email client.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400"
          >
            <AlertCircle size={16} />
            <span className="text-sm">Please fill all fields.</span>
          </motion.div>
        )}

        {/* BUTTON */}
        <motion.button
          type="submit"
          disabled={loading}
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.28 }}
          whileHover={{
            scale: 1.06,
            transition: { duration: 0.12 },
          }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-2xl py-4 bg-white/10 border border-white/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={16} />
          {loading ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      {/* SOCIAL */}
      <div className="border-t border-white/10 pt-5 mt-6">
        <motion.p
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.34 }}
          className="text-sm text-white/55 mb-4"
        >
          Connect With Me
        </motion.p>

        {/* EMAIL DIRECT */}
        <motion.a
          href="mailto:muhammadansyori1812@gmail.com"  
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.36 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.12 },
          }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 mb-3 flex items-center justify-between"
        >
          <div className="absolute inset-0 bg-white/[0.04] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />

          <div className="relative z-10 flex items-center gap-3">
            <Mail size={20} />

            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-white/35">muhammadansyori1812@gmail.com</p>
            </div>
          </div>

          <div className="relative z-10 opacity-0 group-hover:opacity-100 transition">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </motion.a>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialLinks.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fieldVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                transition={{
                  delay: 0.42 + i * 0.05,
                }}
                whileHover={{
                  scale: 1.06,
                  transition: { duration: 0.12 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3 flex items-center justify-between"
              >
                <div className="absolute inset-0 bg-white/[0.04] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />

                <div className="relative z-10 flex items-center gap-3">
                  <Icon />

                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-[11px] text-white/35">
                      {item.user}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}