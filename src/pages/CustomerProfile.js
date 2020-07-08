import React from 'react';
import PrimaryLinkButton from '../components/PrimaryLinkButton';

function CustomerProfile() {
  const years = [];
  const months = [...Array(12).keys()].map(num => ++num);
  const days = [...Array(31).keys()].map(num => ++num);
  return (
    <>
      <div className="form-box">
        <div className="form-box__header">
          <span className="tag is-info form-box__tag">STEP1</span>
          <p className="is-size-5 has-text-centered">
            お客様の情報を入力してください。
          </p>
        </div>
        <div className="form-box__content">
          <dl>
            <dt>性別</dt>
            <dd>
              <input type="radio" value="male" name="gender" id="male" />
              <label htmlFor="male" className="mr-3">
                男性
              </label>
              <input type="radio" value="female" name="gender" id="female" />
              <label htmlFor="female">女性</label>
            </dd>
            <dt className="mt-6">生年月日</dt>
            <dd>
              <div className="is-inline-flex">
                <div className="select">
                  <select>
                    <option>1990年（平成2）</option>
                  </select>
                </div>
                <span className="mt-2 ml-2 mr-4 has-text-justified">年</span>
              </div>
              <div className="is-inline-flex">
                <div className="select">
                  <select>
                    {months.map(month => (
                      <option key={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <span className="mt-2 ml-2 mr-4 has-text-justified">月</span>
              </div>
              <div className="is-inline-flex">
                <div className="select">
                  <select>
                    {days.map(day => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>
                </div>
                <span className="mt-2 ml-2 mr-4 has-text-justified">日</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div className="buttons is-centered mt-5">
        <PrimaryLinkButton text="次へ進む" link="/contact/answer" />
      </div>
    </>
  );
}

export default CustomerProfile;
