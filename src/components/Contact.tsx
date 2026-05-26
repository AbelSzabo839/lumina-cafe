import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend here — keep it simple and user-friendly.
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus('sent');
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-earth-100/70">
              Contact
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl font-serif text-earth-50 leading-tight">
              Let’s talk.
            </h2>
            <p className="mt-4 text-earth-100/70 leading-relaxed">
              Questions about catering, events, or just want to say hi? Send us a message and we’ll get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-earth-700/90 mt-1" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    Address
                  </div>
                  <div className="mt-1 text-earth-50/90">8900 Zalaegerszeg, Rákóczi Ferenc u. 24.</div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start gap-4">
                <Phone className="w-5 h-5 text-earth-700/90 mt-1" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    Phone
                  </div>
                  <div className="mt-1 text-earth-50/90">+36 31 700 6505</div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start gap-4">
                <Mail className="w-5 h-5 text-earth-700/90 mt-1" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    Email
                  </div>
                  <div className="mt-1 text-earth-50/90">info@luminacafe.hu</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-earth-100/70">
                Message
              </div>

              {status === 'sent' ? (
                <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="text-earth-50 font-serif text-2xl">Thanks — we got it.</div>
                  <p className="mt-2 text-earth-100/70 leading-relaxed">
                    This demo form doesn’t send emails, but your message flow is wired up. You can connect a backend later.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-5 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-[11px] uppercase tracking-widest font-semibold"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-1">
                    <label className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl px-4 py-3 text-earth-50 outline-none focus:border-white/25"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                      Email
                    </label>
                    <input
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl px-4 py-3 text-earth-50 outline-none focus:border-white/25"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2 w-full min-h-[130px] rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl px-4 py-3 text-earth-50 outline-none focus:border-white/25"
                      placeholder="Tell us what you need…"
                    />
                  </div>

                  <div className="md:col-span-2 flex items-center justify-between gap-4">
                    <p className="text-earth-100/60 text-sm">
                      Tip: connect a backend later to actually send messages.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-[11px] uppercase tracking-widest font-semibold"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

