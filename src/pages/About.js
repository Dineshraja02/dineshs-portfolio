import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .cvDownload {
    font-size: 20px;
    color: var(--deep-dark);
    font-weight: bold;
    padding: 7px;
    background-color: var(--gray-1);
    border-radius: 5px;
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Dinesh</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Tiruchirappalli, Tamilnadu. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                </PText>
              </div>
              <a
                href="https://drive.google.com/file/d/1LYSGVazCAllSf8sW-wMxFgdXWUuUuzW0/view?usp=drivesdk"
                className="cvDownload"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['St.Joseph Colege Hr .Sec School']}
              />
              <AboutInfoItem
                title="Engineering"
                items={['Annai Mathammal College of Engineering']}
              />
              <AboutInfoItem
                title="Mern Stack"
                items={['Guvi Geeks network Pvt Ltd']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['NodeJs', 'Express', 'MongoDB']}
              />
              <AboutInfoItem
                title="Apps"
                items={['VScode', 'Github', 'Aws Clouding']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018-2019"
                items={['Felting Supervisor in Eltex Super Casting']}
              />
              <AboutInfoItem
                title="2019-2020"
                items={['Junior Development Engineer in Veejei Automation']}
              />
              <AboutInfoItem
                title="2020-2021"
                items={['Freelancing Frontend Developer']}
              />
              <AboutInfoItem
                title="2021-2022"
                items={['Full stack developer in Primates development Ltd']}
              />
              <AboutInfoItem
                title="2022-Till now"
                items={['Jr Software Developer in Brugu Software Solutions']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
