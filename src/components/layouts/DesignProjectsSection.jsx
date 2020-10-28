import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./DesignProjectsSection.scss";
import Button from "../items/buttons/Button";
import PortfolioItemCard from "../items/PortfolioItemCard";

class DesignProjectsSection extends Component {
  render() {
    if (this.props.projects.length < 1) {
      return "";
    }
    return (
      <section className="portfolio-section">
      
          <div className="title-card ">
            <h1>
              <span className="design-gradient">Design</span> projects
            </h1>
            {/* <p>You’ll also find some stuff on my profiles on</p>
            <div className="buttons_list">
            <a
              href="https://www.behance.net/roshanrahman"
              target="_blank"
              rel="noopener noreferrer"
              style={{marginRight: "8px"}}
            >
              <Button
                textSize="1.286rem"
                otherClasses="shadow-behance"
                color="var(--behance-color)"
                rounded
                icon="behance-fill"
                shadowColor="var(--behance-color)"
              >
                Behance
              </Button>
            </a>
            <a
              href="https://dribbble.com/roshan6399"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                textSize="1.286rem"
                otherClasses="shadow-dribbble"
                color="var(--dribbble-color)"
                rounded
                icon="dribbble-outlined"
                shadowColor="var(--dribbble-color)"
              >
                Dribbble
              </Button>
            </a>
            </div> */}
          </div>
          <PortfolioItemCard
          title="Redesigning Nitya Gaan"
          description="Gave this handy reading app a makeover, to increase its usability, and style it with modern aesthetics"
          actionDescription="Read case study on Behance"
          color="#FF5C00"
          endColor="#FF5C0088"
          shadowColor="#FF5C0066"
          imageUrl="https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/portfolio.jpg"
          linkUrl="https://www.behance.net/gallery/104842255/Redesigning-Nitya-Gaan-Case-Study"
          />
          {/* <PortfolioItemCard
          title="Redesigning Nitya Gaan"
          description="A project to overhaul the user interface to provide a more comfortable user experience and style it with modern, clean visual design"
          actionDescription="Read case study on Behance"
          color="#FF5C00"
          shadowColor="#FF5C0066"
          /> */}
         
          
          <div className="title-card  mobile-block">
            <div className="spacer" style={{ marginTop: "48px" }}></div>
            <p>You'll also find some stuff on my </p>
            <div className="buttons_list">
            <a
              href="https://www.behance.net/roshanrahman"
              target="_blank"
              rel="noopener noreferrer"
              style={{marginRight: "8px"}}
            >
              <Button
                textSize="1.286rem"
                otherClasses="shadow-behance"
                color="var(--behance-color)"
                rounded
                icon="behance-fill"
                shadowColor="var(--behance-color)"
              >
                Behance
              </Button>
            </a>
            <a
              href="https://dribbble.com/roshan6399"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                textSize="1.286rem"
                otherClasses="shadow-dribbble"
                color="var(--dribbble-color)"
                rounded
                icon="dribbble-outlined"
                shadowColor="var(--dribbble-color)"
              >
                Dribbble
              </Button>
            </a>
            </div>
          </div>
       
      </section>
    );
  }
}

export default DesignProjectsSection;
