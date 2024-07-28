// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import htmlImage from '../assest/html.png'; // Placeholder path to HTML image
import cssImage from '../assest/css.png'; // Placeholder path to CSS image
import jsImage from '../assest/js.jpeg'; // Placeholder path to JavaScript image
import reactImage from '../assest/react.png'; // Placeholder path to React image
import vueImage from '../assest/vue.png'; // Placeholder path to Vue image
import pythonImage from '../assest/python.jpeg'; // Placeholder path to Python image
import djangoImage from '../assest/django.jpeg'; // Placeholder path to Django image
import MLImage from '../assest/ML.jpeg'

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills & Competencies</h2>
      <SkillsWrapper>
        <SkillCard>
          <SkillImage src={htmlImage} alt="HTML" />
          <SkillName>HTML</SkillName>
          <p>With years of experience, I am a professional in HTML. I specialize in crafting high-quality HTML designs.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={cssImage} alt="CSS" />
          <SkillName>CSS</SkillName>
          <p>With a year of hands-on experience in CSS, I've mastered crafting responsive and visually engaging web designs that elevate user experiences.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={jsImage} alt="JavaScript" />
          <SkillName>JavaScript</SkillName>
          <p>Drawing on a solid year of JavaScript expertise, I build efficient, scalable solutions that bring complex web functionalities to life with clean and maintainable code.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={reactImage} alt="React" />
          <SkillName>React</SkillName>
          <p>Experienced in building modern, single-page applications using React. I focus on creating reusable components and managing state effectively.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={vueImage} alt="Vue.js" />
          <SkillName>Vue.js</SkillName>
          <p>Proficient in Vue.js, I design intuitive user interfaces and maintainable codebases, leveraging Vue’s features for efficient development.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={pythonImage} alt="Python" />
          <SkillName>Python</SkillName>
          <p>Skilled in Python, I develop versatile applications and scripts, focusing on clean code and efficient problem-solving in various domains.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={djangoImage} alt="Django" />
          <SkillName>Django</SkillName>
          <p>Experienced in Django, I build robust web applications with a focus on security and scalability, leveraging Django's powerful features for rapid development.</p>
        </SkillCard>
        <SkillCard>
          <SkillImage src={MLImage} alt="ML" />
          <SkillName>Machine learning</SkillName>
          <p>I has hands-on experience in Machine Learning, adept at developing predictive models and implementing data-driven solutions to solve complex problems. He leverages his analytical skills and knowledge of algorithms
             to create efficient and scalable machine learning applications. </p>
        </SkillCard>
        
      </SkillsWrapper>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
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

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillCard = styled.div`
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

const SkillImage = styled.img`
  width: 60px;
  height: 60px;
`;

const SkillName = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Skills;
