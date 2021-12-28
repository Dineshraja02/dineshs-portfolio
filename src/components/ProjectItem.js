import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__link {
    font-size: 1.3rem;
    color: var(--deep-dark);
    font-width: bold;
    background-color: var(--gray-1);
    padding: 10px;
    justify-content: center;
    margin-top: 3px;
    text-align: center;
    border-radius: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = '',
  github = '',
}) {
  return (
    <ProjectItemStyles>
      <a
        target="_blank"
        href={link}
        className="projectItem__img"
        rel="noreferrer"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <a target="_blank" href={link} rel="noreferrer">
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
        <br />
        <a target="_blank" href={link} rel="noreferrer">
          <h3 className="projectItem__link">DEPLOYED SITE</h3>
        </a>
        <a target="_blank" href={github} rel="noreferrer">
          <h4 className="projectItem__link">SOURCE CODE</h4>
        </a>
      </div>
    </ProjectItemStyles>
  );
}
