import './Hero.css'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import Odell from './images/odell_pic.JPG';
import HeroImage from './images/hero.jpeg';

function Hero() {
  return (
    <>
      <header className='bg-light py-5'>
        <div className='container px-5'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-xl-7 col-xxl-6'>
              <div className='my-5'>
                <h2 className='text-center text-secondary fw-bold mb-2 fc-blue'>Hey! I'm Odell</h2>
                <h2 className='text-primary text-center fw-bold mb-2'>a software engineer</h2>
                <p className='lead text-muted mb-4'>
                I've honed my expertise in object-oriented programming, relational database management
                systems, test-driven development, and collaborating with other developers on fully distributed teams.
                </p>
                <div className='d-grid gap-3 d-sm-flex justify-content-center'>
                  <a 
                    className='btn btn-primary btn-large text-uppercase' href='#about'>Learn more
                    <span className='ms-2'><HelpOutlinedIcon/></span>
                  </a>
                  <a 
                    className='btn btn-primary btn-large text-uppercase' href='#projects'>View My Work
                    <span className='ms-2'><ManageSearchOutlinedIcon/></span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-5 col-xxl-6 justify-content-center'>
              <img className='hero-image img-fluid rounded-3 my-5' src={Odell} alt='Hero' />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero