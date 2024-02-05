import phone from '../../public/assets/call.png'
import mail from '../../public/assets/email.png'
import endline1 from '../../public/assets/endLine1.png'
import endline2 from '../../public/assets/endLine2.png'
import github from '../../public/assets/github.png'
import './footer.css'

function Footer(params) {
    return(
        <div className="footer">
            <div className="footer-border">
                <img src={endline1}></img>
                <img src={endline2} id='line-2'></img>
            </div>
            <div className="footer-contact">
                <h1>KEEP IN TOUCH</h1>
                <div className="footer-right">
                    <div className="call">
                        <img src={phone}></img><h2>+94-765462379</h2>
                    </div>
                    <div className="mail">
                        <img src={mail}></img><h2>wickramasuriyashehan@gmail.com</h2>
                    </div>
                    <div className="github">
                        <img src={github}></img><h2>https://github.com/SDW-SWD</h2>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
    
}

export default Footer