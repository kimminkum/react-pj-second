import newData from "../data/newData";
import primeumData from "../data/primeumData";
import halfData from "../data/halfData";
import classicData from "../data/classicData";
import stritData from "../data/stritData";

const Pizza: React.FC = () => {
  return (
    <div className="product">
      <div className="inner_box">
        <article>
          <h1 className="pizza_title">New</h1>

          <div className="grid4">
            {newData.map((item: any) => (
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
                    <div className="priceL">{item.priceL}</div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
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
          <h1 className="pizza_title">프리미엄</h1>

          <div className="grid4">
            {primeumData.map((item: any) => (
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
                    <div className="priceL">{item.priceL}</div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
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
          <h1 className="pizza_title">클래식</h1>

          <div className="grid4">
            {halfData.map((item: any) => (
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
                    <div className="priceL">{item.priceL}</div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
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
          <h1 className="pizza_title">클래식</h1>

          <div className="grid4">
            {classicData.map((item: any) => (
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
                    <div className="priceL">{item.priceL}</div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
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
          <h1 className="pizza_title">스트릿</h1>

          <div className="grid4">
            {stritData.map((item: any) => (
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
                    <div className="priceL">{item.priceL}</div>
                    <div className={`${item.priceM === "" ? "" : "priceM"}`}>
                      {item.priceM}
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
      </div>
    </div>
  );
};

export default Pizza;
