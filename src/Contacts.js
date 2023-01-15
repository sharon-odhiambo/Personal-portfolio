import React from 'react';

const Contacts = () => (
  <form className="form pt-2" id="form" name="form" action="https://formspree.io/f/xeqndgga" method="post">
    <h4>Contact Me</h4>
    <p className="pt-2 ps-1">
      If you have an application you are interested in developing,
      a feature that you need built or a project that needs coding. I’d love to help with it
      {' '}

    </p>
    <ul className="form-sections">
      <li>
        <input className="storage" type="text" id="name" name="user_name" placeholder="Name" maxLength="30" required />
      </li>
      <li>
        <input className="storage" type="email" id="mail" placeholder="Enter Email" name="user_mail" required />
      </li>
      <li>
        <textarea className="textarea storage" id="msg" name="user_message" placeholder="Write your message here" maxLength="500" required />
      </li>
      <li>
        <button type="submit" className="but"><span>Get in Touch</span></button>
      </li>
      <li id="error-message" className="error-message" />
    </ul>
  </form>
);

export default Contacts;
