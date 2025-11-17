import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Container from '../components/shared/container';
import Input from '../components/UI/Input';
import Breadcrumb from '../components/UI/Breadcrumb';

const Repair = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    deviceType: 'mobile',
    deviceModel: '',
    issueType: 'software',
    issueDescription: '',
    address: '',
    expectedRepairTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for accessing input values
  const fullNameRef = useRef<{ focus: () => void; value?: string }>(null);
  const phoneRef = useRef<{ focus: () => void; value?: string }>(null);
  const emailRef = useRef<{ focus: () => void; value?: string }>(null);
  const deviceModelRef = useRef<{ focus: () => void; value?: string }>(null);
  const addressRef = useRef<{ focus: () => void; value?: string }>(null);
  const expectedRepairTimeRef = useRef<{ focus: () => void; value?: string }>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    // For now, we'll just show a success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Container className="py-8">
      <Breadcrumb />
      <div className="max-w-2xl mx-auto bg-palette-card rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-palette-mute mb-6 text-center">
          {t.repairRequest}
        </h1>
        
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong>{t.success}!</strong> {t.repairRequestSubmitted}
          </div>
        ) : null}
        
        <div className="mb-6 p-4 bg-blue-50 rounded-md border border-blue-200">
          <h2 className="text-lg font-semibold text-palette-mute mb-2">
            {t.contactInfo}
          </h2>
          <p className="text-palette-mute">
            {t.contactForIssues}: 09143452280 {t.engineerX}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-palette-mute mb-4">
              {t.fullName}
            </label>
            <Input
              id="fullName"
              type="text"
              ref={fullNameRef}
              placeholder="enterFullName"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-palette-mute mb-4">
              {t.phone}
            </label>
            <Input
              id="phone"
              type="tel"
              ref={phoneRef}
              placeholder="enterPhoneNumber"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-palette-mute mb-4">
              {t.email}
            </label>
            <Input
              id="email"
              type="email"
              ref={emailRef}
              placeholder="enterEmail"
              required
            />
          </div>
          
          <div>
            <label htmlFor="deviceType" className="block text-sm font-medium text-palette-mute mb-4">
              {t.deviceType}
            </label>
            <select
              id="deviceType"
              name="deviceType"
              value={formData.deviceType}
              onChange={handleInputChange}
              className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
            >
              <option value="mobile">{t.mobile}</option>
              <option value="laptop">{t.laptop}</option>
              <option value="tablet">{t.tablet}</option>
              <option value="other">{t.other}</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="deviceModel" className="block text-sm font-medium text-palette-mute mb-4">
              {t.deviceModel}
            </label>
            <Input
              id="deviceModel"
              type="text"
              ref={deviceModelRef}
              placeholder="enterDeviceModel"
              required
            />
          </div>
          
          <div>
            <label htmlFor="issueType" className="block text-sm font-medium text-palette-mute mb-4">
              {t.issueType}
            </label>
            <select
              id="issueType"
              name="issueType"
              value={formData.issueType}
              onChange={handleInputChange}
              className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
            >
              <option value="software">{t.softwareIssue}</option>
              <option value="hardware">{t.hardwareIssue}</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="issueDescription" className="block text-sm font-medium text-palette-mute mb-4">
              {t.issueDescription}
            </label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleTextAreaChange}
              placeholder={t.describeTheIssue}
              className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
              rows={4}
              required
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-palette-mute mb-4">
              {t.address}
            </label>
            <Input
              id="address"
              type="text"
              ref={addressRef}
              placeholder="enterAddress"
              required
            />
          </div>
          
          <div>
            <label htmlFor="expectedRepairTime" className="block text-sm font-medium text-palette-mute mb-4">
              {t.expectedRepairTime}
            </label>
            <Input
              id="expectedRepairTime"
              type="text"
              ref={expectedRepairTimeRef}
              placeholder="enterExpectedRepairTime"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-palette-primary text-palette-side py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            {t.submitRepairRequest}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Repair;