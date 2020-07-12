import React from 'react';
import PrimaryLinkButton from '../components/PrimaryLinkButton';

function Contact() {
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
            <dt>ご相談内容</dt>
            <dd>
              <textarea
                className="textarea"
                name="contact"
                rows="10"
              ></textarea>
            </dd>
          </dl>
        </div>
      </div>
      <div className="buttons is-centered mt-5">
        <PrimaryLinkButton text="前へ戻る" link="/contact/answer" />
        <PrimaryLinkButton text="次へ進む" link="/" />
      </div>
    </>
  );
}

export default Contact;
