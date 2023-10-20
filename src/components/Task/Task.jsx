import {
  SectionTask,
  ContainerNumber,
  Paragraph,
  HaaderTask,
  Number,
  NumberSecond,
  Conatiner,
  ParagraphSecond,
  //   Paragraph,
} from "../Task/Task.styled.jsx";

import NumberOne from "../../images/Task/NumberOne.svg";
import NumberTwo from "../../images/Task/NumberTwo.svg";

export const Task = () => {
  return (
    <>
      <SectionTask>
        <HaaderTask>Main goals</HaaderTask>
        <Conatiner>
          <ContainerNumber>
            <Number src={NumberOne} />
            <Paragraph>
              Creating comfortable conditions and improving the quality of
              service clients
            </Paragraph>
          </ContainerNumber>
          <ContainerNumber>
            <NumberSecond src={NumberTwo} />
            <ParagraphSecond>
              Constantly improve the quality of services provided by personnel
              training, purchase of new equipment and strengthened advertising
              on the market
            </ParagraphSecond>
          </ContainerNumber>
        </Conatiner>
      </SectionTask>
    </>
  );
};
