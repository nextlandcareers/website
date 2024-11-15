import "./job.css";
import JobsBackground from "../../../assets/job_details_background.png";
import Star from "../../../assets/star.png";
import Earth from "../../../assets/earth.png";
import Education from "../../../assets/education.png";
import Translate from "../../../assets/translation.png";
import Highlight from "../highlight/Highlight";

const Job = ({ image, header, desc, exp, cntry, edu, tran }) => {
  return (
    <div className="jobsScreen__job__container">
      <div
        className="jobsScreen__job__details__container"
        style={{
          backgroundImage: `url(${JobsBackground})`,
          backgroundSize: "cover",
        }}
      >
        <div className="jobsScreen__job__img__container">
          <img src={image} alt="job_img" className="jobsScreen__job__img" />
        </div>

        <div className="jobsScreen__jobText__container">
          <div className="jobsScreen__header">{header}</div>
          <div className="jobsScreen__description">{desc}</div>
        </div>

        <div className="jobsScreen__job_image_header_small_screen">
          <div className="jobsScreen__job__img__container_small_screen">
            <img
              src={image}
              alt="job_img"
              className="jobsScreen__job__img_smal_screen"
            />
          </div>

          <div className="jobsScreen__jobText__container_small_screen">
            <div className="jobsScreen__header_small_screen">{header}</div>
          </div>
        </div>

        <div className="jobsScreen__description_small_screen">{desc}</div>
      </div>
      <div className="jobsScreen__seperator__line"></div>

      <div className="jobsScreen__job__highllights__container">
        <Highlight image={Star} heading={"Experience"} info={exp} />
        <Highlight image={Earth} heading={"Country"} info={cntry} />
        <Highlight
          image={Education}
          heading={"Educational Qualification"}
          info={edu}
        />
        <Highlight image={Translate} heading={"Language Skills"} info={tran} />
      </div>

      <div className="jobsScreen__job__highllights_small_screen_container">
        <div className="jobsScreen__job__highllights__container1_small_screen">
          <Highlight image={Star} heading={"Experience"} info={exp} />
          <Highlight image={Earth} heading={"Country"} info={cntry} />
        </div>

        <div className="jobsScreen__job__highllights__container2_small_screen">
          <Highlight
            image={Education}
            heading={"Educational Qualification"}
            info={edu}
          />
          <Highlight
            image={Translate}
            heading={"Language Skills"}
            info={tran}
          />
        </div>
      </div>
    </div>
  );
};

export default Job;
