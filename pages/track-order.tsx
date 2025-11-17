import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Container from '../components/shared/container';
import Input from '../components/UI/Input';
import Breadcrumb from '../components/UI/Breadcrumb';

const TrackOrder = () => {
  const { t } = useLanguage();
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const orderNumberRef = useRef<{ focus: () => void; value?: string }>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a demo - in a real application, you would call an API
    // to get the order status based on the order number
    const orderNum = orderNumberRef.current?.value || '';
    if (orderNum) {
      setOrderNumber(orderNum);
      // Simulate different order statuses
      const statuses = [
        t.orderReceived,
        t.processing,
        t.shipped,
        t.outForDelivery,
        t.delivered
      ];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setOrderStatus(randomStatus);
    }
  };

  return (
    <Container className="py-8">
      <Breadcrumb />
      <div className="max-w-2xl mx-auto bg-palette-card rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-palette-mute mb-6 text-center">
          {t.trackOrder}
        </h1>
        <form onSubmit={handleTrackOrder} className="space-y-4">
          <div>
            <label htmlFor="orderNumber" className="block text-sm font-medium text-palette-mute mb-1">
              {t.orderNumber}
            </label>
            <Input
              id="orderNumber"
              type="text"
              ref={orderNumberRef}
              placeholder="enterOrderNumber"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-palette-primary text-palette-side py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            {t.track}
          </button>
        </form>
        
        {orderStatus && (
          <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
            <h2 className="text-lg font-semibold text-palette-mute mb-2">
              {t.orderStatus}
            </h2>
            <p className="text-palette-mute">
              {t.orderNumber}: {orderNumber}
            </p>
            <p className="text-palette-mute mt-2">
              {t.status}: <span className="font-medium">{orderStatus}</span>
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TrackOrder;