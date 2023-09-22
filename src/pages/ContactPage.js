import React from 'react';

import './css/contactPage.css';

function ContactPage() {
  return (
    <div className='contact-page'>
      <h1 >Contact Us: <span>Your Gateway to Exceptional Service</span></h1>
      <div className='contact-page-image-container'>
        <img src='https://hips.hearstapps.com/hmg-prod/images/2016-jaguar-xjl-portfolio-1-1557860785.jpg?crop=1.00xw:0.924xh;0,0.0759xh&resize=1200:*' />
      </div>

      <div className='contact-page-info'>

        <p>At Prestige Autos, your satisfaction is our top priority. We understand that purchasing a vehicle is 
          a significant decision, and we're here to assist you every step of the way. Whether you have questions about our extensive range of premium automobiles or require assistance with financing options,
           our dedicated team is ready to provide you with the guidance and support you need.</p>
          <h3>Reach Out to Us:</h3>
        <p>Visit Our Showroom: <span>Our state-of-the-art showroom is conveniently located at Number 22 Road, Casa, where you can explore our curated selection of luxury cars and experience them firsthand.
           Our friendly and knowledgeable staff will be delighted to welcome you and answer any inquiries you may have.</span></p>
        <p>Phone: <span>You can always reach us by phone at 09232278793. Our experienced representatives are available during business hours to provide immediate assistance and information about our vehicles, pricing,
           and current promotions.</span></p>
        <p>Email: <span>If you prefer electronic communication, you can email us at example@gmail.com. Our team will promptly respond to your inquiries, 
          ensuring you receive the information you need in a clear and concise manner.</span></p>
          <p>Connect on Social Media: <span>Stay updated on the latest car arrivals, special offers, and company news by following us on social media platforms such as Facebook, LinkedIn, and Twitter.
             Our social media channels are also a great way to engage with us and get quick responses to your queries.</span></p>
          <p>At Prestige Autos, we value your time and interest in our luxury car offerings. Feel free to get in touch with us through any of the contact methods mentioned above, and we'll be delighted to assist you on your journey to finding the perfect vehicle that suits your lifestyle and preferences. Your dream car is just a call, email, or visit away.
             We look forward to serving you and exceeding your expectations.</p>
      </div>
    </div>
  )
} 

export default {component:  ContactPage}