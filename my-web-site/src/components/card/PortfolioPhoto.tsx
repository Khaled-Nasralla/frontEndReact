import './portfolio-photo-style.sass';
import profilePic from '../../assets/khaled.jpg';

export function PortoFoliePhoto() {

    return (
        <div className="full-container">
            <div>
                <img
                    src={profilePic}
                    width={400}
                    height={400}
                    alt="image"
                    className="card-img"/>

                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card’s content.</p>
                    </div>
                </div>

                <div className="grid text-center">
                    <div className="g-col-4">    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card’s content.</p>
                        </div>
                    </div></div>
                    <div className="g-col-4">.g-col-4</div>
                    <div className="g-col-4">.g-col-4</div>
                </div>
            </div>
        </div>

    )
}