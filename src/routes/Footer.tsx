import React, { useState } from "react";
import "../css/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

// interface FooterProps {
//   windowWidth: number;
//   onToggle: () => void;
// }

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedValue, setSelectedValue] =
    React.useState<string>("Family Site");

  const onSelect = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="pc_foot">
        <div className="flex_sb">
          <div className="foot_logo">dd</div>

          <div className="hmc_info">
            <p className="p_title">제휴문의</p>
            <small className="gray">TEL: 1811-5949 │ FAX: 070-7966-5949</small>
            <small className="gray">
              COPYRIGHT HMC NETWORKS Co., LTD. ALL RIGHTS RESERVED
            </small>
          </div>

          <div className="hmc_inquiry">
            <p className="p_title">간병인 매칭 문의</p>
            {/* <button className="foot_button">
              <span>간병인 문의 하러가기</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button> */}
          </div>

          <div>
            <div className="category_box" onClick={onSelect}>
              <p>{selectedValue}</p>
              {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
              {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
            </div>
            <div className="drop_box">
              <div className="drop_container">
                {isOpen && (
                  <ul>
                    <li onClick={onOptionClicked("HMC메디컬", 1)}>HMC메디컬</li>
                    <li onClick={onOptionClicked("케어네이션", 2)}>
                      케어네이션
                    </li>
                    <li onClick={onOptionClicked("DATA LAB.", 3)}>DATA LAB.</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex_start">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAA8CAMAAAAOueUtAAAAWlBMVEVHcEzlZhgATpjlZReAgIAAT5mBgYEATpjoZheAgIAATpgAT5gATZgdWJqAgIAmW5LvYhEATZnmZheAgIDpZhWAgIDmZheAgIDmZhfmZxbnaBgAT5jmZxiAgICDx3hyAAAAG3RSTlMAgLlFgTs6gD7AmtlXEGMgEHDR8Cemo9TucWASaU3YAAACwklEQVRo3u2X23ajMAxFHZdLAHNLCCGF/P9vjiXfsANtVzumA+PzkGWZF+9YR5IJCQoKCtq1zt/XvwMx/UiX/m3/EFzD6QAQ/DqaA0BMl27fVeH9dAGK3de35jFMJ7J/jH44QrfpzweAaDoSFHQQxSAdlXFsb0BQmtSHua+RY+NsUzki0ao3hRhRuYxaEY6aAaNWNzfoz2+yzw+d2ZTdLntqXW+1xtoIYkxFRB2IXIT1EsQ0NGbz7EJwjFruZFtBFFakIEob0YGY+g8hnretIUa0AXMgmI3oQuDShcAjV3gVfBFlWRZtBtHOskdDFHyJGcaWIdAWSxDiTjY1Np7VOrT4VuMVUWN8FwINvQpxNzvRLMsiPxAp/JTy0KmByDGTmPy6BAHj6xJEcpWn3RCCioyBApvPIISnS1NlLYjLJE7vQFy5CzJ9WAlRwWZ2R4jKE0QrMgZZDAST1TXX1rYgTr14m65Up3tC3Op0w/3SE0Qtjol5YyCotEqsq5cN0eBd9KsltnIgvDHIlAFHxzGiaIhSl6VCWduGIN2AFDbEHXp0hZmTWBCi7CbEGwRkTIs/BgJHkBRUKGs7EORdG9ytTonsdmbHI4OEgPSneB0GohgtsQUI0q9BkKdYmnrly9QGYjZ9KIjYZkBrv0AIW3wBAmuuLwYFQfU0qyByBwLq1AsE6VYgbnY6lXc1TPmEYDpnJERpzeAS8BWCPFwI7BP4v8+MjUzXCJV4g6j1zCQhZn1aXcsihLTFJ1Ns5rdjUzlpo42pgVBNYvY4YosQzbDS7CqyGUTJ0hQaGYNaCosYFpxFhurJx0NGmgcXTK4nLvU+7SAQr7wqUqpk0sBONf/gJZ2Cgv6mJ44AkR8C4ggU8Ujr/VPwrkbbeO/OlkMqpXn6ff32bcbF+HP9+lWW9AAQ/DLyA0AAB0vTHXsiKCgoKOg/1B9rRLYS+b9tqwAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>

          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAA8CAMAAAAOueUtAAAAh1BMVEVHcEw2P0dHRUVHRUQvN0U9QUdGRURGRURGRkRIRERFRUVGRUVHQ0VFRUUAKlbfACAAKFUAKFUAKVYAKVXLAyTcACDaACAFKVRHRETcACBNQEEKJ1TcACDbACCVDjEAKVVHRkTNAyNGG0TcACBVOUHdACDfACAtIUt8EjdWGUEAKlZHRkXcACH1l5waAAAAKnRSTlMAIJDgEDDwwIBAYNCgP4AVSGemx8WE2PBwW1Hh8EDAj7Cf1LBocDDPucmOg2E8AAAD5ElEQVRo3u2ZaXeqMBCG2cMmiOJu1erpch3//++7kwmQhE3bT+WcvB9aTqgwT2aNtSwjIyMjIyMjIyMjIT87L1GLwp8qgX0+3BttMnuCCN5CWP/1fTqVp9O/zf3sTY1hvqH9P60ftcrrYT4thoy8cDo+VJXXYkoMFEoH7oVyhbrV/jhl02EoKBmOj3JXr+QfgqOcjC/mlA7r405b/aDYOk2l2FJlLdd5azknZ7xPKKmvHQakeOcUe2WFqXLkeiyrscNibJqMWRZAFEJYfRCYuAjri0b138QsSFJqThGAeFITBbH6st4GQcW1/Oy5Rb4olQVQJa3ZK9eM20Rm1BDRbDZLIMGffgXB6kcoECktBL6EYBBJUPZCVh9Wvfdynhdv+lrkAqRaO/cDAEdCpLPZVoXQsIcgYgj2lncBV4VIw0rsGQSV12vef3PXzooIDUgCCEIZQF4CyBU3EEL+rIbgoeeCKwJQ2dNIhUhgyx/l4mfCtIbodXtvNFGb+x66jQG1VsYrfLAbWV6oYuD2eY4IBHo1mpvgW+FZTmgQIGKHQdy4iME2qpQ+gaD6ek+HbnNXNF7yEUHsuJ2CNIvbj7Z7Wk44TIGIoDJyxBP0YN0TL+eEgPjS59lisczE4JRrSXHZyr9J91VS0+sxENhAYlPWJpCOQmBOoIdTPSe2s0rPPCGmpkMn1e/3JW3tTUL4jHVqLCa1U2e305/YCAyBHYBt6dEdPa1OL+eEgLjPOysVxerxWMm3tmssJnX9+Fi4hDWFR0I46AYHGSnDByCsOIGg1Sf6m9IwxNJr+YErExD1OOKJLNtCIi58bh5PBdGLquuqKioQHvcCesMbCSfLnzUW2GH4m+FPoZjfleMdrr21GwUWWaXAOr60zNHnrAYiptsXKqKDEEoaVzd+Ov2JAymG1HxxVzUnCK2ZxzJ2rd7iweS0YNmRTSVnT6a54xBJHToJ3WjFLjzvEwMqeDgdte4MuKF2q4NqECC3tB5KXPpNVXQEomXxTyCs5TOIm27vhZMD2C9DMNhWPmSjEE1r2yoWvxha5xEIDIzysdMhHGGprxRdFwJZQ9oQnhtUGeQy78c58SKEPcyw4c3umOspEdAsGgwVXYRI2r2kxtGdhsVuLCd+luSLQYiMjx2t+RarOX/LXi26jfxOLHdPDwPnCdafAK9C2JshR+DWlcfWfOvx1uruf3sCi8K4sxKNGfdqzygGIKjA7rr1LPqT5+7+gFrwo91EjthDFAs+c5ST+/asw7C75dP6LvagIdDXsLvV5L4WL2TrXha8pH+8TfIfFEV2XmbZnCaK/NMyMjIyMjIyMjIy+jP6D+sRxmVDoDUHAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>

          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>

          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
