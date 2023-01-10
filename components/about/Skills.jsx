import React from "react";

const skillsContent = [
  {
    name: "Python",
    skillPercent: "90", // 4 years
  },
  {
    name: "Azure AI-Cloud Solutions", // 1 year
    skillPercent: "80",
  },
  {
    name: "Databricks/Spark", // 1 year
    skillPercent: "70",
  },
  {
    name: "Airflow", // 1 year
    skillPercent: "70",
  },
  {
    name: "Kubernetes/Docker", // 1 year
    skillPercent: "70",
  },
  {
    name: "Product Ownership", // 1 year
    skillPercent: "50",
  },
  {
    name: "Grafana", // 2 years
    skillPercent: "60",
  },
  {
    name: "Tableau", // 2 years
    skillPercent: "60",
  },
  {
    name: "C++", // 3 years
    skillPercent: "80",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
