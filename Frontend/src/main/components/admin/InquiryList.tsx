import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Inquiry } from '../types/Inquiry';

const InquiryList: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get('/api/inquiries');
        setInquiries(response.data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold```tsx
      mb-6 text-center">Inquiries</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td className="border p-2">{inquiry.name}</td>
              <td className="border p-2">{inquiry.email}</td>
              <td className="border p-2">{inquiry.subject}</td>
              <td className="border p-2">{inquiry.message}</td>
              <td className="border p-2">{inquiry.resolved ? 'Resolved' : 'Unresolved'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryList;

