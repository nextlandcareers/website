import "./jobsScreen.css";
import JobImg1 from "../../assets/electrical (1).jpg";
import JobImg2 from "../../assets/jobs_img2 (1).jpg";
import JobImg3 from "../../assets/bakery (1).jpg";
import JobImg4 from "../../assets/maintenance (1).jpg";
import JobImg5 from "../../assets/pipe (1).jpg";
import JobImg6 from "../../assets/welder (1).jpg";
import PlacedImg from "../../assets/placed__img.png";
import Job from "../../components/jobsScreenComponents/job/Job";
import { useTranslation } from "react-i18next";

const JobsScreen = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      image: JobImg2,
      header: t("jobHeader1"),
      desc: t("jobDesc1"),
      exp: "3 Years +",
      cntry: "Germany",
      edu: "Engineering Degree",
      tran: "English & Basic German",
    },
    {
      image: JobImg1,
      header: t("jobHeader2"),
      desc: t("jobDesc2"),
      exp: "3 Years +",
      cntry: "Germany",
      edu: "Engineering Degree",
      tran: "English & Basic German",
    },
    {
      image: JobImg3,
      header: t("jobHeader3"),
      desc: t("jobDesc3"),
      exp: "2 Years +",
      cntry: "Germany",
      edu: "Bsc in Hotel Management",
      tran: "English & Basic German",
    },
    {
      image: JobImg4,
      header: t("jobHeader4"),
      desc: t("jobDesc4"),
      exp: "5 Years +",
      cntry: "Germany ",
      edu: "Dipolma / Deg in Mechanical Engineering",
      tran: "English & Basic German",
    },
    {
      image: JobImg5,
      header: t("jobHeader5"),
      desc: t("jobDesc5"),
      exp: "5 Years +",
      cntry: "Germany & Hungary",
      edu: "Dipolma / Deg in Mechanical Engineering",
      tran: "English & Basic German",
    },
    {
      image: JobImg6,
      header: t("jobHeader6"),
      desc: t("jobDesc6"),
      exp: "5 Years +",
      cntry: "Germany & Hungary",
      edu: "Dipolma / Deg in Mechanical Engineering",
      tran: "English & Basic German",
    },
  ];
  return (
    <>
      <div className="jobsScreen__main__container">
        <div className="jobsScreen__linearGradient__bottom"></div>
        <div className="jobsScreen__radialGradient__rightCorner"></div>
        <div className="jobsScreen__linerGradient__left"></div>

        <div className="jobsScreen__main__jobs__container plus-jakarta">
          <div className="jobsScreen__main__header">Top Job Openings</div>
          <div className="jobsScreen__jobs__container">
            {jobs.map((job, index) => (
              <Job
                key={index}
                image={job.image}
                header={job.header}
                desc={job.desc}
                exp={job.exp}
                cntry={job.cntry}
                edu={job.edu}
                tran={job.tran}
              />
            ))}
          </div>

          <div className="jobsScreen__placed__container">
            <div className="jobsScreen__placed__details__container">
              <div className="placed__img__container">
                <img
                  src={PlacedImg}
                  alt="placement_img"
                  className="placed__img"
                />
              </div>
              <div className="placed__desc__container plus-jakarta">
                <div className="placed__text placed__bold">
                  {t("jobCaption1")}
                </div>
                <div className="placed__text placed__thin">
                  {t("jobCaption2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsScreen;
