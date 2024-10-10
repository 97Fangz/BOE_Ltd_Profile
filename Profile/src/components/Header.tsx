import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaBars, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoHomeSharp, IoInformationCircle, IoLayersSharp, IoMailSharp, IoWalletSharp } from 'react-icons/io5';

const HeaderWrapper = styled.header`
  background: #007791;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 1rem;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const SocialIcon = styled.a`
  color: #ffd700; // Changed to gold
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ffea00; // Lighter gold on hover
    transform: translateY(-3px);
  }
`;

const NavContainer = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 0.5rem;
  margin-top: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover, &.active {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(255,255,255,0.3);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffd700; // Changed to gold
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: #007791;
  padding: 2rem 1rem;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: -5px 0 15px rgba(0,0,0,0.3);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  margin: 0.5rem 0;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover, &.active {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(255,255,255,0.2);
  }

  svg {
    margin-right: 1rem;
    font-size: 1.4rem;
    color: #ffd700; // Changed to gold
  }
`;

interface Route {
  path: string;
  name: string;
  icon: React.ReactElement;
}

const routes: Route[] = [
  { path: '/', name: 'Home', icon: <IoHomeSharp /> },
  { path: '/about', name: 'About', icon: <IoInformationCircle /> },
  { path: '/services', name: 'Services', icon: <IoLayersSharp /> },
  { path: '/contact', name: 'Contact', icon: <IoMailSharp /> },
  { path: '/pricing', name: 'Pricing', icon: <IoWalletSharp /> },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <TopBar>
          <LogoContainer>
            <Logo src="Boelogo.jpeg" alt="BOE Logo" />
            <Title>BOE Limited</Title>
          </LogoContainer>
          <SocialIcons>
            <SocialIcon href="https://www.instagram.com/boelimited" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://wa.me/+254715119636" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@boelimited" target="_blank" rel="noopener noreferrer"><FaTiktok /></SocialIcon>
            <SocialIcon href="https://www.google.com/maps/place/Mali" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /></SocialIcon>
            <SocialIcon href="mailto:boelimited275@gmail.com"><FaEnvelope /></SocialIcon>
            <SocialIcon href="tel:+254798877813"><FaPhone /></SocialIcon>
          </SocialIcons>
        </TopBar>
        <NavContainer>
          <NavList>
            {routes.map((route) => (
              <NavItem key={route.path}>
                <StyledNavLink to={route.path} end={route.path === '/'}>
                  {React.cloneElement(route.icon, { color: '#ffd700' })}
                  {route.name}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FaBars />
          </MobileMenuButton>
        </NavContainer>
        <MobileMenu isOpen={mobileMenuOpen}>
          {routes.map((route) => (
            <MobileNavLink key={route.path} to={route.path} onClick={() => setMobileMenuOpen(false)}>
              {React.cloneElement(route.icon, { color: '#ffd700' })}
              {route.name}
            </MobileNavLink>
          ))}
        </MobileMenu>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;