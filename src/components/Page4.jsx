import React, { useState, useEffect } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  {
    question: "손발을 가만히 있지 못한다.",
  },
  {
    question: "수업 중 혹은 회의 중 자리에 있기 힘들다.",
  },
  {
    question: "상황에 맞지 않게 돌아다니거나 지나치게 기어오르는 일이 있다.",
  },
  { question: "차분하게 노는 것이 힘들다." },
  {
    question: "끊임없이 움직이거나 마치 모터 달린 것처럼 행동하는 경우가 있다.",
  },
  {
    question: "지나치게 말을 많이 하는 것을 좋아한다.",
  },
  {
    question: "질문이 끝나기도 전에 답변을 한다.",
  },
  {
    question: "자기차례를 기다리기 힘들다.",
  },
  {
    question: "다른 사람을 참견하는 일이 종종 있다.",
  },
];

export const Page4 = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  const doChange = (e) => {
    const { name, value } = e.target;
    let newScore = [...scores];
    newScore[name] = value;
    setScores(newScore);
  };

  const doClick = () => {
    localStorage.setItem("adhd-score4", JSON.stringify(scores));
    navigate("/complete");
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
              {index + 28}. {item.question}
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
