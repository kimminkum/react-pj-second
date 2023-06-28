import React, { useState } from "react";
import onceData from "../data/onceData";
import riceData from "../data/riceData";

const Oncemenu: React.FC = () => {
  return (
    <div className="product">
      <div className="inner_box">
        <div className="banner_box">
          <img
            src="https://cdn.dominos.co.kr/domino/pc/images/menu/banner-personPizza_w.jpg"
            alt=""
          />
        </div>

        <article>
          <h1 className="pizza_title">1인 피자</h1>

          <div className="grid4">
            {onceData.map((item: any) => (
              <div className="pro_menu" key={item.id}>
                <div className="img_box">
                  <img src={item.img} alt="" />
                  <div className="screen"></div>
                </div>

                <div className="txt_box">
                  <div className="pro_name">
                    {item.name}
                    <span className={item.class}></span>
                  </div>
                  <div className="pro_price flex">
                    <div className={`${item.priceL === "" ? "" : "priceL"}`}>
                      {item.priceL}
                    </div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
                    </div>
                    <div className={`${item.priceO === "" ? "" : "priceO"}`}>
                      {item.priceO}
                    </div>
                  </div>

                  <div>
                    <p>{item.hashtag1}</p>
                    <p>{item.hashtag2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article>
          <h1 className="pizza_title">1인 피자</h1>

          <div className="grid4">
            {riceData.map((item: any) => (
              <div className="pro_menu" key={item.id}>
                <div className="img_box">
                  <img src={item.img} alt="" />
                  <div className="screen"></div>
                </div>

                <div className="txt_box">
                  <div className="pro_name">
                    {item.name}
                    <span className={item.class}></span>
                    <span
                      className={`${item.class2 === "" ? "" : item.class2}`}
                    ></span>
                  </div>
                  <div className="pro_price flex">
                    <div className={`${item.priceL === "" ? "" : "priceL"}`}>
                      {item.priceL}
                    </div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
                    </div>
                    <div className={`${item.priceO === "" ? "" : "priceO"}`}>
                      {item.priceO}
                    </div>
                    <div className={`${item.price === "" ? "" : "price"}`}>
                      {item.price}
                    </div>
                  </div>

                  <div>
                    <p>{item.hashtag1}</p>
                    <p>{item.hashtag2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="warning">
          <div>
            <p>※ 유의사항</p>
          </div>

          <div className="flex_sb">
            <div>
              <small className="li_style">
                단종으로 인한 상품권 사용 안내 : 동일 가격 또는 더 높은 가격의
                제품으로 대체 주문 가능
                <br /> (상품권에 명시된 제품보다 더 높은 가격대의 제품 주문 시,
                금액 추가 발생)
                <br />
                (단, 상품권에 명시된 제품보다 저렴한 제품 주문 시 발생하는
                차액에 대해서는 환불 처리 불가)
              </small>
              <small className="li_style">
                일부 리조트 및 특수매장은 상기 가격과 차이가 있음
              </small>
              <small className="li_style">
                모든 사진은 이미지 컷이므로 실제 제품과 다를 수 있습니다.
              </small>
            </div>

            <div>
              <small>
                제품의 원산지, 영양성분 및 알레르기 유발성분을 먼저 확인하세요.
              </small>
              <button>원산지·영양성분·알레르기 유발성분 정보 {">"}</button>
            </div>
          </div>
        </article>
      </div>

      <div></div>
    </div>
  );
};

export default Oncemenu;
