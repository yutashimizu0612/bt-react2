import React from 'react';
import { connect } from 'react-redux';
import PrimaryLinkButton from '../components/PrimaryLinkButton';
import { inputContactDetail } from '../actions';

function Contact(props) {
  return (
    <>
      <div className="form-box">
        <div className="form-box__header">
          <span className="tag is-info form-box__tag">STEP3</span>
          <p className="is-size-5 has-text-centered">
            ご相談内容をご記入ください
          </p>
        </div>
        <div className="form-box__content">
          <dl>
            <dt className="form-box__title">ご相談内容</dt>
            <dd>
              <textarea
                className="textarea"
                name="contact"
                rows="10"
                value={props.contact.detail}
                onChange={e => props.inputContactDetail(e.target.value)}
              ></textarea>
            </dd>
          </dl>
        </div>
      </div>
      <div className="buttons is-centered mt-5">
        <PrimaryLinkButton text="前へ戻る" link="/contact/answer" />
        <PrimaryLinkButton text="次へ進む" link="/contact/confirm" />
      </div>
    </>
  );
}

const mapStateToProps = state => ({ contact: state.contact });

const mapDispatchToProps = dispatch => ({
  inputContactDetail: value => dispatch(inputContactDetail(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
