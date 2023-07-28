import React, { useEffect, useState } from "react";
import Section from "../parts/Section";
import { GiNotebook } from "react-icons/gi";
import { PiHandHeart } from "react-icons/pi";
import { IoPeopleCircleOutline } from "react-icons/io5";

import {
  getResumeHxData,
  getResearchHxData,
  getVtexp,
  getLeca,
  getInterests,
  getSkills,
  getCerts,
} from "@/sanity/sanity.utils";
import Tooltip from "../parts/ui/tooltip";
import { TimelineSection } from "../parts/timeline parts/TimelineSection";
import ResumeLoader from "@/components/parts/loaders/ResumeLoader";
import ListLoader from "@/components/parts/loaders/ListLoader";

const Resume = () => {
  const [resumeHxData, setResumeHxData] = useState<any>(null);
  const [isLoading1, setIsLoading1] = useState(true);

  const [researchData, setResearchData] = useState([]);
  const [isLoading2, setIsLoading2] = useState(true);

  const [volunteerData, setVolunteerData] = useState([]);
  const [isLoading3, setIsLoading3] = useState(true);

  const [lecaData, setLecaData] = useState([]);
  const [isLoading4, setIsLoading4] = useState(true);

  const [certifications, setCertifications] = useState([]);
  const [isLoading5, setIsLoading5] = useState(true);

  const [skillsSentence, setSkillsSentence] = useState("");
  const [isLoading6, setIsLoading6] = useState(true);

  // const [fetchedInterests, setFetchedInterests] = useState([]);
  const [interestsSentence, setInterestsSentence] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // ---------------------RESUMEHX GOES HERE
      const data = await getResumeHxData();
      setResumeHxData(data);
      setIsLoading1(false);
      // ---------------------RESEARCHHX
      const rData = await getResearchHxData();
      setResearchData(rData);
      setIsLoading2(false);
      // ---------------------VOULTEERING AND TEACHING
      const vtData = await getVtexp();
      setVolunteerData(vtData);
      setIsLoading3(false);
      // ---------------------LEADERSHIP & EC
      const lData = await getLeca();
      setLecaData(lData);
      setIsLoading4(false);
      // ---------------------CERTIFICATIONS
      const certs = await getCerts();
      setCertifications(certs);
      setIsLoading5(false);
      // ---------------------SKILLS
      const skills = await getSkills();

      const skillsSentence = skills.join(", ");
      setSkillsSentence(skillsSentence);
      setIsLoading6(false);
      // ---------------------INTERESTS
      const interests = await getInterests();
      // setFetchedInterests(interests);

      const interestsSentence = interests.join(", ");
      setInterestsSentence(interestsSentence);

      // ------------------------

      setIsLoading(false); // Once data is fetched, set isLoading to false
    })();
  }, []);

  // Helper function to transform "resumeHx" data into the structure expected by TimelineSection
  function transformResumeHxData(resumeHxData) {
    if (!resumeHxData || !resumeHxData.hxitems) {
      return []; // Return an empty array if data is not available
    }

    return resumeHxData.hxitems.map((hxitem) => {
      const { heading, events } = hxitem;
      return {
        title: heading || "", // Assuming heading maps to title
        milestones: events.map((event) => ({
          title: event.title || "", // Assuming title maps to title
          description: event.desc || "", // Assuming desc maps to description
          image: event.image || null, // Assuming image maps to image
          tags: event.tags || [], // Assuming tags maps to tags
          duration: "", // This field is not available in your data, you can add it or remove it as needed
        })),
      };
    });
  }
  /**
   * Format a date from "YYYY-MM-DD" format to "DD Month YYYY" format.
   * param {string} dateStr - The date string in "YYYY-MM-DD" format.
   * returns {string} The formatted date in "DD Month YYYY" format.
   */
  function formatDate(dateStr) {
    // Create a Date object from the input date string
    const dateObj = new Date(dateStr);

    // Extract day, month, and year components from the Date object
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();

    // Return the formatted date string
    return `${day} ${month} ${year}`;
  }
  /**
   * Format a date from "YYYY-MM-DD" format to "Month YYYY" format.
   * param {string} dateStr - The date string in "YYYY-MM-DD" format.
   * returns {string} The formatted date in "Month YYYY" format.
   */
  function formatMYDate(dateStr) {
    const dateObj = new Date(dateStr);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getFullYear().toString();

    return `${month} ${year}`;
  }

  const transformedTimelineData = transformResumeHxData(resumeHxData);

  return (
    <div id="resume">
      {/* SECTION 1 - [RESUME] - EDU & EXP */}

      <Section isF title="My R&eacute;sum&eacute;">
        {/* text for this title */}
        {isLoading1 ? (
          <ResumeLoader />
        ) : (
          <TimelineSection timelines={transformedTimelineData} />
        )}
      </Section>

      {/* SECTION 2 - RESEARCH EXP */}
      <Section title="Research Experience" mbot="11">
        {/* ITEMS GO IN HERE */}
        <div id="clinexp">
          <ul id="hx" className="pl-4">
            <li>
              {" "}
              {/*This first empty li is for the icon & Title*/}
              <i>
                <div className="flex items-center justify-center">
                  <GiNotebook className=" transition-all ease-in-out duration-150 text-4xl hover:text-emerald-200" />
                </div>
              </i>
              <h2 id="hx_name">ONGOING</h2>
            </li>

            {/* All lists forward will include info of each point/detail in this hx */}
            <>
              {isLoading2 ? (
                <>
                  <ListLoader />
                  <ListLoader />
                  <ListLoader />
                  <ListLoader />
                </>
              ) : (
                researchData.map((item) => (
                  <li key={item._key}>
                    <h3
                      id="li_title dark:text-slate-300"
                      className="font-semibold py-"
                    >
                      {item.title}
                    </h3>
                    <span className="dark:text-slate-400">
                      {formatDate(item.startDate)} -{" "}
                      {item.endDate ? formatDate(item.endDate) : "PRESENT"}
                    </span>
                    <p
                      id="detailz"
                      className="text-zinc-700 dark:text-slate-300"
                    >
                      <span className="supervisor">Research Supervisor:</span>{" "}
                      {item.supervisor} <br />
                      <span className="status">Current Status:</span>{" "}
                      {item.currentStatus} <br />
                      <span className="role">Current Role:</span> {item.myRole}
                    </p>
                  </li>
                ))
              )}
            </>
          </ul>
        </div>
      </Section>

      {/* SECTION 3 - VOLUNTEER & TEACHING EXPERIENCE */}

      <Section title="Volunteer & Teaching Experience">
        {/* content for this title */}
        <div className=" mx-4 mt-11">
          <ul id="hx">
            <li>
              {" "}
              {/*This first empty li is for the icon & Title*/}
              <i>
                <div className="flex items-center justify-center">
                  <PiHandHeart className=" transition-all ease-in-out duration-150 text-4xl hover:text-rose-200" />
                </div>
              </i>
              <h2 id="hx_name"> </h2>
            </li>

            {/* Iterate over each volunteer experience item */}
            {isLoading3 ? (
              <>
                <ListLoader />
                <ListLoader />
              </>
            ) : (
              volunteerData.map((item) => (
                <li key={item._key}>
                  <h3 className="font-semibold dark:text-slate-300">
                    {item.title}
                  </h3>
                  <span className="dark:text-slate-400">{item.location}</span>
                  <span className="text-xs dark:text-slate-400">
                    {/* Conditionally render date range or startDate */}
                    {formatMYDate(item.startDate)}
                    {item.endDate && ` - ${formatMYDate(item.endDate)}`}
                  </span>
                  <p className="italic">{item.description}</p>
                </li>
              ))
            )}
          </ul>
          {/* <div>
            <h3>Title</h3>
            <span>Dates</span>
            <span>Location</span>
            <p>Details.</p>
          </div> */}
        </div>
      </Section>

      {/* SECTION 4 - LEADERSHIP AND EXTRACURRICULAR ACTIVITIES --------------*/}
      <Section title="Leadership & EC's" mbot="11">
        {/* content for this title */}
        <div className=" mx-4">
          <ul id="hx">
            <li>
              {" "}
              {/*This first empty li is for the icon & Title*/}
              <i>
                <div className="flex items-center justify-center">
                  <IoPeopleCircleOutline className=" transition-all ease-in-out duration-150 text-4xl hover:text-yellow-100" />
                </div>
              </i>
              <h2 id="hx_name"> </h2>
            </li>

            {/* Iterate over each leadership & EC experience item */}
            {isLoading4 ? (
              <>
                <ListLoader />
                <ListLoader />
              </>
            ) : (
              lecaData.map((item) => (
                <li key={item._key}>
                  <h3 className="font-semibold dark:text-slate-300 ">
                    {item.title}
                  </h3>
                  <span className="dark:text-slate-400">{item.role}</span>
                  <p className="italic">{item.description}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </Section>
      {/* SECTION 5 - CERTIFICATIONS, SKILLS & INTERESTS --------------*/}
      <Section title="Certifications, Skills, & Interests" isL mbot="11">
        {/* content for this title */}
        <div className=" mx-4">
          {/* ITEMS GO IN HERE */}
          <div>
            <h4 className="dark:text-slate-200 font-bold text-lg">
              Certifications
            </h4>

            {isLoading5 ? (
              // Placeholder with pulsing animation while data is being fetched
              <div className="flex gap-x-1 flex-wrap gap-y-1">
                <div className="animate-pulse w-7 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-24 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-36 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-24 py-2 bg-gray-300  rounded-md"></div>
              </div>
            ) : (
              // Actual content is displayed once data is loaded
              <>
                {certifications
                  .map((cert) => (
                    <Tooltip
                      key={cert._key}
                      title={cert.certName}
                      img={cert.image}
                    />
                  ))
                  .map((component, index, array) => {
                    // Convert each component to a string
                    const isLastItem = index === array.length - 1;
                    return (
                      <React.Fragment key={index}>
                        {component}
                        {!isLastItem && ", "}
                      </React.Fragment>
                    );
                  })}
              </>
            )}
          </div>
          <br />
          <div>
            <h4 className="dark:text-slate-200 font-bold text-lg">Skills</h4>
            {isLoading6 ? (
              // Placeholder with pulsing animation while data is being fetched
              <div className="flex gap-x-1 flex-wrap gap-y-1">
                <div className="animate-pulse w-16 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse  w-60 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-32 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-96 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-14 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-36 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-60 py-2 bg-gray-300  rounded-md"></div>
              </div>
            ) : (
              // Actual content is displayed once data is loaded
              <p>{skillsSentence}</p>
            )}

            <br />
          </div>
          <div>
            <h4 className="dark:text-slate-200 font-bold text-lg">Interests</h4>

            {isLoading ? (
              // Placeholder with pulsing animation while data is being fetched
              <div className="flex gap-x-1 flex-wrap gap-y-1">
                <div className="animate-pulse w-10 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse  w-14 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-56 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-28 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-14 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-10 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-9 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-72 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>

                <div className="animate-pulse w-36 py-2 bg-gray-300  rounded-md"></div>
                <div className="h-2 -translate-y-1">,</div>
              </div>
            ) : (
              // Actual content is displayed once data is loaded
              <p>{interestsSentence}</p>
            )}

            <br />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
