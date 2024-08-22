import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin: 0 auto 1rem auto;

  i {
    font-size: 2rem;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverColor};
    transform: scale(1.05);
  }

  i {
    margin-left: 0.5rem;
  }
`;

interface ContactCardProps {
  icon: string;
  title: string;
  content: string[];
  buttonText: string;
  buttonColor: string;
  buttonHref: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, title, content, buttonText, buttonColor, buttonHref 
}) => {
  return (
    <Card>
      <IconWrapper>
        <i className={icon} style={{ color: buttonColor }}></i>
      </IconWrapper>
      <h4 className="mb-3 text-gray-800 font-semibold">{title}</h4>
      {content.map((line, index) => (
        <p key={index} className="mb-2 text-gray-700">{line}</p>
      ))}
      <ContactButton 
        href={buttonHref} 
        style={{ backgroundColor: buttonColor }}
      >
        {buttonText} <i className="fa fa-arrow-right"></i>
      </ContactButton>
    </Card>
  );
};

export default ContactCard;
