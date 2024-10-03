
import React from "react";
import { Button, Paragraph, HeroText } from "../components";

export default {
  title: 'Landing',
}

const introduction = ["Creating a React component library as an npm package allows developers to share reusable UI components across multiple projects. The process involves setting up a project with tools like Rollup for bundling, Babel for transpiling JSX, and PropTypes for type checking. By structuring the library with proper configuration and modular design, you can create customizable, reusable components that enhance development efficiency. After building the package, it can be published on npm, making it accessible for use in other React projects or by the wider community, promoting code consistency and reuse across applications."]

export const PageView = () => (
  <div
    style={{
      backgroundColor: "#000000",
      width: "100wh",
      height: "100vh",
      color: "#ffffff",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding: "60px"
    }}
  >
    <HeroText text="React Component Library" color="white" size="small" textAlign= 'start'/>
    <Paragraph paragraphList={introduction} color="#ffffff" textAlign="start"/>
    <Button label="Visit Npm Page" primary fontWeight="bolder" fontSize={17} color="black" verticalPadding={17}/>
  </div>
)