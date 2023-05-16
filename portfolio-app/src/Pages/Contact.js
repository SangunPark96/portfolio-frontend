import founder from '../Images/Founder2.jpeg'
import './Contact.css'

export default function Contact() {

    return (
        <main className="about-page">
          <article>

            <h1>
              Contact Me
            </h1>

            <p>
              Github: https://github.com/SangunPark96
            </p>

            <p>
              Linkedin: https://www.linkedin.com/in/sangunpark/
            </p>

              <div>
                <h3>About Me:</h3>
                  <img className="founder-img" src={founder} alt="founder-pic" width="250" height="250"></img>
                  <h2>SangUn Park</h2>
                  <h4>Currently enrolled in Pursuit Cohort 9.3 to further my skills as a full-stack web developer.</h4>
              </div>

          </article>
        </main>
    );
  }