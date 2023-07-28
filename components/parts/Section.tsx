
import React, { ReactNode } from 'react'

type SectionProps = {
    title?: string;
    children: ReactNode;
    ptop?: string;
    pbot?: string;
    mtop?: string;
    mbot?: string;
    isF?: boolean;
    isL?: boolean;
    ID?: string;
}

const Section: React.FC<SectionProps> = ({title, children, ptop, pbot, mtop, mbot, isF = false, isL = false, ID}) => {
  
    // IF any custom pad-top or -bot values are given then apply that
    // otherwise, revert to the default value of "py-12"
    let ptopClass = ptop ? `pt-${ptop}` : `pt-12`;
    let pbotClass = pbot ? `pb-${pbot}` : `pb-12`;
    // IF it is the first or last section on the page, then apply 
    // these values instead
        if (isF) {
            ptopClass = 'pt-7';
            pbotClass = 'pb-11';
        }
        if (isL) {
            ptopClass = 'pt-14';
            pbotClass = 'pb-12'; 
        }
    let mtopClass = mtop ? `mt-${mtop}` : ``;
    let mbotClass = mbot ? `mb-${mbot}` : ``;
    return (
    <div className={`-mx-4`}>
      <section id={`${ID}`} className={`px-7 round ${ptopClass} ${pbotClass}`}>
        {title && (
          <div id="sec-title" className={`${mtopClass} ${mbotClass}`}>
            {/* Title for the Section goes here */}
            <span></span>
            <h2>{title}</h2>
          </div>
        )}
            {/* Contents of this respective Section go here */}
            {children}
      </section>
    </div>
  )
}

export default Section