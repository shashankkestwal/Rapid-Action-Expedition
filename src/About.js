import AboutBackground from "./assets/about_background.png"
import AboutHeading from "./assets/about_heading.png"
import Rishikesh_bg from "./assets/rishikesh_bg.png"
import "./About.css"

const About = (props) => {
  return(
          <div id="about">
            <div id="blackSpot"></div>
            <div id="backgroundAbout">
              <img src={AboutBackground} alt="background about"></img>
            </div>
            <img id="AboutHeading" src={AboutHeading} alt="background about"></img>
            <div className="flex" id="about_container">
              <img src={Rishikesh_bg}></img>
              <div id="about_data">
                <p id="about_heading">Rapid Action Expedition</p>
                <p className="paragraph" id="about_details">
                  Situated in Rishikesh (Uttarakhand, India), Rapid Action Expedition 
                  is one of the trustworthy travel agencies that 
                  render reliable solutions for all travel requirements. 
                  We are blessed with talented and dedicated personnel that strives 
                  to provide seamless solutions to the clients. Mr. Vinod Singh Bhandari (Owner) 
                  laid the foundation stone of the company in 2005, with a mission to become a 
                  reputed agency in the city by rendering streamlined services. Under the guidance of 
                  our owner, we are maintaining our standards of excellence since our inception.                 
                </p>
                <br/>
                <p className="paragraph" id="about_details_smaller">
                  Travelling gives you a chance of learning many new things about the
                  world as well as yourself. Be it a long journey or a travel excursion,
                  taking a vacation always gives you a chance to explore the unseen
                  places and distinct cultures. So, do not constraint your life to work 
                  and leave for a vacation today. For the best travel packages and tour operations, 
                  consult with us now.    
                  <br/><br/>
                  As experienced tour operators, we are engaged in providing perfectly 
                  organized India tours for our clients as per their requirements and 
                  budget. Therefore, you do not have to think twice before coming to us 
                  for getting a great touring experience. You can consult with our 
                  executives anytime regarding any queries or package bookings.              
                </p>
              </div>
              {/*<img id="sider" src={Rishikesh_bg}></img>*/}
            </div>

          </div>
        )

}

export default About