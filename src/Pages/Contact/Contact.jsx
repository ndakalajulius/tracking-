import React from 'react';
import styled from 'styled-components';

// Define styled components for your Contact Us page
const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ContactHeading = styled.h1`
  font-size: 24px;
  color: #333;
`;

const ContactInfo = styled.div`
  font-size: 18px;
  color: #666;
  margin-top: 10px;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #007BFF;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading>Contact Us</ContactHeading>
      <ContactInfo>
        If you have any questions or need assistance, please feel free to
        <ContactLink> contact us</ContactLink>.
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
