import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Container from '../components/shared/container';
import Input from '../components/UI/Input';
import Breadcrumb from '../components/UI/Breadcrumb';

const PriceCheck = () => {
  const { t } = useLanguage();
  const [deviceInfo, setDeviceInfo] = useState({
    brand: '',
    model: '',
    condition: 'excellent',
    accessories: [] as string[]
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Refs for accessing input values
  const brandRef = useRef<{ focus: () => void; value?: string }>(null);
  const modelRef = useRef<{ focus: () => void; value?: string }>(null);

  const handleConditionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDeviceInfo({ ...deviceInfo, condition: e.target.value });
  };

  const handleAccessoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setDeviceInfo({ ...deviceInfo, accessories: [...deviceInfo.accessories, value] });
    } else {
      setDeviceInfo({ 
        ...deviceInfo, 
        accessories: deviceInfo.accessories.filter(accessory => accessory !== value) 
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would calculate the price based on the device info
    // For now, we'll just generate a random price for demonstration
    const brand = brandRef.current?.value || '';
    const model = modelRef.current?.value || '';
    
    if (brand && model) {
      // Simulate price calculation based on brand and model
      const basePrice = Math.floor(Math.random() * 5000000) + 1000000; // 1-6 million
      let conditionMultiplier = 1.0;
      
      switch (deviceInfo.condition) {
        case 'excellent':
          conditionMultiplier = 0.8;
          break;
        case 'good':
          conditionMultiplier = 0.6;
          break;
        case 'fair':
          conditionMultiplier = 0.4;
          break;
      }
      
      const accessoryValue = deviceInfo.accessories.length * 100000; // 100k per accessory
      const finalPrice = Math.floor(basePrice * conditionMultiplier + accessoryValue);
      
      setEstimatedPrice(finalPrice);
    }
  };

  return (
    <Container className="py-8">
      <Breadcrumb />
      <div className="max-w-2xl mx-auto bg-palette-card rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-palette-mute mb-6 text-center">
          {t.devicePriceCheck}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-palette-mute mb-1">
              {t.deviceBrand}
            </label>
            <Input
              id="brand"
              type="text"
              ref={brandRef}
              placeholder="enterDeviceBrand"
              required
            />
          </div>
          
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-palette-mute mb-1">
              {t.deviceModel}
            </label>
            <Input
              id="model"
              type="text"
              ref={modelRef}
              placeholder="enterDeviceModel"
              required
            />
          </div>
          
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-palette-mute mb-1">
              {t.deviceCondition}
            </label>
            <select
              id="condition"
              value={deviceInfo.condition}
              onChange={handleConditionChange}
              className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
            >
              <option value="excellent">{t.excellent}</option>
              <option value="good">{t.good}</option>
              <option value="fair">{t.fair}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-palette-mute mb-1">
              {t.includedAccessories}
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="charger"
                  value="charger"
                  onChange={handleAccessoryChange}
                  className="h-4 w-4 text-palette-primary border-gainsboro rounded"
                />
                <label htmlFor="charger" className="ml-2 text-palette-mute">
                  {t.charger}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="earphones"
                  value="earphones"
                  onChange={handleAccessoryChange}
                  className="h-4 w-4 text-palette-primary border-gainsboro rounded"
                />
                <label htmlFor="earphones" className="ml-2 text-palette-mute">
                  {t.earphones}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="case"
                  value="case"
                  onChange={handleAccessoryChange}
                  className="h-4 w-4 text-palette-primary border-gainsboro rounded"
                />
                <label htmlFor="case" className="ml-2 text-palette-mute">
                  {t.case}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="box"
                  value="box"
                  onChange={handleAccessoryChange}
                  className="h-4 w-4 text-palette-primary border-gainsboro rounded"
                />
                <label htmlFor="box" className="ml-2 text-palette-mute">
                  {t.originalBox}
                </label>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-palette-primary text-palette-side py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            {t.calculatePrice}
          </button>
        </form>
        
        {estimatedPrice !== null && (
          <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-200">
            <h2 className="text-lg font-semibold text-palette-mute mb-2">
              {t.estimatedPrice}
            </h2>
            <p className="text-palette-mute text-2xl font-bold">
              {estimatedPrice.toLocaleString()} {t.currency}
            </p>
            <p className="text-palette-mute mt-2 text-sm">
              * {t.priceEstimateNote}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PriceCheck;