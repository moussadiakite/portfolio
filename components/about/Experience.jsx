import experienceContent from "../../data/experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <p style={{fontWeight: 'bold'}}>Technical environment: {val.technical_environment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
