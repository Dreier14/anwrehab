import {Link} from 'react-router-dom';
// import LottieError from './LottieError'
import './ErrorComponent.css'

export const ErrorComponent: React.FC = (): JSX.Element => {
    window.scrollTo(0, 0)
    return (
        <div>    
            <div className="background">
                  <div className = "Text">
                       404 Error 
                   <br/>
                      The Page You Requested is Invalid
                   <br/>
                      
                   <br/>
                      Click on the Link Below to Return to the Homepage
                   <br/>
                      <Link to="/" > Home</Link>
                  </div>
              </div>
        </div>   
    );
}