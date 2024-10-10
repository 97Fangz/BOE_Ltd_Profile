import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoHomeSharp, IoInformationCircle, IoLayersSharp, IoMailSharp, IoWalletSharp } from 'react-icons/io5';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #00308F, #004CBF);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFA500;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #FFA500;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

const NavContainer = styled.nav`
  background: #007791; /* Updated background color */
  border-radius: 10px;
  padding: 0.5rem;
  position: relative;
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
  color: #FFFFFF;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover, &.active {
    background-color: rgba(255, 165, 0, 0.2);
    border-radius: 5px;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #FFA500;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: rgba(0, 48, 143, 0.95);
  z-index: 1000;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 4rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #FFA500;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileDashboard = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: none;
  flex-direction: column;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-20px)'};

  @media (max-width: 768px) {
    display: flex;
  }
`;

const DashboardItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #00308F;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem;
  margin: 0.2rem;
  transition: all 0.3s ease;
  border-radius: 10px;

  &.active {
    color: #FFFFFF;
    background-color: #FFA500;
  }

  &:hover {
    background-color: #FFD700;
    color: #00308F;
  }

  svg {
    font-size: 1.2rem;
    margin-right: 0.5rem;
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
  const [dashboardVisible, setDashboardVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setDashboardVisible(false);
    const timer = setTimeout(() => setDashboardVisible(true), 300);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setDashboardVisible(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper>
      <TopBar>
        <LogoContainer>
          <Logo src="Boelogo.jpeg" alt="BOE Logo" />
          <Title>BOE Limited</Title>
        </LogoContainer>
        <SocialIcons>
          <SocialIcon href="https://www.instagram.com/boelimited" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
          <SocialIcon href="https://wa.me/254798877813" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></SocialIcon>
          <SocialIcon href="https://www.tiktok.com/@boelimited" target="_blank" rel="noopener noreferrer"><FaTiktok /></SocialIcon>
          <SocialIcon href="https://www.google.com/maps/place/Mali+and+Kenya" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /></SocialIcon>
          <SocialIcon href="mailto:boelimited275@gmail.com"><FaEnvelope /></SocialIcon>
          <SocialIcon href="tel:+254798877813"><FaPhone /></SocialIcon>
        </SocialIcons>
      </TopBar>
      <NavContainer>
        <NavList>
          {routes.map((route) => (
            <NavItem key={route.path}>
              <StyledNavLink to={route.path} end={route.path === '/'}>
                {route.icon}
                {route.name}
              </StyledNavLink>
            </NavItem>
          ))}
        </NavList>
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseButton onClick={() => setMobileMenuOpen(false)}>
          <FaTimes />
        </CloseButton>
        {routes.map((route) => (
          <StyledNavLink key={route.path} to={route.path} onClick={() => setMobileMenuOpen(false)}>
            {route.icon}
            {route.name}
          </StyledNavLink>
        ))}
      </MobileMenu>
      <MobileDashboard isVisible={dashboardVisible}>
        {routes.map((route) => (
          <DashboardItem key={route.path} to={route.path}>
            {route.icon}
            {route.name}
          </DashboardItem>
        ))}
      </MobileDashboard>
    </HeaderWrapper>
  );
};

export default Header;