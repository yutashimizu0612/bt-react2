import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrimaryLinkButton from '../components/PrimaryLinkButton';
import { answerQuestion } from '../actions/contact';
import { moveToNext } from '../actions/currentQuestion';

const questionLength = 3; // 質問の数

class Answer extends Component {
  handleChange = (e, current) => {
    this.props.answerQuestion(e.target.value, current);
    // "stateの値"と"設問の番号"が一致した場合のみ、currentを1つ足す（一度表示されたら、設問を非表示にしないため）
    if (this.props.currentQuestion.answer === current && current < questionLength) {
      this.props.moveToNext(current);
    }
  };

  render() {
    const contact = this.props.contact;
    const currentQuestion = this.props.currentQuestion;
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
                <input
                  type="radio"
                  name="question1"
                  value="yes"
                  id="question1Yes"
                  checked={contact.question[1] === 'yes' ? true : false}
                  onChange={e => this.handleChange(e, 1)}
                />
                <label htmlFor="question1Yes" className="mr-3">
                  はい
                </label>
                <input
                  type="radio"
                  name="question1"
                  value="no"
                  id="question1No"
                  checked={contact.question[1] === 'no' ? true : false}
                  onChange={e => this.handleChange(e, 1)}
                />
                <label htmlFor="question1No">いいえ</label>
              </li>
              {currentQuestion.answer > 1 && (
                <li className="question-item">
                  <p className="mt-6">
                    現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
                  </p>
                  <input
                    type="radio"
                    name="healthState"
                    value="yes"
                    id="question2Yes"
                    checked={contact.question[2] === 'yes' ? true : false}
                    onChange={e => this.handleChange(e, 2)}
                  />
                  <label htmlFor="question2Yes" className="mr-3">
                    はい
                  </label>
                  <input
                    type="radio"
                    name="healthState"
                    value="no"
                    id="question2No"
                    checked={contact.question[2] === 'no' ? true : false}
                    onChange={e => this.handleChange(e, 2)}
                  />
                  <label htmlFor="question2No">いいえ</label>
                </li>
              )}
              {currentQuestion.answer > 2 && (
                <li className="question-item">
                  <p className="mt-6">
                    過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
                  </p>
                  <input
                    type="radio"
                    name="hospitalization"
                    value="yes"
                    id="question3Yes"
                    checked={contact.question[3] === 'yes' ? true : false}
                    onChange={e => this.handleChange(e, 3)}
                  />
                  <label htmlFor="question3Yes" className="mr-3">
                    はい
                  </label>
                  <input
                    type="radio"
                    name="hospitalization"
                    value="no"
                    id="question3No"
                    checked={contact.question[3] === 'no' ? true : false}
                    onChange={e => this.handleChange(e, 3)}
                  />
                  <label htmlFor="question3No">いいえ</label>
                </li>
              )}
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
}

const mapStateToProps = state => ({
  contact: state.contact,
  currentQuestion: state.currentQuestion,
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: (value, num) => dispatch(answerQuestion(value, num)),
  moveToNext: current => dispatch(moveToNext(current)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
