import React, { useEffect, useState } from "react";
import Section from "../parts/Section";
import { GiPelvisBone, GiArchiveResearch } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import Pursuits from "../parts/Pursuits";
import { motion } from "framer-motion";

const LP = () => {
  // const [bioText, setBioText] = useState<string | null>(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getMain();
  //     if (data && data[0] && data[0].bio && data[0].bio[0] && data[0].bio[0].text) {
  //       setBioText(data[0].bio[0].text);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        y: 10,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      {/* SECTION 1 - ABOUT ME ----------------*/}
      <Section title="About Me" isF>
        <p className=" mt-7">
          Born and raised in Silicon Valley, my passion for orthopedic surgery
          drives my pursuit of excellence. Committed to innovation and
          precision, I am dedicated to contributing to humanity and scientific
          literature. Eager to collaborate with professionals, I strive to
          expand my knowledge and skills in orthopedics, making a positive
          impact in the field.
        </p>
        <br />
        <br />
        <p>
          Welcome to my website! This was made entirely by hand during my final
          year at Wah Medical College. I had self-taught myself basic web
          development back in highschool (HTML5, etc), but left it after getting
          busy with college. During my final year of MBBS, I discovered new
          trends & applications in the world of web development, including the
          React framework and various other innovations. Intrigued by these
          advancements, I decided to pick it up and make something out of it.
          <br />
          This project was basically an effort to show my dedication to
          embracing emerging technologies and cultivating fresh skills. It goes
          beyond speaking &#34;Im a quick learner&#34;- this website is a
          tangible demonstration of my ability to adapt and learn proactively
        </p>
      </Section>

      {/* SECTION 2 - MY PURSUITS --------------*/}
      <Section title="My Pursuits" ID="pursuits">
        {/* content for this title */}
        <div className=" mx-4 mt-11">
          {/* ITEMS GO IN HERE */}
          <Pursuits
            icon={<GiPelvisBone />}
            title="Orthopedic Surgery"
            description="Exploring orthopedic surgery with a focus on enhancing mobility and well-being."
          />

          <Pursuits
            icon={<GiArchiveResearch />}
            title="Research"
            description="Advancing knowledge and enhancing patient care through contributions to research."
          />

          <Pursuits
            icon={<FaChalkboardTeacher />}
            title="Medical Education"
            description="Nurturing & empowering aspiring healthcare professionals through teaching and mentorship."
          />

          <Pursuits
            icon={<LuBrainCircuit />}
            title="Artificial Intelligence"
            description="Passionately pursuing a deep understanding of AI's potential in revolutionizing medicine."
          />
        </div>
      </Section>

      {/* SECTION 3 -  SKILLS ------------------*/}
      {/* TODO LATER, MAKE A SUB SECTION COMPONENT!!!!! */}
      <div className="-mx-4">
        {/* {/* SEC 3A */}
        {/*       <section className='    pb-12 pt-14 px-7'>
          {/* Section 3A -title */}
        {/*        <div id="sec-title" className=' mb-11'>
   {/*         <span></span>
            <h2>Skills 1</h2>
          </div>
          {/* stuff for 3A title */}
        {/*         <ul id="skills"></ul>
        </section> */}

        {/* SEC 3B */}
        <section className="pt-14 px-7 ">
          {/* Section 3A - title */}
          <div id="sec-title" className=" mb-11">
            <span></span>
            <h2>Language Skills</h2>
          </div>

          {/* stuff for 3B title */}
          <ul id="skills">
            <li>
              <h3>English</h3>
              <span />
              <p>Native Speaker</p>
              <div id="progress">
                {" "}
                <div
                  id="percentage"
                  className="w-full bg-blue-500 dark:bg-blue-600"
                />
              </div>
            </li>

            <li>
              <h3>Urdu</h3>
              <span />
              <p>Proficient</p>
              <div id="progress">
                {" "}
                <div
                  id="percentage"
                  className=" w-[75%] bg-blue-400 dark:bg-blue-500"
                />
              </div>
            </li>

            <li>
              <h3>French</h3>
              <span />
              <p>Intermediate/Basic</p>
              <div id="progress">
                {" "}
                <div
                  id="percentage"
                  className=" w-[55%] bg-blue-300 dark:bg-blue-400"
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default LP;
