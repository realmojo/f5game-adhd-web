import React, { useState, useEffect } from "react";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";
import { AdsenseMain } from "./adsense/main";

const { Option } = Select;

const adhdArr = ["예", "아니오"];

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (value) => {
    localStorage.setItem("my-adhd", value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    localStorage.setItem("my-adhd", "예");
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center pt-16">ADHD 테스트 자가진단</h1>
      <p className="text-center mb-2">
        본인이 ADHD라고 생각하시나요? 선택해주세요.
      </p>
      <div className="text-center mb-2">
        <Select
          size="large"
          defaultValue="선택해주세요"
          onChange={handleChange}
          style={{ width: 336 }}
        >
          {adhdArr.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
      </div>
      <AdsenseMain />
      <div className="text-center mt-2 mb-4">
        {isLoading ? (
          <Button
            style={{ width: 336 }}
            className="btn-start"
            type="primary"
            size="large"
          >
            <a href="/page1">START</a>
          </Button>
        ) : (
          ""
        )}
      </div>
      <article>
        <div className="post">
          <h2>ADHD란</h2>
          <p>
            성인 ADHD는 주의력결핍 과잉행동장애(ADHD)라는 질환입니다. 아마
            생소하실 겁니다. 국내에서는 아직까지 잘 알려지지 않은 질병이기
            때문입니다. 많은 환자분들이 단순히 산만하다고 여겨 치료시기를 놓치는
            경우가 많습니다. 실제로 우리나라 전체 인구의 5%정도가 앓고 있다고
            합니다. 현재 의학계에서도 주목하고 있는 질환이기도 하죠. 당신이 만약
            집중력이 부족하고 충동조절이 힘들다면 꼭 한번 읽어보시기 바랍니다.
            혹시 나도 모르는 사이에 증상을 키우고 있지는 않은지 점검해보는
            시간이 될 것입니다.
          </p>
        </div>
        <div className="post">
          <h2>ADHD 검사</h2>
          <p>
            주의력결핍 과잉행동장애(ADHD) 증상 여부를 확인할 수 있는 자가진단
            테스트입니다. 주의력결핍 과잉행동장애(ADHD)는 아동기에 주로 나타나는
            장애이지만, 최근에는 성인에게도 많이 나타나고 있습니다. 성인 ADHD
            환자들은 직장생활이나 대인관계에도 어려움을 겪는 경우가 많아
            사회적으로도 문제가 되고 있습니다. 자가진단 테스트를 통해 자신의
            상태를 점검해보고 전문가와 상담을 받아보세요.
          </p>
        </div>
        <div className="post">
          <h2>관련검사</h2>
          <ul>
            <li>성인 주의력결핍 과잉행동장애 자가보고척도(ASRS)</li>
            <li>성인 주의력결핍 과잉행동장애 평가척도(AARS)</li>
            <li>코너스 성인 주의력결핍 과잉행동장애 평정척도(CAARS)</li>
            <li>성인 ADHD 진단을 위한 면담(DIVA)</li>
            <li>
              이렇게 얻은 다양한 정보를 종합하여 최종적으로 ADHD 진단을 내리게
              된다.
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};
