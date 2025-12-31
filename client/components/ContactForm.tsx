import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageSquare, User } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using Formspree for email (free tier - example email)
      const response = await fetch('https://formspree.io/f/xyzabcde', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage(t('contactForm.success'));
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('contactForm.error'));

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-semibold mb-2">{t('contactForm.name')}</label>
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t('contactForm.name')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-semibold mb-2">{t('contactForm.email')}</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm font-semibold mb-2">{t('contactForm.message')}</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t('contactForm.message')}
            rows={5}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
      </div>

      {/* Status Messages */}
      {message && (
        <div
          className={`p-4 rounded-lg font-medium ${status === 'success'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}
        >
          {message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? t('contactForm.loading') : t('contactForm.send')}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        {status === 'success' ? t('contactForm.success') : ''}
      </p>
    </form>
  );
}
