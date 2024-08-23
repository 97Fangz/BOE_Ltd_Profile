import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
  file: Yup.mixed().nullable(),
});

const ContactForm: React.FC = () => {
  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null) formData.append(key, value);
      });

      await axios.post('/api/contact', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Message sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '', file: null }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
            <Field name="name" type="text" className="w-full px-3 py-2 border rounded" />
            {errors.name && touched.name ? <div className="text-red-500 text-sm">{errors.name}</div> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
            <Field name="email" type="email" className="w-full px-3 py-2 border rounded" />
            {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 font-bold text-gray-700">Subject</label>
            <Field name="subject" type="text" className="w-full px-3 py-2 border rounded" />
            {errors.subject && touched.subject ? <div className="text-red-500 text-sm">{errors.subject}</div> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message</label>
            <Field name="message" as="textarea" rows={4} className="w-full px-3 py-2 border rounded" />
            {errors.message && touched.message ? <div className="text-red-500 text-sm">{errors.message}</div> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block mb-2 font-bold text-gray-700">Attachment</label>
            <input
              name="file"
              type="file"
              onChange={(event) => setFieldValue('file', event.currentTarget.files?.[0] || null)}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.file ? <div className="text-red-500 text-sm">{errors.file}</div> : null}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

