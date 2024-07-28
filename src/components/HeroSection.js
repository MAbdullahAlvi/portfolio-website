// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const HeroSection = () => {
  return (
    <Hero>
      <Content>
        <Greeting>Hello, it's Me</Greeting>
        <Name>Muhammad Abdullah</Name>
        <Title>And I'm a Frontend & Django Developer</Title>
        <Description>I create Frontend with HTML, CSS, REACT, and VUE, and Backend with Django</Description>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-ab9912235/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/MAbdullahAlvi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <SiTiktok />
          </a>
          <a href="https://www.instagram.com/abdullahmshahid09/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </SocialLinks>
        <Button href="https://drive.google.com/uc?export=download&id=1kZWouBh5JZVszDS7P5jLoAoBhVDd-KIT" target="_blank" rel="noopener noreferrer">Download CV</Button>
      </Content>
      <ProfileImageWrapper>
        <ProfileImage src={`${process.env.PUBLIC_URL}/abdullah_pic.jpg`} alt="Profile" />
      </ProfileImageWrapper>
    </Hero>
  );
};

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #1c1c1c;
  color: #fff;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 50%;
  margin-top: -50px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: -30px;
  }
`;

const Greeting = styled.h3`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Name = styled.h1`
  font-size: 40px;
  color: #00f0ff;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Title = styled.h2`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 24px;

  a {
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #00d0e0;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00f0ff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #00d0e0;
  }
`;

const ProfileImageWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 10px solid #00f0ff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default HeroSection;
