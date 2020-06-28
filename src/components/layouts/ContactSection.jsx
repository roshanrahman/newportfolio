import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./ContactSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import Spacer from "../items/Spacer";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";
import WrittenCard from "../items/WrittenCard";
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
import { ReactComponent as EmailDarkSvg } from "../../assets/email-dark.svg";
import { ReactComponent as EmailMobileSvg } from "../../assets/email-mob.svg";
import { ReactComponent as EmailMobileDarkSvg } from "../../assets/email-mob-dark.svg";
import SocialButtonsList from "../items/SocialButtonsList";

class ContactSection extends Component {
  render() {
    return (
      <section className="contact-section">
        <div className="written-section">
          <h1>
            Let's <span className="contact-gradient">talk</span>
          </h1>
        </div>
        <p>
          I'd love to hear about exciting projects and great teams I can be a
          part of
        </p>
        <p>Shoot me an email about anything at</p>
        <p className="email-section">
          <span title="Click to copy email">
            <EmailSvg
              className="light-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />
            <EmailDarkSvg
              className="dark-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />
          </span>
          <p></p>
          <div className="buttons">
            <Button
              rounded
              gradient="primary"
              onPressed={() => {
                openLink("mailto:roshanrahman6399@gmail.com");
              }}
            >
              Copy Email
            </Button>
            <Button rounded outlined>
              Open Email App
            </Button>
          </div>
        </p>
        <p className="email-section-mobile">
          <span title="Click to copy email">
            <EmailMobileSvg
              className="light-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />
            <EmailMobileDarkSvg
              className="dark-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />{" "}
          </span>

          <br></br>
          <div className="buttons">
            <Button
              rounded
              gradient="primary"
              onPressed={() => {
                openLink("mailto:roshanrahman6399@gmail.com");
              }}
            >
              Open Email App
            </Button>
            <Button rounded outlined>
              Copy Email
            </Button>
          </div>
        </p>
        <SocialButtonsList />
        {/* <div className="content">
          
        </div> */}
      </section>
    );
  }
}

export default ContactSection;
