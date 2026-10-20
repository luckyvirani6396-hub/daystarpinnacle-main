import { motion } from 'framer-motion';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
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

export default function TermsOfService() {
  const lastUpdated = 'October 20, 2026';

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-4">
            Welcome to <strong className="text-[#004B57]">{COMPANY_NAME}</strong> (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website or engaging our corporate wellness consulting, workshops, health webinars, or onsite activities, your organization (&ldquo;Client&rdquo;) agrees to be bound by these Terms of Service.
          </p>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            If you do not agree with any part of these Terms, you must not access our website or engage our corporate wellness services.
          </p>
        </>
      ),
    },
    {
      id: 'services',
      title: '2. Corporate Wellness Services',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            {SITE_NAME} delivers structured corporate wellbeing and employee productivity programs, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-4">
            <li>Physical wellness sessions, desktop ergonomics, and workplace movement workshops.</li>
            <li>Corporate mental wellbeing, burnout prevention, and stress resilience seminars.</li>
            <li>Clinical nutrition consultations, corporate cafeteria audits, and healthy living masterclasses.</li>
            <li>Comprehensive annual and quarterly employee health engagement programs.</li>
          </ul>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            Detailed deliverables, timelines, schedule commitments, and pricing for each engagement are formalized through custom service proposals and statements of work (SOW).
          </p>
        </>
      ),
    },
    {
      id: 'medical-disclaimer',
      title: '3. Health & Wellness Disclaimer',
      content: (
        <>
          <div className="bg-[#FEF3E8] border-l-4 border-[#FF7A1A] rounded-r-2xl p-4 sm:p-5 mb-4">
            <p className="text-xs sm:text-sm text-[#004B57] font-semibold leading-relaxed">
              <strong>Educational &amp; Wellness Notice:</strong> All programs, recommendations, physical stretching routines, and nutritional guidelines provided by {SITE_NAME} are intended strictly for educational, preventive, and general wellness purposes. They do not constitute emergency medical care, diagnosis, or prescription treatments.
            </p>
          </div>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            Participating employees should consult their personal physician or certified healthcare provider before beginning any rigorous physical fitness or dietary program, especially if they have pre-existing medical conditions.
          </p>
        </>
      ),
    },
    {
      id: 'client-responsibilities',
      title: '4. Client Organization Responsibilities',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            To ensure the optimal delivery of corporate wellness workshops:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            <li>The Client agrees to provide suitable onsite space, audio/visual equipment, or digital conferencing links (for virtual programs).</li>
            <li>The Client coordinates internal communications to encourage healthy employee participation and attendance.</li>
            <li>The Client designates a primary HR coordinator or project point of contact for seamless scheduling and logistics.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'scheduling-cancellations',
      title: '5. Scheduling, Rescheduling &amp; Cancellations',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-3">
            We understand business priorities may shift. Session rescheduling requests should be submitted at least 48 business hours prior to the scheduled date to allow instructor reassignment.
          </p>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            Specific cancellation terms, deposit refunds, or retainer policies are detailed in your signed corporate proposal or agreement.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: '6. Intellectual Property',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            All wellness presentation decks, workshop materials, wellness assessment frameworks, handouts, brand assets, and digital resources provided by {SITE_NAME} remain the intellectual property of {COMPANY_NAME}. Clients are granted a non-exclusive, internal license for employee educational use and may not commercially resell or re-distribute these materials to third parties.
          </p>
        </>
      ),
    },
    {
      id: 'governing-law',
      title: '7. Governing Law & Jurisdiction',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed">
            These Terms of Service and any contractual agreements shall be governed by and construed in accordance with the laws of India. Any legal disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: '8. Inquiries & Legal Notices',
      content: (
        <>
          <p className="text-[#1A2E32]/85 text-sm sm:text-base leading-relaxed mb-6">
            For contractual queries, terms clarifications, or formal legal notices, please reach out to our corporate headquarters:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2E8E4]">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center mb-2">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#5F6B6E] font-medium">Email</p>
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
              <p className="text-xs text-[#5F6B6E] font-medium">Registered Office</p>
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
            <FileText className="w-3.5 h-3.5" />
            Terms of Service
          </span>
          <h1 className={`${sectionHeading} mb-4`}>
            Terms &amp; <span className={sectionHeadingAccent}>Conditions</span>
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
