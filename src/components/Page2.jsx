import React, { useState, useEffect } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  {
    question:
      "집이나 직장에서 물건을 엉뚱한 곳에 두거나 어디에 두었는지 헷갈리나요?",
  },
  {
    question: "주변에서 벌어지는 일이나 소음때문에 주의가 산만해 지나요?",
  },
  {
    question:
      "회의나 다른 사회적 상황에서 계속 앉아 있어야 함에도 잠깐씩 자리를 일어나나요?",
  },
  { question: "안절부절 못하거나 조바심하는 경우가 있나요?" },
  {
    question:
      "혼자 쉬고 있을 때 긴장을 풀거나 마음을 편하게 갖기 어려운 경우가 있나요?",
  },
  {
    question:
      "사회적 상황에서 나 혼자 말을 너무 많이 한다고 느끼는 경우가 있나요?",
  },
  {
    question:
      "대화 도중 상대방이 말을 끝내기 전에 끼어들어 상대방의 말을 끊는 경우가 있나요?",
  },
  {
    question:
      "차례를 지켜야 하는 상황에서 자신의 차례를 기다리는게 어려운가요?",
  },
  {
    question: "다른 사람이 바쁘게 일할 때 방해되는 행동을 하나요?",
  },
];

export const Page2 = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  const doChange = (e) => {
    const { name, value } = e.target;
    let newScore = [...scores];
    newScore[name] = value;
    setScores(newScore);
  };

  const doClick = () => {
    localStorage.setItem("adhd-score2", JSON.stringify(scores));
    navigate("/page3");
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
              {index + 10}. {item.question}
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
