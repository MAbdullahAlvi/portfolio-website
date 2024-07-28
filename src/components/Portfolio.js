// src/components/Portfolio.js
import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h2>Portfolio</h2>
      <ProjectsWrapper>
        <ProjectCard>
          <ProjectTitle>Weather Forecasts</ProjectTitle>
          <ProjectDescription>
            Developed a real-time weather application using Vue.js, integrating a weather API 
            to display current conditions and forecasts dynamically. Focused on creating a 
            responsive and user-friendly interface for accurate and timely weather updates.
          </ProjectDescription>
          <ProjectLink href="https://weatherawan.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Tic Tac Toe</ProjectTitle>
          <ProjectDescription>
            Play Tic Tac Toe with Vue.js!
            Dive into a classic game reimagined with modern web technologies. 
            Challenge yourself or a friend and see who can win first!
          </ProjectDescription>
          <ProjectLink href="https://alvi-tic-tac.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Unsplash Copy</ProjectTitle>
          <ProjectDescription>
            Explore Stunning Unsplash Photos with Vue.js!
            Seamlessly browse high-quality images from Unsplash
            and elevate your projects with beautiful visuals, all powered by Vue.js.
          </ProjectDescription>
          <ProjectLink href="https://unsplash-copy.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Multilingual/Fyp</ProjectTitle>
          <ProjectDescription>
            Developed a real-time chat app with speech-to-text, text-to-speech, image processing, 
            and multilingual translation
            (English, Urdu, Chinese) using HTML, CSS, JavaScript, Python, and SQL.
          </ProjectDescription>
          <ProjectLink href="https://github.com/MAbdullahAlvi/Multi-lingua-chat" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Uplift</ProjectTitle>
          <ProjectDescription>
            Elevate Your Experience with Uplift!
            Discover a sleek, user-friendly platform designed to enhance productivity 
            and well-being, all built with the latest web technologies.
          </ProjectDescription>
          <ProjectLink href="https://calm-kleicha-a38f9b.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Find Synonyms, Antonyms, Hyponyms, Meronyms, General Words</ProjectTitle>
          <ProjectDescription>
            Trained a model in Python that reads a file and returns the percentage of
            Synonyms, Antonyms, Hyponyms, Meronyms, and General Words.
          </ProjectDescription>
          <ProjectLink href="https://github.com/MAbdullahAlvi/find-a-type-of-words-in-file-synoname-gernal-word-etc-" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Copy OF Buffer</ProjectTitle>
          <ProjectDescription>
            I’m creating a React-based copy of Buffer Publish. It’s currently in the works, 
            and I’ll be deploying it soon as my first real-world project!
          </ProjectDescription>
          <ProjectLink href="https://publish.buffer.com/" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
      </ProjectsWrapper>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
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

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectCard = styled.div`
  background-color: #2e2e2e;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 30%;
  text-align: center;
  box-sizing: border-box;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProjectLink = styled.a`
  color: #00aaff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default Portfolio;
