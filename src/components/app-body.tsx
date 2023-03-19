import {
    UilDownloadAlt,
    UilEnvelope,
    UilGithub,
    UilLinkedin,
    UilMapMarker,
    UilMessage,
    UilWhatsapp,
} from '@iconscout/react-unicons'

import { Container } from './container'
import { Field } from './field'
import { MyWorks } from './my-works'
import { Section } from './section'
import { SectionDescription } from './section-description'
import { SectionLink } from './section-link'
import { SectionSubtitle } from './section-subtitle'
import { SectionTitle } from './section-title'
import { Skills } from './skills'

export const AppBody = () => {
  return (
    <Container>
      {/* me */}
      <Section
        id="home"
        className="flex items-center mobile:flex-col mobile:items-center gap-6"
      >
        <div className="flex-1 flex flex-col items-start mobile:items-center mobile:text-center">
          <SectionTitle>Lorem Ipsum</SectionTitle>
          <SectionSubtitle>Full stack Developer</SectionSubtitle>
          <SectionDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            nulla doloribus incidunt modi odit. Dolorem et ratione nobis tempore
            dolorum, odio fuga, necessitatibus doloribus expedita exercitationem
            non saepe beatae sit!
          </SectionDescription>
          <SectionLink href="#contactme">
            <span>Contactme</span>
            <UilMessage size={14}></UilMessage>
          </SectionLink>
        </div>

        <img
          className="w-[300px] h-[600px] object-cover"
          src={require('../assets/profile.jpg')}
          alt="profile picture"
        />

        <div className="flex flex-col items-center mobile:flex-row gap-3.5 text-[var(--primary)]">
          <a href="#">
            <UilGithub size={18}></UilGithub>
          </a>

          <a href="#">
            <UilLinkedin size={18}></UilLinkedin>
          </a>
        </div>
      </Section>

      {/* about */}
      <Section id="about">
        <div className="text-center">
          <SectionTitle>About</SectionTitle>
          <SectionSubtitle>My introduction</SectionSubtitle>
        </div>

        <div className="flex items-center mobile:flex-col gap-x-6 gap-y-12">
          {/* image and text */}
          <div className="flex items-center gap-3.5">
            <img
              className="w-[200px] rounded-md"
              src={require('../assets/about_me_pict.jpg')}
              alt="about me picture"
            />

            <div className="line-clamp-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              fugiat doloribus, repellat, quos tenetur minima, a quae dolorum
              provident itaque iste voluptatum reprehenderit corrupti molestias!
              Corrupti est fugiat expedita reprehenderit.
            </div>
          </div>

          {/* experience & button */}
          <div className="flex flex-col items-center gap-3.5">
            <div className="flex items-center gap-3.5">
              <div className="text-center mx-1.5">
                <p className="font-semibold text-xl">4+</p>
                <p>Years Experience</p>
              </div>

              <div className="text-center mx-1.5">
                <p className="font-semibold text-xl">20+</p>
                <p>Software Projects</p>
              </div>

              <div className="text-center mx-1.5">
                <p className="font-semibold text-xl">5+</p>
                <p>Companies Worked</p>
              </div>
            </div>

            <SectionLink href="" download="mononymperson.pdf">
              <span>Download CV</span>
              <UilDownloadAlt size={14}></UilDownloadAlt>
            </SectionLink>
          </div>
        </div>
      </Section>

      {/* skills */}
      <Section id="skills">
        <div className="text-center">
          <SectionTitle>Skills</SectionTitle>
          <SectionSubtitle>My technical skills</SectionSubtitle>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <Skills
              title="Backend Developer"
              items={['PHP', 'Nodejs', 'Java', 'Python']}
            ></Skills>

            <Skills
              title="Frontend Developer"
              items={[
                'HTML',
                'CSS',
                'Javascript/Typescript',
                'Reactjs',
                'Vuejs',
              ]}
            ></Skills>
          </div>
        </div>
      </Section>

      {/* portofolio */}
      <Section id="portofolio">
        <div className="text-center">
          <SectionTitle>Portofolio</SectionTitle>
          <SectionSubtitle>My works</SectionSubtitle>
        </div>

        <MyWorks></MyWorks>
      </Section>

      {/* contact */}
      <Section id="contactme">
        <div className="text-center">
          <SectionTitle>Contact</SectionTitle>
          <SectionSubtitle>Get in touch</SectionSubtitle>
        </div>

        <div className="flex justify-center flex-wrap gap-12">
          {/* left */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-1.5 text-[var(--primary)]">
              <UilEnvelope size={32}></UilEnvelope>
              <div className="p-1">
                <p className="text-xl">Email</p>
                <p className="text-[var(--text)]">mononymperson@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[var(--primary)]">
              <UilWhatsapp size={32}></UilWhatsapp>
              <div className="p-1">
                <p className="text-xl">Whatsapp</p>
                <p className="text-[var(--text)]">+62 81295016638</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[var(--primary)]">
              <UilMapMarker size={32}></UilMapMarker>
              <div className="p-1">
                <p className="text-xl">Location</p>
                <p className="text-[var(--text)]">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex items-start flex-col gap-3.5 min-w-[300px]">
            <Field type="text" label="Name"></Field>
            <Field type="email" label="Email"></Field>
            <Field type="textarea" label="Message"></Field>
            <SectionLink className="ml-auto">
              <span>Send</span>
              <UilMessage size={14}></UilMessage>
            </SectionLink>
          </div>
        </div>
      </Section>
    </Container>
  )
}
