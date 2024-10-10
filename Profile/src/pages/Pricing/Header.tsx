import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #f0f8ff, #e6f2ff);
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
  color: #00308F;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #00308F;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFA500;
  }
`;

const NavContainer = styled.nav`
  background: linear-gradient(135deg, #00308F, #004CBF);
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

const NavLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
`;

const MegaMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: linear-gradient(135deg, #FFFFFF, #F0F8FF);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'grid' : 'none'};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const MegaMenuColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const MegaMenuItem = styled.a`
  color: #00308F;
  text-decoration: none;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 48, 143, 0.1);
    border-radius: 5px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #FFFFFF;
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
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00308F;
  z-index: 1000;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MobileMenuItem = styled(NavLink)`
  color: #FFFFFF;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.5rem;
  cursor: pointer;
`;

interface MegaMenuData {
  [key: string]: string[];
}

const megaMenuData: MegaMenuData = {
  'Products': ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
  'Services': ['Service 1', 'Service 2', 'Service 3', 'Service 4'],
  'Resources': ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4'],
  'Company': ['About Us', 'Careers', 'Contact', 'Blog']
};

const Header: React.FC = () => {
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const handleMegaMenuToggle = (menu: string) => {
    setOpenMegaMenu(prevMenu => prevMenu === menu ? null : menu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
      setOpenMegaMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderWrapper>
      <TopBar>
        <LogoContainer>
          <Logo src="Boelogo.jpeg" alt="BOE Logo" />
          <Title>BOE Limited</Title>
        </LogoContainer>
        <SocialIcons>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaWhatsapp /></SocialIcon>
          <SocialIcon href="#"><FaTiktok /></SocialIcon>
          <SocialIcon href="#"><FaMapMarkerAlt /></SocialIcon>
        </SocialIcons>
      </TopBar>
      <NavContainer>
        <NavList>
          {Object.keys(megaMenuData).map((menuItem) => (
            <NavItem key={menuItem}>
              <NavLink 
                href="#" 
                onMouseEnter={() => handleMegaMenuToggle(menuItem)}
              >
                {menuItem}
              </NavLink>
              <MegaMenu isOpen={openMegaMenu === menuItem} ref={megaMenuRef}>
                {megaMenuData[menuItem].map((subItem) => (
                  <MegaMenuColumn key={subItem}>
                    <MegaMenuItem href="#">{subItem}</MegaMenuItem>
                  </MegaMenuColumn>
                ))}
              </MegaMenu>
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
        {Object.keys(megaMenuData).map((menuItem) => (
          <MobileMenuItem key={menuItem} to="#">{menuItem}</MobileMenuItem>
        ))}
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;