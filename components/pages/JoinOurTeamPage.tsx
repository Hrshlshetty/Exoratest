import React, { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { CAREERS_AREAS_OF_INTEREST } from '../../constants';
import { Helmet } from "react-helmet";

const JoinOurTeamPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    areaOfInterest: '',
    otherInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      ...(name === "areaOfInterest" && value !== "Other" && { otherInterest: '' })
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!formData.fullName || !formData.email || !formData.areaOfInterest) {
      setSubmitStatus({ type: 'error', message: "Please fill in all required fields (Full Name, Email, Area of Interest)." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: "Please enter a valid email address." });
      return;
    }
    if (formData.areaOfInterest === "Other" && !formData.otherInterest) {
      setSubmitStatus({ type: 'error', message: "Please specify your area of interest if 'Other' is selected." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', { // Your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          areaOfInterest: formData.areaOfInterest,
          otherInterest: formData.areaOfInterest === "Other" ? formData.otherInterest : undefined,
          formType: 'Career Inquiry', // Differentiate form types on backend
        }),
      });

      setIsSubmitting(false);
      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: responseData.message || "Thank you for your interest! We will be in touch."});
        setFormData({
          fullName: '',
          email: '',
          areaOfInterest: '',
          otherInterest: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: responseData.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred while sending your inquiry. Please try again later.'});
    }
  };

  const introText = "We are trying to build a community where it's a win-win situation for all. At Exora Traders, we're not just offering jobs; we're building careers. Whether you're interested in commodity trading, sales, marketing, administration, or any other field where you believe you can contribute, we invite you to join our growing team.";

  return (
    <>
      <Helmet>
        <title>Join Our Team | Exora Traders</title>
        <meta name="description" content="Join Exora Traders and become part of a passionate team dedicated to connecting India's finest coffee and spices with the world. Explore career opportunities!" />
        <link rel="canonical" href="https://www.exoratraders.com/join-our-team" />
        <meta property="og:title" content="Join Our Team | Exora Traders" />
        <meta property="og:description" content="Join Exora Traders and become part of a passionate team dedicated to connecting India's finest coffee and spices with the world. Explore career opportunities!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/join-our-team" />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
      </Helmet>
      <SectionWrapper
        title="Interested to work with us?"
        subtitle="Build Your Career with Exora Traders!"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-stone-700 leading-relaxed mb-10 text-center">
            {introText}
          </p>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-stone-200">
            <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
              Express Your Interest in Joining Our Community
            </h3>

            {submitStatus && (
               <div className={`mb-6 p-4 rounded-md text-center ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-stone-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-medium text-stone-700 mb-1">
                  Area of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  name="areaOfInterest"
                  id="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                >
                  <option value="" disabled>Select an area...</option>
                  {CAREERS_AREAS_OF_INTEREST.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {formData.areaOfInterest === "Other" && (
                <div>
                  <label htmlFor="otherInterest" className="block text-sm font-medium text-stone-700 mb-1">
                    Please specify other area of interest <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="otherInterest"
                    id="otherInterest"
                    value={formData.otherInterest}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                  />
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default JoinOurTeamPage;
