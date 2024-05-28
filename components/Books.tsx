import React from "react";
import {
    CheatSheets,
    KeyWords,
    CookBook,
    AlgorithmsDataStructures,
    PatternPrograms,
    ForBeginners,
    ProgramsForBeginners,
    KillerOneLiners,
    ConceptsEveryDeveloper,
    AdvancedDesignPatterns,
    InterviewQuestions,
    LetsGrowUpTogether,
  } from "../data";

const Books = () => {
  return (
    <div>
      {/* <CheatSheets />
      <KeyWords /> */}
      <CookBook />
      {/* <AlgorithmsDataStructures /> */}
      {/* <PatternPrograms /> */}
      <ForBeginners />
      {/* <ProgramsForBeginners /> */}
      {/* <KillerOneLiners /> */}
      <ConceptsEveryDeveloper />
      {/* <AdvancedDesignPatterns /> */}
      {/* <InterviewQuestions /> */}
      {/* <LetsGrowUpTogether /> */}
    </div>
  );
};

export default Books;
