import React from 'react';

const Main = () => {
    return (
        <>
        <div>
            <div className="text-center align-items-center">
                <div id="carouselExampleInterval" className="carousel slide text-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2500">
                            <img src={process.env.PUBLIC_URL + '/banner1.png'} className="d-block w-100" alt="carouselImg1"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img src={process.env.PUBLIC_URL + '/banner2.png'} className="d-block w-100" alt="carouselImg2"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img src="https://www.allaboutgardening.com/wp-content/uploads/2022/01/Types-of-Flowers-in-Garden-1200x667.jpg" className="d-block w-100" alt="carouselImg3"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider"/>
            <div>
                <div className="container text-center marketing">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={process.env.PUBLIC_URL + '/banner1.png'} alt='img' width="100%" height="100%"></image></svg>
                            <h2 className="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><image width="100%" height="100%"></image></svg>
                            <h2 className="fw-normal">Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><image width="100%" height="100%"></image></svg>
                            <h2 className="fw-normal">Heading</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main