import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrimaryLinkButton from '../components/PrimaryLinkButton';

class Confirm extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <>
        <div className="form-box">
          <div className="form-box__header">
            <span className="tag is-info form-box__tag">STEP4</span>
            <p className="is-size-5 has-text-centered">
              以下の内容をご確認ください
            </p>
          </div>
          <div className="form-box__content">
            <dl>
              <dt className="form-box__title">性別</dt>
              <dd>{contact.gender === 'male' ? '男性' : '女性'}</dd>
              <dt className="mt-6 form-box__title">生年月日</dt>
              <dd>
                {contact.birthdate.year}年{contact.birthdate.month}月
                {contact.birthdate.day}日
              </dd>
              <dt className="mt-6 form-box__title">
                現在、生命保険に加入されていますか？
              </dt>
              <dd>{contact.question[1] === 'yes' ? 'はい' : 'いいえ'}</dd>
              <dt className="mt-6 form-box__title">
                現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
              </dt>
              <dd>{contact.question[2] === 'yes' ? 'はい' : 'いいえ'}</dd>
              <dt className="mt-6 form-box__title">
                過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
              </dt>
              <dd>{contact.question[3] === 'yes' ? 'はい' : 'いいえ'}</dd>
              <dt className="mt-6 form-box__title">ご相談内容</dt>
              <dd>{contact.detail}</dd>
            </dl>
          </div>
        </div>
        <div className="buttons is-centered mt-5">
          <PrimaryLinkButton text="前へ戻る" link="/contact/detail" />
          <PrimaryLinkButton text="送信" link="/" />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
});

export default connect(mapStateToProps, null)(Confirm);
