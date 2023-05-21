import founder from '../Images/Founder2.jpeg'
import cssLogo from '../Images/triple-logo.png'
import reactLogo from '../Images/react-logo.png'
import postgresLogo from '../Images/postgresql-logo.png'

import './Contact.css'

export default function Contact() {

    return (
        <main className="about-page">
          <article>

            <h1>
              Contact Me
            </h1>

            <p>
              github.com/SangunPark96
            </p>

            <p>
              linkedin.com/in/sangunpark/
            </p>

              <div>
                <h3>About Me:</h3>
                  <img className="founder-img" src={founder} alt="founder-pic" width="250" height="250"></img>
                  <h2>SangUn Park</h2>
                  <h3>Hi, I'm SangUn Park. A passionate Front-end React Developer based in New York City.</h3>
                  <h4>Currently enrolled in Pursuit Cohort 9.3 to further my skills as a full-stack web developer.</h4>
              </div>
              <div className='Logo-List'>
              
              <img className="css-img" src={cssLogo} alt="css-img" width="300" height="70"></img>
              <img className="react-img" src={reactLogo} alt="react-img" width="70" height="70"></img>
              <img className="postgres-img" src={postgresLogo} alt="postgres-img" width="90" height="70"></img>
              </div>

          </article>
        </main>
    );
  }