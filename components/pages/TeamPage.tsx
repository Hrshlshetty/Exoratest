import React, { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import TeamMemberCard from '../team/TeamMemberCard';
import TeamMemberModal from '../team/TeamMemberModal';
import { TEAM_MEMBERS_DATA, CAREERS_AREAS_OF_INTEREST } from '../../constants';
import { TeamMember } from '../../types';
import { Helmet } from "react-helmet";

const TeamPage: React.FC = () => {
  // State for Team Member Modal
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleSelectMember = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const newIntroductoryText = "Our global team is our greatest asset. With over 15+ years of cumulative experience in the international supply chain, we bridge the gap between dedicated producers and discerning clients. Our leadership team's deep-rooted history in coffee, from farming to serving on the coffee board, guides our mission with unmatched expertise.";

  // State and handlers for "Join Our Team" form
  const [careersFormData, setCareersFormData] = useState({
    fullName: '',
    email: '',
    areaOfInterest: '',
    otherInterest: '',
  });
  const [isCareersSubmitting, setIsCareersSubmitting] = useState(false);
  const [careersSubmitStatus, setCareersSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleCareersFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCareersFormData(prevData => ({
      ...prevData,
      [name]: value,
      ...(name === "areaOfInterest" && value !== "Other" && { otherInterest: '' })
    }));
  };

  const handleCareersFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCareersSubmitStatus(null);

    if (!careersFormData.fullName || !careersFormData.email || !careersFormData.areaOfInterest) {
      setCareersSubmitStatus({ type: 'error', message: "Please fill in all required fields (Full Name, Email, Area of Interest)." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(careersFormData.email)) {
      setCareersSubmitStatus({ type: 'error', message: "Please enter a valid email address." });
      return;
    }
    if (careersFormData.areaOfInterest === "Other" && !careersFormData.otherInterest) {
      setCareersSubmitStatus({ type: 'error', message: "Please specify your area of interest if 'Other' is selected." });
      return;
    }

    setIsCareersSubmitting(true);

    try {
      const response = await fetch('/api/send-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: careersFormData.fullName,
          email: careersFormData.email,
          areaOfInterest: careersFormData.areaOfInterest,
          otherInterest: careersFormData.areaOfInterest === "Other" ? careersFormData.otherInterest : undefined,
          formType: 'Career Inquiry',
        }),
      });

      setIsCareersSubmitting(false);
      const responseData = await response.json();

      if (response.ok) {
        setCareersSubmitStatus({ type: 'success', message: responseData.message || "Thank you for your interest! We will be in touch."});
        setCareersFormData({
          fullName: '',
          email: '',
          areaOfInterest: '',
          otherInterest: '',
        });
      } else {
        setCareersSubmitStatus({ type: 'error', message: responseData.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setIsCareersSubmitting(false);
      console.error('Submission error:', error);
      setCareersSubmitStatus({ type: 'error', message: 'An error occurred while sending your inquiry. Please try again later.'});
    }
  };

  const careersIntroText = "We are trying to build a community where it's a win-win situation for all. At Exora Traders, we're not just offering jobs; we're building careers. Whether you're interested in commodity trading, sales, marketing, administration, or any other field where you believe you can contribute, we invite you to join our growing team.";

  // State and handlers for "General Inquiry" form
  const [generalInquiryFormData, setGeneralInquiryFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isGeneralInquirySubmitting, setIsGeneralInquirySubmitting] = useState(false);
  const [generalInquirySubmitStatus, setGeneralInquirySubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleGeneralInquiryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralInquiryFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGeneralInquiryFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralInquirySubmitStatus(null);

    if (!generalInquiryFormData.fullName || !generalInquiryFormData.email || !generalInquiryFormData.subject || !generalInquiryFormData.message) {
      setGeneralInquirySubmitStatus({ type: 'error', message: "Please fill in all required fields." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(generalInquiryFormData.email)) {
      setGeneralInquirySubmitStatus({ type: 'error', message: "Please enter a valid email address." });
      return;
    }

    setIsGeneralInquirySubmitting(true);

    try {
      // NOTE: This fetch call assumes a backend endpoint at /api/send-general-inquiry.
      // You will need to create this backend endpoint.
      const response = await fetch('/api/send-general-inquiry', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...generalInquiryFormData,
          formType: 'General Team Inquiry',
        }),
      });

      setIsGeneralInquirySubmitting(false);
      const responseData = await response.json();

      if (response.ok) {
        setGeneralInquirySubmitStatus({ type: 'success', message: responseData.message || "Thank you for your message! We will get back to you soon."});
        setGeneralInquiryFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setGeneralInquirySubmitStatus({ type: 'error', message: responseData.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setIsGeneralInquirySubmitting(false);
      console.error('General inquiry submission error:', error);
      setGeneralInquirySubmitStatus({ type: 'error', message: 'An error occurred while sending your message. Please try again later.'});
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Team | Exora Traders</title>
        <meta name="description" content="Meet the dedicated team behind Exora Traders, connecting Indian farmers to the world with expertise in coffee and spice export." />
        <link rel="canonical" href="https://www.exoratraders.com/team" />
        <meta property="og:title" content="Our Team | Exora Traders" />
        <meta property="og:description" content="Meet the dedicated team behind Exora Traders, connecting Indian farmers to the world with expertise in coffee and spice export." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/team" />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
      </Helmet>
      <SectionWrapper 
        title="Meet Our Team" 
        subtitle="The Driving Force Behind Exora Traders' Success"
      >
        <div className="mb-10 text-center">
          <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
            {newIntroductoryText}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS_DATA.map((member: TeamMember) => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              onSelect={handleSelectMember} 
            />
          ))}
        </div>
        
        {/* "Interested in Joining Our Community?" button removed from here */}
      </SectionWrapper>

      <TeamMemberModal member={selectedMember} onClose={handleCloseModal} />

      {/* Integrated "Join Our Team" Section */}
      <SectionWrapper
        title="Interested to work with us?"
        subtitle="Build Your Career with Exora Traders!"
        className="bg-slate-100"
        titleClassName="pt-8"
      >
        <div id="join-our-team-section" className="max-w-3xl mx-auto scroll-mt-20">
          <p className="text-lg text-stone-700 leading-relaxed mb-10 text-center">
            {careersIntroText}
          </p>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-stone-200">
            <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
              Express Your Interest in Joining Our Community
            </h3>

            {careersSubmitStatus && (
              <div className={`mb-6 p-4 rounded-md text-center ${careersSubmitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {careersSubmitStatus.message}
              </div>
            )}

            <form onSubmit={handleCareersFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="careersFullName" className="block text-sm font-medium text-stone-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="careersFullName"
                  value={careersFormData.fullName}
                  onChange={handleCareersFormChange}
                  required
                  disabled={isCareersSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Full Name for career inquiry"
                />
              </div>

              <div>
                <label htmlFor="careersEmail" className="block text-sm font-medium text-stone-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="careersEmail"
                  value={careersFormData.email}
                  onChange={handleCareersFormChange}
                  required
                  disabled={isCareersSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Email Address for career inquiry"
                />
              </div>

              <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-medium text-stone-700 mb-1">
                  Area of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  name="areaOfInterest"
                  id="areaOfInterest"
                  value={careersFormData.areaOfInterest}
                  onChange={handleCareersFormChange}
                  required
                  disabled={isCareersSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Area of Interest"
                >
                  <option value="" disabled>Select an area...</option>
                  {CAREERS_AREAS_OF_INTEREST.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {careersFormData.areaOfInterest === "Other" && (
                <div>
                  <label htmlFor="otherInterest" className="block text-sm font-medium text-stone-700 mb-1">
                    Please specify other area of interest <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="otherInterest"
                    id="otherInterest"
                    value={careersFormData.otherInterest}
                    onChange={handleCareersFormChange}
                    required
                    disabled={isCareersSubmitting}
                    className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                    aria-label="Other area of interest"
                  />
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isCareersSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isCareersSubmitting ? 'Sending...' : 'Send Career Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* New General Inquiry Section */}
      <SectionWrapper
        title="Send Us a General Message"
        subtitle="Have a question or comment? We'd love to hear from you."
        className="bg-white" // Or bg-slate-50 for consistency if preferred
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-stone-200">
            {generalInquirySubmitStatus && (
              <div className={`mb-6 p-4 rounded-md text-center ${generalInquirySubmitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {generalInquirySubmitStatus.message}
              </div>
            )}

            <form onSubmit={handleGeneralInquiryFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="generalFullName" className="block text-sm font-medium text-stone-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="generalFullName"
                  value={generalInquiryFormData.fullName}
                  onChange={handleGeneralInquiryFormChange}
                  required
                  disabled={isGeneralInquirySubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Full Name for general inquiry"
                />
              </div>

              <div>
                <label htmlFor="generalEmail" className="block text-sm font-medium text-stone-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="generalEmail"
                  value={generalInquiryFormData.email}
                  onChange={handleGeneralInquiryFormChange}
                  required
                  disabled={isGeneralInquirySubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Email Address for general inquiry"
                />
              </div>

              <div>
                <label htmlFor="generalSubject" className="block text-sm font-medium text-stone-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="generalSubject"
                  value={generalInquiryFormData.subject}
                  onChange={handleGeneralInquiryFormChange}
                  required
                  disabled={isGeneralInquirySubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Subject for general inquiry"
                />
              </div>

              <div>
                <label htmlFor="generalMessage" className="block text-sm font-medium text-stone-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="generalMessage"
                  rows={4}
                  value={generalInquiryFormData.message}
                  onChange={handleGeneralInquiryFormChange}
                  required
                  disabled={isGeneralInquirySubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  aria-label="Message for general inquiry"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isGeneralInquirySubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isGeneralInquirySubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default TeamPage;