import { GetStaticProps } from "next";
import * as React from "react";

import { HomeAssessment } from "../components/home-assessment/HomeAssessment";
import Layout from "../components/Layout";
import {
  RoomAssessmentQuestion,
  RoomTypes,
} from "../interfaces/home-assessment";
import QuestionsData from "../data/kingston/questions.json";

type Props = {
  questions: { [type in RoomTypes]: RoomAssessmentQuestion[] };
};

const HomeAssessmentPage: React.FC<Props> = ({ questions }) => (
  <Layout
    title="Assessment"
    description="Free home assessment: see if your Kingston student housing situation is in breach of any housing bylaws."
  >
    <HomeAssessment questions={questions} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const questions = QuestionsData as {
    [type in RoomTypes]: RoomAssessmentQuestion[];
  };
  return { props: { questions } };
};

export default HomeAssessmentPage;
