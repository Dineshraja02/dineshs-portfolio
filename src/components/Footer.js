import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Dinesh</h1>
          <PText>
            A web designer and developer from Tiruchirappalli, Tamilnadu. I
            always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+918190952887',
                path: 'tel:+918190952887',
              },
              {
                title: 'dineshraja0403@gmail.com',
                path: 'mailto:dineshraja0403@gmail.com',
              },
              {
                title: 'GEC Circle, Tiruchirappalli, Tamilnadu',
                path: 'https://www.google.com/maps/place/Tiruchirappalli,+Tamil+Nadu/@10.8160054,78.6189869,12z/data=!3m1!4b1!4m5!3m4!1s0x3baaf50ff2aecdad:0x6de02c3bedbbaea6!8m2!3d10.7904833!4d78.7046725',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/dinesh-r-8367561b7',
              },
              {
                title: 'Github',
                path: 'https://github.com/Dineshraja02',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Dinesh | Designed By{' '}
            <a rel="noreferrer" href="/">
              Dinesh
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
