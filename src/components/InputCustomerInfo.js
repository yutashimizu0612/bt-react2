import React from 'react';

function InputCustomerInfo() {
  return (
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
          <dt className="mt-5">生年月日</dt>
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
                  <option>1</option>
                </select>
              </div>
              <span className="mt-2 ml-2 mr-4 has-text-justified">月</span>
            </div>
            <div className="is-inline-flex">
              <div className="select">
                <select>
                  <option>1</option>
                </select>
              </div>
              <span className="mt-2 ml-2 mr-4 has-text-justified">日</span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default InputCustomerInfo;
