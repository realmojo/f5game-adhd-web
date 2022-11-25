import React, { useState, useEffect } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  {
    question:
      "과제나 업무를 수행하는 데 있어서 집중을 잘 못하고 부주의로 인한 실수가 있다.",
  },
  {
    question: "수업이나 놀이에서 집중을 유지하는 데 어려움을 겪는다.",
  },
  {
    question: "이야기를 할 때 잘 듣지 않는 경우가 있다.",
  },
  { question: "지시를 잘 따르지 않아서 과제나 임무를 잘 완수하지 못한다." },
  {
    question: "과제나 활동을 체계적으로 하는데 종종 어려움을 겪는다.",
  },
  {
    question:
      "지속적으로 정신력이 필요한 과제에 몰두하는 것을 피하거나 싫어한다.",
  },
  {
    question: "활동에 필요한 물건들을 자주 잃어버린다.",
  },
  {
    question: "외부 자극에 의해 종종 산만해진다.",
  },
  {
    question: "일상적인 일들을 자주 잊어버린다.",
  },
];

export const Page3 = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  const doChange = (e) => {
    const { name, value } = e.target;
    let newScore = [...scores];
    newScore[name] = value;
    setScores(newScore);
  };

  const doClick = () => {
    localStorage.setItem("adhd-score3", JSON.stringify(scores));
    navigate("/page4");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="text-center text-2xl pt-8">
        <h1>질문을 읽고 하나를 선택해주세요</h1>
      </div>
      <div className="pt-8">
        {questions.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left pl-4">
              {index + 19}. {item.question}
            </div>
            <div className="pl-6 pt-3 pb-5">
              <Radio.Group
                className="font-default"
                onChange={doChange}
                name={index}
              >
                <Space direction="vertical">
                  <Radio value={5}>매우 그렇다</Radio>
                  <Radio value={4}>그렇다</Radio>
                  <Radio value={3}>보통이다</Radio>
                  <Radio value={2}>아니다</Radio>
                  <Radio value={1}>매우 아니다</Radio>
                </Space>
              </Radio.Group>
            </div>
          </React.Fragment>
        ))}
      </div>
      <AdsensePage />
      <div className="text-center mt-4 pb-8">
        <Button
          style={{ width: 336 }}
          type="primary"
          className="btn-next"
          size="large"
          onClick={() => doClick()}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
