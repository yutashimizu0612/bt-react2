import React from 'react';
import PrimaryLinkButton from '../components/PrimaryLinkButton';

function Answer() {
  return (
    <>
      <div className="form-box">
        <div className="form-box__header">
          <span className="tag is-info form-box__tag">STEP2</span>
          <p className="is-size-5 has-text-centered">以下にお答えください</p>
        </div>
        <div className="form-box__content">
          <ul>
            <li className="question-item">
              <p>現在、生命保険に加入されていますか？</p>
              <input type="radio" name="question1" id="question1Yes" />
              <label htmlFor="question1Yes" className="mr-3">
                はい
              </label>
              <input type="radio" name="question1" id="question1No" />
              <label htmlFor="question1No">いいえ</label>
            </li>
            <li className="question-item">
              <p className="mt-6">
                現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
              </p>
              <input type="radio" name="healthState" id="question2Yes" />
              <label htmlFor="question2Yes" className="mr-3">
                はい
              </label>
              <input type="radio" name="healthState" id="question2No" />
              <label htmlFor="question2No">いいえ</label>
            </li>
            <li className="question-item">
              <p className="mt-6">
                過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
              </p>
              <input type="radio" name="hospitalization" id="question3Yes" />
              <label htmlFor="question3Yes" className="mr-3">
                はい
              </label>
              <input type="radio" name="hospitalization" id="question3No" />
              <label htmlFor="question3No">いいえ</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="buttons is-centered mt-5">
        <PrimaryLinkButton text="前へ戻る" link="/" />
        <PrimaryLinkButton text="次へ進む" link="/contact/detail" />
      </div>
    </>
  );
}

export default Answer;