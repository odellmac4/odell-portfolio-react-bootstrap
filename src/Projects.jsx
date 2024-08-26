import TouchGrass from './images/touchgrass.png';
import RingwormRelief from './images/ringworm.png';
import LivreList from './images/livrelist.png';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

function Projects () {
  return (
    <>
      <section id='projects' className="text-center py-5">
      <div className="container py-5">
          <div className="row justify-content-center">
            <h2 className="fw-bold text-primary">Projects</h2>
            <p className="lead text-muted mb-5">
              View some of my latest projects
            </p>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-4 mx-auto mb-5">
              <div className="card h-100 shadow-lg border-0 bg-light">
                <img class="card-img-top img-fluid fixed-size" src={TouchGrass} alt='TouchGrass Project'/>
                <div className='card-body p-4'>
                  <h5 className='card-title mb-3'>TouchGrass</h5>
                  <div className='mb-2'>
                    <div className='badge bg-primary rounded-pill mx-1'>Ruby on Rails</div>
                    <div className='badge bg-primary rounded-pill mx-1'>Bulma</div>
                    <div className='badge bg-primary rounded-pill mx-1'>Heroku</div>
                  </div>
                  <p className='card-text fs-4'>
                    Touch Grass consumes the Trefle API in order to retrieve essential information about plants
                  </p>
                  <div className='card-footer bg-transparent mb-3'>
                    <a 
                    className='btn btn-outline-primary btn-sm text-uppercase'
                    href="https://github.com/touch-grass-2311/be-touch-grass-2311"
                    target="_blank"
                    >
                    <span className='me-1'><CodeOutlinedIcon/></span>
                    Source Code
                    </a>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto mb-5">
              <div className="card h-100 shadow-lg border-0 bg-light">
                <img class="card-img-top img-fluid fixed-size" src={RingwormRelief} alt='Ringworm Relief Project'/>
                <div className='card-body p-4'>
                  <h5 className='card-title mb-3 fw-b'>Ringworm Relief</h5>
                  <div className='mb-2'>
                    <div className='badge bg-primary rounded-pill mx-1'>Ruby on Rails</div>
                    <div className='badge bg-primary rounded-pill mx-1'>React</div>
                    <div className='badge bg-primary rounded-pill mx-1'>Express</div>
                  </div>
                  <p className='card-text fs-4'>
                  Use our education, tracking, and
                  orginization to track all your furry friends treatment.                  </p>
                  <div className='card-footer bg-transparent mb-3'>
                    <a 
                    className='btn btn-outline-primary btn-sm text-uppercase'
                    href="https://rr-as.vercel.app/"
                    target="_blank"
                    >
                    <span className='me-1'><RocketOutlinedIcon/></span>
                    Deployed Application
                    </a>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto mb-5">
              <div className="card h-100 shadow-lg border-0 bg-light">
                <img class=" img-fluid fixed-size" src={LivreList} alt='Livre List Project'/>
                <div className='card-body p-4'>
                  <h5 className='card-title mb-3'>LivreList</h5>
                  <div className='mb-2'>
                    <div className='badge bg-primary rounded-pill mx-1'>Ruby on Rails</div>
                    <div className='badge bg-primary rounded-pill mx-1'>React</div>
                    <div className='badge bg-primary rounded-pill mx-1'>Oauth2</div>
                  </div>
                  <p className='card-text fs-4'>
                  LivreList is an app designed to help you find books and organize them into personalized collections.                  
                  </p>
                  <div className='card-footer bg-transparent mb-3'>
                    <a 
                    className='btn btn-outline-primary btn-sm text-uppercase'
                    href="https://github.com/odellmac4/livre-list-be"
                    target="_blank"
                    >
                    <span className='me-1'><CodeOutlinedIcon/></span>
                    Source Code
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;