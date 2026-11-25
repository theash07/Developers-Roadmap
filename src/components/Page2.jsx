import { useState } from "react";
import cThumb from "/images/c.png"
import csharpThumb from "/images/csharp.png"
import cPlusThumb from "/images/cplus.png"
import javaThumb from "/images/java.png"
import pythonThumb from "/images/python.png"
import javascriptThumb from "/images/javascript.png"
import flutterThumb from "/images/flutter.png"
import reactThumb from "/images/react.png"
import reactnativeThumb from "/images/reactnative.png"
import angularThumb from "/images/angular.png"
import Card from "./Card";

export default function Page2() {
  const [show, setShow]=useState("languages")

  return (
    <main className="roadmaps-page">
      <div className="roadmap-tabs" role="tablist" aria-label="Roadmap categories">
        <button className={show === "languages" ? "active" : ""} onClick={()=>setShow("languages")} type="button" role="tab" aria-selected={show === "languages"}>Languages</button>
        <span />
        <button className={show === "frameworks" ? "active" : ""} onClick={()=>setShow("frameworks")} type="button" role="tab" aria-selected={show === "frameworks"}>Frameworks</button>
        <span />
        <button className={show === "careers" ? "active" : ""} onClick={()=>setShow("careers")} type="button" role="tab" aria-selected={show === "careers"}>Career Paths</button>
      </div>
      {
        show === "languages" ?
        <div className="roadmap-card-grid">

        <Card
         Heading="C language"
         message="Learn About C Language "
         thumbnail={cThumb}
         Go="/Navbar/Clang"
          />
        <Card
         Heading="C++"
         message="Learn About C++ Language "
         thumbnail={cPlusThumb}
         Go="/Navbar/Cplus"
          />
        <Card
         Heading="Java"
         message="Learn About Java Language "
         thumbnail={javaThumb}
         Go="/Navbar/Javapage"
          />
        <Card
         Heading="Python"
         message="Learn About Python Language "
         thumbnail={pythonThumb}
         Go="/Navbar/Python"
          />
        <Card
         Heading="Javascript"
         message="Learn About Javascript Language "
         thumbnail={javascriptThumb}
         Go="/Navbar/Javascript"
          />
        <Card
         Heading="C Sharp"
         message="Learn About C Sharp Language "
         thumbnail={csharpThumb}
         Go="/Navbar/Csharp"
          />





        </div> :
        show === "frameworks" ?
        <div className="roadmap-card-grid">

<Card
         Heading="Flutter"
         message="Learn About Flutter Framework"
         thumbnail={flutterThumb}
         Go="/Navbar/Flutter"
          />
<Card
         Heading="React"
         message="Learn About React Framework "
         thumbnail={reactThumb}
         Go="/Navbar/Reactjs"
          />
<Card
         Heading="React Native"
         message="Learn About React Native "
         thumbnail={reactnativeThumb}
         Go="/Navbar/Reactnative"
          />
<Card
         Heading="Angular"
         message="Learn About Angular Framework"
         thumbnail={angularThumb}
         Go="/Navbar/Angular"
          />

        </div>
        :
        <div className="roadmap-card-grid">
          <Card Heading="MERN Stack" message="MongoDB, Express, React and Node.js" iconText="MERN" iconKind="mern" Go="/Navbar/Career/mern" />
          <Card Heading="Full Stack Developer" message="Frontend and backend development" iconText="Full Stack" iconKind="fullstack" Go="/Navbar/Career/full-stack" />
          <Card Heading="Frontend Developer" message="Modern interfaces and web experiences" iconText="Frontend" iconKind="frontend" Go="/Navbar/Career/frontend" />
          <Card Heading="Backend Developer" message="APIs, databases and server systems" iconText="Backend" iconKind="backend" Go="/Navbar/Career/backend" />
          <Card Heading="Data Analyst" message="Data analysis, reports and insights" iconText="Data" iconKind="data" Go="/Navbar/Career/data-analyst" />
        </div>
             }
    </main>
  );
}
