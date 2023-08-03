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
        <HaaderTask>Основные задачи</HaaderTask>
        <Conatiner>
          <ContainerNumber>
            <Number src={NumberOne} />
            <Paragraph>
              Создание комфортных условий и повышение качества обслуживания
              клиентов
            </Paragraph>
          </ContainerNumber>
          <ContainerNumber>
            <NumberSecond src={NumberTwo} />
            <ParagraphSecond>
              Постоянно совершенствовать качество предоставляемых услуг путем
              обучения персонала, закупки нового оборудования и усиленной
              рекламы на рынке
            </ParagraphSecond>
          </ContainerNumber>
        </Conatiner>
      </SectionTask>
    </>
  );
};
