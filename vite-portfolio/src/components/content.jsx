import line2 from '../../public/assets/Line 2.png'
import line3 from '../../public/assets/Line-3.png'
import line from '../../public/assets/Line.png'
import me from '../../public/assets/me.png'
import weather from '../../public/assets/wether-app.png'
import './content.css'
import airbnb from '/assets/airbnb-site.png'

function Content() {
    return(
        <main>
            <div className="left-container">
                <div className="content">
                    <img src={line} className='line'></img>
                    <h1 id='name'>SEHAN DHANEERA<br></br> WICKRAMASURIYA</h1>
                    <img src={me} id='me'></img>
                </div>
                <h1 id='dev'>FULL - STACK DEVELOPER</h1>
                <div className="info">
                    <h4>SEHAN DHANEERA WICKRAMASURIYA
                    <h4></h4>NO2 VISAKA ROAD Mount-LAVINIA</h4>
                    <h4>+94-765462379 </h4>
                    <h4>wickramasuriyashehan@gmail.com</h4>
                    <h4>https://github.com/SDW-SWD </h4>
                </div>
                <div className="airbnb-content">
                    <div className="line">
                        <img src={line3} class='line-2' id='line-project' /><h1>PROJECT</h1> <img src={line3} class='line-2' />
                    </div>
                    <p>React,HTML, CSS, JAVASCRIPT,JSX
                        This is a web application that displays simple airbnb
                        website. User can see sold out and what available online
                        ratings  and how many have rated.
                    </p>
                <img src={airbnb}></img>
                </div>
                
            </div>
            <div className="right-container">
                <div className="container-myself">
                    <div className="line">
                    <img src={line2} class='line-2' /> <h1 id='self'>MYSELF</h1> <img src={line2} class='line-2'/>
                    </div>
                    <p id='myself'><span>I</span> am a passionate full stack developer who is eager to
                        contribute and work with a team spirit to deliver
                        masterpiece in any type of demanded quality service
                        as a solution engineer. As a developer, I possess a
                        unique blend of creativity and technical prowess. my
                        coding skills demonstrate a deep understanding of
                        various programming languages and frameworks. I
                        approach challenges with a methodical mindset,
                        leveraging my problem-solving abilities to craft
                        elegant and efficient solutions. Making myself a
                        valuable asset to any development team. With a
                        keen eye for detail and a commitment to excellence.
                    </p>
                </div>
                <div className="weather-app-content">
                    <img src={weather} className='weather-image'></img>
                    <p>HTML, CSS, JAVASCRIPT, WEATHER API,GOOGLE
                        MAPS API
                        This is a web application that displays location-based
                        weather details. User can input the name of the city and
                        get the current weather details and forecast for three days
                        also past weather details of past seven days.
                        https://sdw-swd.github.io/Weather-App/#/current-location
                    </p>
                </div>
                
            </div>
            
        </main>
    )
}
export default Content