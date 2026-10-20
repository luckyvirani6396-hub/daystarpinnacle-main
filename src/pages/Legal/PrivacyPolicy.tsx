import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import {
  SITE_NAME,
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  STREET_ADDRESS,
} from '../../constants';
import {
  sectionIntroBadge,
  sectionHeading,
  sectionHeadingAccent,
} from '../../components/home/sectionStyles';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 20, 2026';

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-4">
            At <strong className="text-[#004B57]">{COMPANY_NAME}</strong> (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we are deeply committed to protecting the privacy, confidentiality, and security of our corporate clients, their employees, and visitors to our website.
          </p>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or participate in our corporate wellness and health programs, workshops, and health consultations.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            We collect information strictly necessary to deliver high-quality, customized corporate wellness programs:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-4">
            <li>
              <strong className="text-[#004B57]">Corporate &amp; Contact Details:</strong> Name, work email address, company name, job title, phone number, and organization size provided when requesting a consultation or submitting an inquiry.
            </li>
            <li>
              <strong className="text-[#004B57]">Voluntary Health &amp; Wellness Data:</strong> Optional health assessments, dietary preferences, ergonomics surveys, and wellness check-in responses completed voluntarily by participating employees.
            </li>
            <li>
              <strong className="text-[#004B57]">Technical &amp; Usage Information:</strong> Browser type, operating system, IP address, and pages visited on our website to ensure smooth website operation and prevent fraudulent submissions.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'how-we-use-information',
      title: '3. How We Use Your Information',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            The data collected is utilized solely for legitimate business and wellness delivery purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            <li>Designing, customizing, and delivering onsite, virtual, and hybrid corporate wellness workshops.</li>
            <li>Responding to corporate consultation inquiries and scheduling program sessions.</li>
            <li>Providing aggregated, anonymized wellness participation metrics to corporate HR partners (individual medical responses are never disclosed to employers).</li>
            <li>Maintaining service quality, security, and compliance with applicable legal standards.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'employee-health-confidentiality',
      title: '4. Employee Health Data Confidentiality',
      content: (
        <>
          <div className="bg-[#FEF3E8] border-l-4 border-[#FF7A1A] rounded-r-2xl p-4 sm:p-5 mb-4">
            <p className="text-xs sm:text-sm text-[#004B57] font-semibold leading-relaxed">
              <strong>Strict Confidentiality Guarantee:</strong> Individual health data, quiz responses, and clinical nutrition consultations remain strictly confidential between the employee and our certified wellness professionals. We never sell, rent, or provide individual identifiable health data to employers.
            </p>
          </div>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            Employers receive only high-level, anonymized summary reports (e.g., overall participation percentages and aggregate wellness interest themes) to help evaluate program effectiveness.
          </p>
        </>
      ),
    },
    {
      id: 'data-security',
      title: '5. Data Security & Retention',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            We implement industry-standard administrative, physical, and technical security safeguards:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-4">
            <li>SSL/TLS 256-bit encryption for all data transmitted across our website and forms.</li>
            <li>Strict role-based access controls limiting data viewability exclusively to authorized personnel.</li>
            <li>Regular security reviews and prompt data minimization practices.</li>
          </ul>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>
        </>
      ),
    },
    {
      id: 'your-rights',
      title: '6. Your Privacy Rights',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or updating of any inaccurate information.</li>
            <li>Request deletion of your personal records from our active databases.</li>
            <li>Withdraw consent to receiving corporate wellness updates or marketing communications at any time.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'contact-us',
      title: '7. Contact Our Privacy Officer',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact our team:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2E8E4]">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center mb-2">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#5F6B6E] font-medium">Email Us</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors break-all">
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2E8E4]">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center mb-2">
                <Phone className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#5F6B6E] font-medium">Phone</p>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-sm font-bold text-[#004B57] hover:text-[#FF7A1A] transition-colors">
                {CONTACT_PHONE}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2E8E4]">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center mb-2">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#5F6B6E] font-medium">Office</p>
              <p className="text-xs font-bold text-[#004B57] leading-tight">
                {STREET_ADDRESS}
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen pt-8 sm:pt-10 pb-20">
      {/* Page Header */}
      <div className="w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={`${sectionIntroBadge} items-center gap-2 mb-4`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal &amp; Compliance
          </span>
          <h1 className={`${sectionHeading} mb-4`}>
            Privacy <span className={sectionHeadingAccent}>Policy</span>
          </h1>
          <p className="text-sm text-[#5F6B6E] font-medium">
            Last Updated: <span className="text-[#004B57] font-semibold">{lastUpdated}</span>
          </p>
        </motion.div>
      </div>

      {/* Main Content Card */}
      <div className="w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-[#E2E8E4] shadow-[0_4px_24px_rgba(0,75,87,0.06)]">
          <div className="space-y-10 sm:space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#004B57] mb-4 pb-2 border-b border-[#E2E8E4]">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
