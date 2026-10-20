import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import type { NewsletterFormData } from '../../types';
import { subscribeNewsletter } from '../../services/api';
import Button from '../common/Button';

interface NewsletterFormProps {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      await subscribeNewsletter(data.email);
    } catch {
      // Frontend-only fallback
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#FAF9F5] rounded-2xl border border-[#E2E8E4]/80 ${
        compact ? 'p-5' : 'p-6 md:p-8 lg:p-10'
      }`}
    >
      <div className="relative z-10">
      <h3 className={`font-serif font-bold text-[#004B57] mb-2 ${compact ? 'text-base' : 'text-lg md:text-xl'}`}>
        Stay Updated
      </h3>
      <p
        className={`text-[#5F6B6E] font-medium leading-relaxed ${
          compact ? 'text-sm mb-5' : 'text-sm md:text-base mb-6 max-w-2xl'
        }`}
      >
        Get weekly health tips and exclusive offers in your inbox.
      </p>

      {submitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#FF7A1A] font-bold text-sm"
        >
          Thank you for subscribing!
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full min-w-0" noValidate>
          <div className={`flex gap-3 ${compact ? 'flex-col' : 'flex-col sm:flex-row sm:items-stretch'}`}>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
              className={`w-full min-w-0 px-4 py-3 rounded-xl border bg-white text-[#1a2e32] placeholder:text-[#5F6B6E]/60 focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-colors ${
                compact ? '' : 'sm:flex-1'
              } ${errors.email ? 'border-red-400' : 'border-[#E2E8E4]'}`}
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              fullWidth={compact}
              className={compact ? '' : 'sm:px-10 shrink-0 bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold shadow-md shadow-[#FF7A1A]/20'}
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </Button>
          </div>
          {errors.email && (
            <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>
          )}
        </form>
      )}
      </div>
    </div>
  );
}
