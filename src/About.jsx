import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import './About.css';


function About() {
  return (
    <>
      <section id="about" className="text-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <h2 className="fw-bold text-primary">About</h2>
            <p className="lead text-muted mb-5">
            As a Back End Software Engineer with experience in Customer Success and stakeholder management, I bring a unique perspective shaped by my extensive experience in customer-facing roles. Throughout my career, I have honed exceptional communication and interpersonal skills, enabling me to effectively collaborate with diverse teams and understand end-user needs. My background in customer success has instilled in me a deep understanding of user behaviors and preferences, which I leverage to design intuitive and user-friendly software solutions. By seamlessly integrating my customer-centric approach with my technical expertise, I am poised to develop backend solutions that not only meet technical requirements but also exceed user expectations, resulting in unparalleled user satisfaction and business success. 
            </p>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-4 mx-auto mb-5">
              <div className="d-flex mb-5 about">
                <span className="m-auto text-primary"><PaletteOutlinedIcon className='fs-1'/></span>
              </div>
              <h5 className='text-primary fs-1'>Design</h5>
              <p className='text-muted mb-0'>
                I create beautiful, modern designs!
              </p>
            </div>
            <div className="col-lg-4 mx-auto mb-5">
              <div className="d-flex mb-5 about">
                <span className="m-auto text-primary palette-icon"><CodeOutlinedIcon className='fs-1'/></span>
              </div>
              <h5 className='text-primary fs-1'>Development</h5>
              <p className='text-muted mb-0'>
                I develop responsive, scalable, and fast applications!
              </p>
            </div>
            <div className="col-lg-4 mx-auto mb-5">
              <div className="d-flex mb-5 about">
                <span className="m-auto text-primary"><SettingsOutlinedIcon className='fs-1'/></span>
              </div>
              <h5 className='text-primary fs-1'>Launch & Maintenance</h5>
              <p className='text-muted mb-0'>
                I create beautiful, modern designs!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About