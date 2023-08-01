import React, { useEffect, useState } from "react";
// pages
import LP from "@/components/pages/LP";
import Resume from "@/components/pages/Resume";
import Research from "@/components/pages/Blog/Research";
import Alumni from "@/components/pages/Blog/Alumni";
import Contact from "@/components/pages/Contact";
import { motion, AnimatePresence } from "framer-motion"; // Import the motion component from framer-motion

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const [activeContent, setActiveContent] = useState<string>(activeTab);

  const getActiveTab = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            exit={{
              opacity: 0,
              y: 10,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            <LP />
          </motion.div>
        );
      case "resume":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
            }}
            exit={{
              opacity: 0,
              y: 10,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            <Resume />
          </motion.div>
        );
      case "research":
        return <Research />;
      case "alumni":
        return <Alumni />;
      case "contact":
        return <Contact />;
      default:
        return <LP />;
    }
  };
  const handleTabChange = (newTab: string) => {
    setActiveContent(newTab);
  };
  return (
    <div className="rounded-md relative px-4 my-4 md:my-0">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{
            opacity: 0,
            y: 10,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <div className="pb-11 min-h-min rounded-md p-4 bg-slate-100 dark:bg-slate-700 drop-shadow-md transition-colors ease-out duration-500">
            <main>{getActiveTab()}</main>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainContent;
