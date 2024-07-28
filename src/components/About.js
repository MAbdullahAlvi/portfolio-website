// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import profileImage from '../assest/abdullah_pic.jpg'; // Correct path to your profile picture

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <TextSection>
          <Name>Muhammad Abdullah</Name>
          <Title>Web Developer</Title>
          <Description>
            I am a web developer specializing in Front End Development with HTML, CSS, JS, React,
          </Description>
          <Description>
            and Vue, and Backend with Django and Python.
          </Description>
          <Education>
            <h3>Education</h3>
            <p>I completed my Bachelor's degree in Information Technology</p>
            <p>from the University of Education with a Silver Medal.</p>
          </Education>
        </TextSection>
        <ProfileImageWrapper>
          <ProfileImage src={profileImage} alt="Muhammad Abdullah" />
        </ProfileImageWrapper>
      </ContentWrapper>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1c1c1c;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: left;
  font-size: 18px;

  @media (max-width: 768px) {
    text-align: center;
    padding-right: 0;
    font-size: 16px;
  }
`;

const ProfileImageWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 200px;  /* Increased from 150px */
  height: 200px; /* Increased from 150px */
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #00f0ff;
  background-color: #1c1c1c;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Name = styled.h1`
  font-size: 36px;
  color: #00f0ff;

  @media (max-width: 768px) {
    font-size: 28px;
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
`;

const Education = styled.div`
  margin: 20px 0;
`;

export default About;
