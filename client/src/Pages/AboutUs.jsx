import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Preloader />
    <div className="bg-blue-50 py-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-100 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">About Us</h2>
            <p className="text-lg text-gray-800 leading-relaxed  font-semibold">
              Online Book Sales is an e-commerce platform dedicated to providing book lovers with a
              convenient way to browse and purchase a wide variety of books online. Our goal is to
              offer an extensive catalog of books across various genres, including Fiction,
              Non-fiction, Science Fiction, Romance, Mystery & Thriller, Biographies, Self-help,
              Children's Books, and Academic & Educational Books.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-4 font-semibold">
              At Online Book Sales, we prioritize customer satisfaction and aim to provide a seamless shopping experience. From browsing our curated catalog to securely checking out and tracking your order, we ensure that your journey with us is enjoyable and hassle-free.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-4 font-semibold">
              Our team is dedicated to maintaining high standards of service and reliability. Should you have any questions or need assistance, our customer support team is readily available to help. Visit our FAQ page for answers to common queries or reach out to us directly through our Contact Us page.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-4 font-semibold">
              Thank you for choosing Online Book Sales. Happy reading!
            </p>
            <h3 className="text-xl text-center font-bold text-gray-900 mt-8">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Our mission is to make reading accessible and enjoyable for everyone by offering a
              seamless online shopping experience for books of all kinds. We aim to connect readers
              with their favorite authors and discover new books that inspire and entertain.
            </p>
            <h3 className="text-xl text-center font-bold text-gray-900 mt-8">Contact Us</h3>
            <p className="text-gray-700 leading-relaxed font-semibold">
              For any inquiries, suggestions, or support, please visit our{' '}
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact Us
              </a>{' '}
              page. Our dedicated support team is available to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

