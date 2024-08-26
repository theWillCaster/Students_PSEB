import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Details.css';
import data from '../../utils/slider';
import getStudentsByClassName from '../../api/students';

const Details = () => {
  const { className } = useParams();
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const students = await getStudentsByClassName(className.replace(/-/g, ' '));
      console.log(students);
      setStudentList(students);
    };

    getStudents();
  }, [className]);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left"></div>

        <div className="flexColStart v-right">
          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data
              .filter(item => item.class === className) // Filter based on className from URL
              .map((item, i) => {
                const [accordionClassName, setAccordionClassName] = React.useState(null);
                return (
                  <AccordionItem className={`accordionItem ${accordionClassName}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded ? setAccordionClassName('expanded') : setAccordionClassName('collapsed')
                          }
                        </AccordionItemState>
                        <div className="flexCenter primaryText icon">{item.name}</div>
                        <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accPanel">
                      <span className="orangeText">{item.class}</span>
                      <p className="secondaryText">{item.semester}</p>
                      <p className="secondaryText">{item.cgpa}</p>
                      <img src={`/${item.image}`} alt="" />
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Details;
