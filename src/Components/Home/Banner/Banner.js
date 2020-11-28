import './Banner.css';
import image from '../../../Images/hospital/brb-hospital.png';
import Typical from 'react-typical';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

function Banner() {
    const styles = {
        pulse: {
            animation: 'infinite 4s',
            animationName: Radium.keyframes(pulse, 'pulse')
        }
    }
    return (
        <section class="banner-css py-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-12  p-4">
                        <div class="banner-content m-auto">
                            <h6>Want great Health Service?</h6>
                            <h1>Best Service<br/>
                                <Typical
                                    steps={['which you desire', 3000, 'with 25% low cost', 3000, 'at anytime', 3000]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </h1> <br/>
                            <button class="btn btn-success rounded-pill">Get Appointment</button>
                        </div>
                    </div>
                    <div class="col-xl-6 col-12">
                        <div class="img">
                            <StyleRoot><img class="img-fluid" style={styles.pulse} src={image} alt=""/></StyleRoot>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Banner;