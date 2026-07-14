import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import type { ContactFormData } from '../../types';
import { submitContactForm } from '../../services/api';
import Button from '../common/Button';

interface ContactFormProps {
  idPrefix?: string;
  compact?: boolean;
  onSuccess?: () => void;
  autoCloseAfterMs?: number;
}

export default function ContactForm({
  idPrefix = '',
  compact = false,
  onSuccess,
  autoCloseAfterMs,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);
  const gridClass = compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  useEffect(() => {
    if (!submitted || !autoCloseAfterMs || !onSuccess) return;

    const timer = window.setTimeout(() => {
      setSubmitted(false);
      onSuccess();
    }, autoCloseAfterMs);

    return () => window.clearTimeout(timer);
  }, [submitted, autoCloseAfterMs, onSuccess]);

  const onSubmit = async (data: ContactFormData) => {
    setError('');
    try {
      await submitContactForm(data as unknown as Record<string, string>);
      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(true);
      reset();
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 px-4 bg-[#FEF3E8] rounded-2xl border border-[#FF7A1A]/20"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FF7A1A]/15 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#FF7A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#004B57] mb-2">Inquiry Submitted!</h3>
        <p className="text-sm text-[#5F6B6E] font-medium">
          {autoCloseAfterMs
            ? 'Thank you — we\'ll be in touch within 24 hours.'
            : 'Thank you for reaching out. We\'ll get back to you within 24 hours.'}
        </p>
        {!autoCloseAfterMs && (
          <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-6">
            Send Another Message
          </Button>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={compact ? 'space-y-4' : 'space-y-5'} noValidate>
      <div className={`grid ${gridClass} gap-4`}>
        <div>
          <label htmlFor={fieldId('name')} className="block text-sm font-medium text-dark mb-1.5">Full Name *</label>
          <input
            id={fieldId('name')}
            type="text"
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-400' : 'border-border'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor={fieldId('email')} className="block text-sm font-medium text-dark mb-1.5">Work Email *</label>
          <input
            id={fieldId('email')}
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-400' : 'border-border'}`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className={`grid ${gridClass} gap-4`}>
        <div>
          <label htmlFor={fieldId('phone')} className="block text-sm font-medium text-dark mb-1.5">Phone Number *</label>
          <input
            id={fieldId('phone')}
            type="tel"
            {...register('phone', { required: 'Phone is required', minLength: { value: 10, message: 'Invalid phone number' } })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-400' : 'border-border'}`}
            placeholder="99XXXXXXXX"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor={fieldId('companyName')} className="block text-sm font-medium text-dark mb-1.5">Company Name *</label>
          <input
            id={fieldId('companyName')}
            type="text"
            {...register('companyName', { required: 'Company name is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.companyName ? 'border-red-400' : 'border-border'}`}
            placeholder="Daystar Solutions Ltd."
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className={`grid ${gridClass} gap-4`}>
        <div>
          <label htmlFor={fieldId('jobTitle')} className="block text-sm font-medium text-dark mb-1.5">Job Title *</label>
          <input
            id={fieldId('jobTitle')}
            type="text"
            {...register('jobTitle', { required: 'Job title is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.jobTitle ? 'border-red-400' : 'border-border'}`}
            placeholder="HR Director / People Lead"
          />
          {errors.jobTitle && <p className="mt-1 text-sm text-red-500">{errors.jobTitle.message}</p>}
        </div>
        <div>
          <label htmlFor={fieldId('industryType')} className="block text-sm font-medium text-dark mb-1.5">Industry Type *</label>
          <select
            id={fieldId('industryType')}
            {...register('industryType', { required: 'Please select industry type' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.industryType ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select industry</option>
            <option value="it">Information Technology</option>
            <option value="finance">Finance &amp; Banking</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail</option>
            <option value="hospitality">Hospitality</option>
            <option value="services">Professional Services</option>
            <option value="other">Other Sector</option>
          </select>
          {errors.industryType && <p className="mt-1 text-sm text-red-500">{errors.industryType.message}</p>}
        </div>
      </div>

      <div className={`grid ${gridClass} gap-4`}>
        <div>
          <label htmlFor={fieldId('employeeCount')} className="block text-sm font-medium text-dark mb-1.5">Employee Headcount *</label>
          <select
            id={fieldId('employeeCount')}
            {...register('employeeCount', { required: 'Please select employee headcount' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.employeeCount ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select headcount size</option>
            <option value="20-50">20 – 50 Employees</option>
            <option value="50-250">50 – 250 Employees</option>
            <option value="250-plus">250+ Employees</option>
            <option value="custom">Bespoke Suite (Enterprise)</option>
          </select>
          {errors.employeeCount && <p className="mt-1 text-sm text-red-500">{errors.employeeCount.message}</p>}
        </div>
        <div>
          <label htmlFor={fieldId('wellnessProgram')} className="block text-sm font-medium text-dark mb-1.5">Type of Wellness Program *</label>
          <select
            id={fieldId('wellnessProgram')}
            {...register('wellnessProgram', { required: 'Please select program type' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.wellnessProgram ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select interest area</option>
            <option value="kickstart">Kickstart Package</option>
            <option value="growth">Growth Package</option>
            <option value="total">Total Transformation Package</option>
            <option value="custom">Custom Enterprise Solutions</option>
            <option value="physical">Physical Wellness Programs</option>
            <option value="mental">Mental Wellbeing Workshops</option>
            <option value="nutrition">Nutrition &amp; Healthy Living</option>
          </select>
          {errors.wellnessProgram && <p className="mt-1 text-sm text-red-500">{errors.wellnessProgram.message}</p>}
        </div>
      </div>

      <div className={`grid ${gridClass} gap-4`}>
        <div>
          <label htmlFor={fieldId('deliveryMode')} className="block text-sm font-medium text-dark mb-1.5">Preferred Delivery Mode *</label>
          <select
            id={fieldId('deliveryMode')}
            {...register('deliveryMode', { required: 'Please select preferred delivery mode' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.deliveryMode ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select mode</option>
            <option value="in-person">In-Person</option>
            <option value="virtual">Virtual</option>
            <option value="hybrid">Hybrid</option>
          </select>
          {errors.deliveryMode && <p className="mt-1 text-sm text-red-500">{errors.deliveryMode.message}</p>}
        </div>
        <div>
          <label htmlFor={fieldId('startDate')} className="block text-sm font-medium text-dark mb-1.5">Preferred Start Date *</label>
          <input
            id={fieldId('startDate')}
            type="date"
            {...register('startDate', { required: 'Preferred start date is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.startDate ? 'border-red-400' : 'border-border'}`}
          />
          {errors.startDate && <p className="mt-1 text-sm text-red-500">{errors.startDate.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('message')} className="block text-sm font-medium text-dark mb-1.5">Message / Requirements *</label>
        <textarea
          id={fieldId('message')}
          rows={compact ? 4 : 5}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
          className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? 'border-red-400' : 'border-border'}`}
          placeholder="Tell us about your team's wellness goals, specific budget constraints, or other key requirements..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        fullWidth
        className="font-bold rounded-xl"
      >
        {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}
