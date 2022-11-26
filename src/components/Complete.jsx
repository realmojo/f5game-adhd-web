import React, { useState, useEffect } from "react";
import { Button, Spin } from "antd";
import { Share } from "./Share";
import { AdsenseLoading } from "./adsense/loading";
import { AdsenseResult } from "./adsense/result";

export const Complete = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResult, setIsResult] = useState(false);
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let sum = 0;
    for (let i = 1; i <= 4; i += 1) {
      const scores = JSON.parse(localStorage.getItem(`adhd-score${i}`));
      for (const score of scores) {
        if (score) {
          sum += Number(score);
        }
      }
    }
    if (0 <= sum && sum <= 36) {
      setName("매우 양호");
      setText(
        "당신은 삶을 살아가는데 있어서 주의력 및 산만함이 거의 없는 상태 입니다. 마음이 평온한 상태이며 이타적인 행동을 하는 사람입니다. 당신과 같은 사람이 많을수록 세상은 더 행복해질 것입니다. 현재의 마음가짐으로 앞으로도 계속 삶을 이어나가시길 바라겠습니다."
      );
    } else if (37 <= sum && sum <= 72) {
      setName("양호 단계");
      setText(
        "현대 사회인들은 누구나 한 가지씩 사소한 실수를 할 때도 있습니다. 하지만 이는 보편적으로 누구에게나 나타나는 증상이며 당신은 성인 ADHD가 아닙니다. 다만 심신을 안정시키는 스트레칭이나 가벼운 산책을 하면서 삶을 유지하면 더 좋은 감정상태를 만드실 수 있습니다."
      );
    } else if (73 <= sum && sum <= 108) {
      setName("정상 단계");
      setText(
        "당신은 다소 집중력이 부족할 수 있고 충동적인 행동을 간혹 할 수도 있으나 본인의 의지로 충분히 잘 해나갈 수 있습니다. 아직까지는 성인 ADHD라고 보기에는 어렵습니다. 하지만 조심해야 할 단계 입니다. 따듯한 차를 마시면서 심신을 가라앉히는 행동을 추천드립니다."
      );
    } else if (109 <= sum && sum <= 144) {
      setName("경고 단계");
      setText(
        "성인 ADHD로 가기 마지막 단계이며 음주가무에 빠져서 건강과 사회생활 및 전반적인 삶을 살아가기 어려울 수 있습니다. 주변을 조금씩 돌아보고 충동적이나 감정훈련 조절 및 취미새활 같은 것을 즐기면서 삶을 살다보면 자연스레 좋아지는 경우가 많습니다."
      );
    } else if (145 <= sum && sum <= 180) {
      setName("성인 ADHD 매우 높음");
      setText(
        "당신은 성인 ADHD일 확률이 매우 높습니다. 이 질환을 오래가지고 계시면 기분장애나 충동억제등을 조절하기가 매우 어렵습니다. 더 나아가 우울장애를 일으켜 내 주변의 사람들까지 괴로울 수 있습니다. 가까운 정신과 병원에 들려서 자세한 상담을 받아보시기를 추천드립니다."
      );
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      {!isResult ? (
        <>
          <h1 className="text-3xl text-center pt-16">
            결과를 기다리고 있습니다.
          </h1>
          {isLoading ? (
            <div className="text-center pt-4 mb-2">
              <Spin size="large" />
            </div>
          ) : (
            ""
          )}
          <AdsenseLoading />
          {isLoading ? (
            ""
          ) : (
            <div className="text-center">
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
                onClick={() => setIsResult(true)}
              >
                확인하기
              </Button>
            </div>
          )}
        </>
      ) : (
        <React.Fragment>
          <div className="pt-8">
            <h1 className="text-center text-2xl font-bold">
              당신의 성인 ADHD 상태는?
            </h1>

            <AdsenseResult />

            <div className="text-center pt-4 text-4xl">{name}</div>
            <div className="text-left px-4 pt-4 pb-4">{text}</div>
          </div>
          <Share />
          <div className="text-center">
            <div className="text-center pb-4 text-3xl">
              다른 테스트 하러가기
            </div>
            <div className="text-center pb-4">
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://f5game.co.kr">F5 Games</a>
              </Button>
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://mbti.f5game.co.kr">MBTI 검사 테스트</a>
              </Button>
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://color-age.f5game.co.kr">정신연령 테스트</a>
              </Button>
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://color.f5game.co.kr">색맹 테스트</a>
              </Button>
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://color.f5game.co.kr">영적동물 테스트</a>
              </Button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
