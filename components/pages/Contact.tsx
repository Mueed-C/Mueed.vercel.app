import React from "react";
import Section from "../parts/Section";
import DefButton from "../parts/DefButton";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      exit={{
        opacity: 0,
        y: 10,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      {/* SECTION 1 -  */}
      <Section title="Contact Me!" isF>
        <p className=" mt-7">
          Thank you for visiting my portfolio! If you would like to get in touch
          with me regarding research opportunities, collaboration proposals, or
          any other inquiries, please feel free to reach out using the following
          contact information:
        </p>
      </Section>

      {/* SECTION 2 -  */}
      <Section
        ID="contact-details"
        title="Details"
        pbot="11"
        ptop="7"
        mbot="7"
        mtop="4"
      >
        {/* content for this title */}
        <div>
          {/* ITEMS GO IN HERE */}

          <ul>
            <li>
              <span className=" font-semibold">Phone:</span> For privacy
              reasons, I prefer not to share my phone number online.
            </li>

            <li>
              <span className=" font-bold">E-mail:</span> Mueed.WMC@gmail.com
              <br />
            </li>

            <li>
              <span>Flexible Availability:</span> I strive to accommodate
              discussions and meetings at your convenience, weekdays and
              weekends included.
            </li>
            <li>
              <span>Timely Response:</span> Expect a response within 24 hours.
            </li>
          </ul>
          {/* ADD SOCIAL MEDIA ICONS HERE */}
        </div>
      </Section>

      {/* SECTION 3 -  */}
      <Section isL>
        <p>
          Your inquiry is important to me, and I will make every effort to get
          back to you as soon as possible. Thank you for your understanding.
        </p>
        <br />
        <p>
          I look forward to hearing from you. Let&apos;s connect and make a
          meaningful impact together!
        </p>
        <br />
        <Link href="mailto:Mueed.WMC@gmail.com">
          <DefButton name="Email me!" />
        </Link>
      </Section>
    </motion.div>
  );
};

export default Contact;
