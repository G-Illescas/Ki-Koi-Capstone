import React from 'react';

const Main = () => {
    return (
        <>
        <div>
            <div className="text-center align-items-center">
                <div id="carouselExampleInterval" className="carousel slide text-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3800">
                            <img src={process.env.PUBLIC_URL + '/banner1.png'} className="d-block w-100 h-100" alt="carouselImg1"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3800">
                            <img src={process.env.PUBLIC_URL + '/banner2.png'} className="d-block w-100 h-100" alt="carouselImg2"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider"/>
            <div>
                <div className="container text-center marketing">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={process.env.PUBLIC_URL + '/value1.png'} alt='img' width="100%" height="100%"></image></svg>
                            <h2 className="fw-normal">Connection</h2>
                            <p>Connection is at the heart of our identity. We understand that meaningful relationships, both within our team and with our clients, form the backbone of success. By valuing open dialogue, empathy, and collaboration, we cultivate an environment where innovation thrives and partnerships flourish, ultimately driving mutual growth and shared achievements.</p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={process.env.PUBLIC_URL + '/value2.png'} width="100%" height="100%"></image></svg>
                            <h2 className="fw-normal">Trust</h2>
                            <p>Trust is the cornerstone of everything we do. We believe that fostering open communication, delivering on our promises, and prioritizing ethical conduct are essential in building lasting relationships with our customers and partners. Our commitment to trust drives us to consistently provide reliable solutions that empower individuals and businesses alike.</p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={process.env.PUBLIC_URL + '/value3.png'} width="100%" height="100%"></image></svg>
                            <h2 className="fw-normal">Security</h2>
                            <p>We are dedicated to safeguarding the trust our clients place in us by implementing robust measures to protect their sensitive data and privacy. Our unwavering commitment to security ensures that every interaction and transaction is conducted with the utmost integrity, giving our clients the peace of mind they deserve in an ever-evolving digital landscape.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main