import React, { useState, useEffect } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  {
    question:
      "어떤 일의 어려운 부분은 끝내 놓고, 그 일을 마무리를 짓지 못해 곤란을 겪은 적이 있나요?",
  },
  {
    question: "체계가 필요한 일을 해야 할 때 순서대로 진행하기 어려운가요?",
  },
  { question: "약속이나 해야 할 일을 잊어버려 곤란을 겪으시나요?" },
  { question: "골치 아픈 일은 피하거나 미루시나요?" },
  {
    question: "오래 앉아 있을 때 손을 만지작거리거나 발을 꼼지락 거리나요?",
  },
  {
    question:
      "모터가 달린 것처럼 과도하게 혹은 멈출 수 없이 활동하는 경우가 있나요?",
  },
  {
    question:
      "지루하고 어려운 일을 할 때 부주의해서 실수를 하는 경우가 있나요?",
  },
  {
    question: "지루하고 반복적인 일을 할 때 주의 집중이 힘든 경우가 있나요?",
  },
  {
    question:
      "대화 중 특시 상대방이 당신에게 직접적으로 말하고 있을 때에는 집중하기 힘든 경우가 있나요?",
  },
];

export const Page1 = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  const doChange = (e) => {
    const { name, value } = e.target;
    let newScore = [...scores];
    newScore[name] = value;
    setScores(newScore);
  };

  const doClick = () => {
    localStorage.setItem("adhd-score1", JSON.stringify(scores));
    navigate("/page2");
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
              {index + 1}. {item.question}
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
