import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionWrapper from '../shared/SectionWrapper';
import { CONTACT_EMAIL } from '../../constants';
import { Helmet } from "react-helmet";

const ContactUsPage: React.FC = () => {
  const location = useLocation();
  const inquiryProduct = location.state?.productName;
  const inquiryProductType = location.state?.productType;

  const initialSubject = inquiryProduct ? `Inquiry about ${inquiryProductType || 'Product'}: ${inquiryProduct}` : '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const newSubject = inquiryProduct ? `Inquiry about ${inquiryProductType || 'Product'}: ${inquiryProduct}` : '';
    setFormData(prevData => ({
      ...prevData,
      subject: newSubject
    }));
  }, [inquiryProduct, inquiryProductType, location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({ type: 'error', message: "Please fill in all fields." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: "Please enter a valid email address." });
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
          ...formData,
          formType: 'Contact Inquiry', // Differentiate form types on backend
          productInquiry: inquiryProduct ? `${inquiryProductType}: ${inquiryProduct}` : undefined
        }),
      });

      setIsSubmitting(false);
      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: responseData.message || "Thank you for your message! We'll get back to you soon." });
        setFormData({ 
            name: '', 
            email: '', 
            subject: initialSubject, 
            message: '' 
        });
      } else {
        setSubmitStatus({ type: 'error', message: responseData.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred while sending your message. Please try again later.' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Exora Traders</title>
        <meta name="description" content="Contact Exora Traders for inquiries about our premium Indian coffee and spices, partnerships, or support. We're here to help!" />
        <link rel="canonical" href="https://www.exoratraders.com/contact" />
        <meta property="og:title" content="Contact Us | Exora Traders" />
        <meta property="og:description" content="Contact Exora Traders for inquiries about our premium Indian coffee and spices, partnerships, or support. We're here to help!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/contact" />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
      </Helmet>
      <SectionWrapper title="Contact Us" subtitle="We're Here to Help and Answer Any Question You Might Have">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h3>
            
            {inquiryProduct && (
              <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                <p className="text-sm">
                  Inquiring about: <strong>{inquiryProductType || 'Product'} - {inquiryProduct}</strong>.
                  <br />Please provide more details in your message below.
                </p>
              </div>
            )}

            {submitStatus && (
              <div className={`mb-4 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting}
                       className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting}
                       className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required disabled={isSubmitting}
                       className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required disabled={isSubmitting}
                          className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:bg-slate-50"
                          placeholder={inquiryProduct ? `Please provide details for your inquiry about ${inquiryProduct}...` : `Your message...`}
                ></textarea>
              </div>
              <div>
                <button type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 disabled:bg-slate-400 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Direct Contact Information</h3>
                  <p className="text-stone-700 leading-relaxed mb-2">
                      For direct inquiries, specific orders, or partnership opportunities, please feel free to reach out to us.
                  </p>
                  <div className="mt-4 space-y-2">
                      <p className="flex items-center text-stone-700">
                          <EmailIcon className="w-5 h-5 mr-2 text-green-600 flex-shrink-0"/>
                          <strong>Email:</strong>&nbsp;
                          <a href={`mailto:${CONTACT_EMAIL}`} className="text-green-600 hover:underline break-all">{CONTACT_EMAIL}</a>
                      </p>
                      <div className="text-stone-700">
                          <div className="flex items-center">
                               <PhoneIcon className="w-5 h-5 mr-2 text-green-600 flex-shrink-0"/>
                               <strong>Phone:</strong>
                          </div>
                          <ul className="list-none pl-7 space-y-1 mt-1">
                              <li>
                                  <a href="tel:+61432764620" className="text-green-600 hover:underline">Australia: (+61) 432 764 620</a>
                              </li>
                              <li>
                                  <a href="tel:+4591743744" className="text-green-600 hover:underline">Denmark: (+45) 91743744</a>
                              </li>
                              <li>
                                  <a href="tel:+919686865444" className="text-green-600 hover:underline">India: (+91) 9686865444</a>
                              </li>
                              <li>
                                  <a href="tel:+919632317577" className="text-green-600 hover:underline">India: (+91) 9632317577</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

const EmailIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.378 5.378l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// LocationMarkerIcon is no longer used
// const LocationMarkerIcon: React.FC<{className?: string}> = ({className}) => (
//   <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

export default ContactUsPage;
