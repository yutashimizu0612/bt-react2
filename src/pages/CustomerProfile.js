import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrimaryLinkButton from '../components/PrimaryLinkButton';
import years from '../function/years';
import {
  selectGender,
  selectBirthYear,
  selectBirthMonth,
  selectBirthDay,
} from '../actions';

class CustomerProfile extends Component {
  render() {
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
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  id="male"
                  onChange={e => this.props.selectGender(e.target.value)}
                />
                <label htmlFor="male" className="mr-3">
                  男性
                </label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  id="female"
                  onChange={e => this.props.selectGender(e.target.value)}
                />
                <label htmlFor="female">女性</label>
              </dd>
              <dt className="mt-6">生年月日</dt>
              <dd>
                <div className="is-inline-flex">
                  <div className="select">
                    <select
                      onChange={e => this.props.selectBirthYear(e.target.value)}
                    >
                      <option>選択してください</option>
                      {years.map((year, index) => (
                        <option key={index}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <span className="mt-2 ml-2 mr-4 has-text-justified">年</span>
                </div>
                <div className="is-inline-flex">
                  <div className="select">
                    <select
                      onChange={e =>
                        this.props.selectBirthMonth(e.target.value)
                      }
                    >
                      {months.map(month => (
                        <option key={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                  <span className="mt-2 ml-2 mr-4 has-text-justified">月</span>
                </div>
                <div className="is-inline-flex">
                  <div className="select">
                    <select
                      onChange={e => this.props.selectBirthDay(e.target.value)}
                    >
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
}

const mapStateToProps = state => ({ contact: state.contact });

const mapDispatchToProps = dispatch => ({
  selectGender: e => dispatch(selectGender(e)),
  selectBirthYear: e => dispatch(selectBirthYear(e)),
  selectBirthMonth: e => dispatch(selectBirthMonth(e)),
  selectBirthDay: e => dispatch(selectBirthDay(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);
