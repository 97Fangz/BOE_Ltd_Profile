import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  transition: box-shadow 0.3s, transform 0.3s;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
  font-size: 2rem;
`;

const CardTitle = styled.h4`
  color: #b67d0d; /* Amber color */
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  color: #333333;
  margin-bottom: 1rem;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${({ color }) => color};
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
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
  buttonHoverColor: string;
  buttonHref: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, title, content, buttonText, buttonColor, buttonHoverColor, buttonHref 
}) => (
  <Card>
    <IconWrapper>
      <i className={icon} style={{ color: buttonColor }}></i>
    </IconWrapper>
    <CardTitle>{title}</CardTitle>
    {content.map((line, index) => (
      <CardText key={index}>{line}</CardText>
    ))}
    <ContactButton 
      href={buttonHref} 
      color={buttonColor}
      hoverColor={buttonHoverColor}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText} <i className="fa fa-arrow-right"></i>
    </ContactButton>
  </Card>
);

export default ContactCard;
