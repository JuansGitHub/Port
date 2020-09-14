import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

function About(props) {
  return (
    <>
      <section id="story">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-6 text-center mb-5">
              <h2 className="mt-5 custom-text-primary">Hello</h2>
              <h2 className="mb-4 custom-text-primary">I am Markell</h2>

              <p className="text-justify mb-5 px-4">
                A few years ago after nearing the end of my Bachelor's I fell out of love with economics
                in love with programming, particularly in Web and Mobile
                development. In my free time, I enjoy watching anime, working out, programming, and 
                spending time with (your volunteering gig) people at the shelter. <br />
                <br />
                Throughout my journey, I have had opportunities to grow as a
                developer by attending a full-stack developer bootcamp,
                utilizing my analytical thinking of estimating regression models with actual data,
                to challenge, overcome it, and seeing the end results. the way and working on various projects. I
                study (different types of programming techniques go here) on the side so I can further enhance the
                aesthetics of my apps.

                <br />
              </p>

              <a
                className="btn btn-lg btn-site-gold"
                href="files/Resume.pdf"
                type="application/pdf"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
            <div
              className="col-md-6 d-none d-md-block"
              id="about-picture"
            ></div>
          </div>
        </div>
      </section>
      <section id="education">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mt-5 font-weight-bold custom-text-primary">
                Education & Work Experience
              </h1>
            </div>
          </div>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - present"
            iconStyle={{ background: 'rgb(0,39,90)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              (Job title)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              (Area of work)
            </h4>
            <p>(past titles, titles, titles)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(0,39,90)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(0,39,90)' }}
            date="2019 - present"
            iconStyle={{ background: 'rgb(0,39,90)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              CSR & Tech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pacoina, CA
            </h4>
            <p>
              Full-stack applications, mobile apps, branding sheets, business
              cards, logos, magazine and book design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2022"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Masters of Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dakota State University
            </h4>
            <p>Graduate Certificate in Ethical Hacking</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Nucamp</h4>
            <p>Bootstrap, React, React Native, NodeJS, MongoDB</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017-2019"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors of Economics
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              UNLV
            </h4>
            <p>Concentration in Econometrics</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Associates in Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              LAMC
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </section>
    </>
  );
}

export default About;