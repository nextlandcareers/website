import "./jobsScreen.css";
import JobImg1 from "../../assets/electrical (1).jpg";
import JobImg2 from "../../assets/jobs_img2 (1).jpg";
import JobImg3 from "../../assets/bakery (1).jpg";
import JobImg4 from "../../assets/maintenance (1).jpg";
import JobImg5 from "../../assets/pipe (1).jpg";
import JobImg6 from "../../assets/welder (1).jpg";
import PlacedImg from "../../assets/placed__img.png";
import Job from "../../components/jobsScreenComponents/job/Job";

const JobsScreen = () => {
  const jobs = [
    {
      image: JobImg2,
      header: "Mechanical Engineers",
      desc: "If you have over 3 years of experience in mechanical engineering and a strong background in the field, this could be the perfect opportunity for you.",
      exp: "3 Years +",
      cntry: "Germany",
      edu: "Engineering Degree",
      tran: "English & Basic German",
    },
    {
      image: JobImg1,
      header: "Electrical Engineers",
      desc: "With 3+ years of hands-on experience in electrical engineering, your expertise is exactly what we're looking for.",
      exp: "3 Years +",
      cntry: "Germany",
      edu: "Engineering Degree",
      tran: "English & Basic German",
    },
    {
      image: JobImg3,
      header: "Bakery & Confectionery",
      desc: "Got 2+ years of experience in bakery and confectionery? This is your chance to showcase your skills and grow your career.",
      exp: "2 Years +",
      cntry: "Germany",
      edu: "Bsc in Hotel Management",
      tran: "English & Basic German",
    },
    {
      image: JobImg4,
      header: "Maintenance Technicians",
      desc: "For those with 5+ years of experience in maintenance techniques, this role offers a great opportunity to apply your knowledge.",
      exp: "5 Years +",
      cntry: "Germany ",
      edu: "Dipolma / Deg in Mechanical Engineering",
      tran: "English & Basic German",
    },
    {
      image: JobImg5,
      header: "Pipe Fabricator",
      desc: "Experienced in pipe fabrication? Your skills could be the ideal fit for this exciting opportunity.",
      exp: "5 Years +",
      cntry: "Germany & Hungary",
      edu: "Dipolma / Deg in Mechanical Engineering",
      tran: "English & Basic German",
    },
    {
      image: JobImg6,
      header: "Welder - MIG/TIG & ARC",
      desc: "With specialized expertise in MIG/TIG & ARC welding, this position is tailor-made for someone with your level of skill.",
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
                  We have successfully placed{" "}
                </div>
                <div className="placed__text placed__thin">
                  multiple candidates across europe.
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
