import React, { useState, ReactNode } from "react";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AccordionProps {
  title: string;
  children: ReactNode;
  date: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h4 className="pr_title">
          {title}
          {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
          {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
        </h4>

        <p className="pr_date">{date}</p>
      </div>
      {isOpen && (
        <div className={`accordion-content ${isOpen ? "onccordion" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

// 사용법
// <Accordion title="제목" date="2023-06-13"> <p>내용</p> </Accordion>
