import React from 'react';

const Main = () => {
    return (
        <>
        <div>
            <div class="text-center align-items-center">
                <div id="carouselExampleInterval" class="carousel slide text-center" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src={process.env.PUBLIC_URL + '/banner1.png'} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://www.gardenia.net/storage/app/public/guides/detail//rwSSKHMYNadHEJ305uito07eYcgvLnGC1XdveGla.webp" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://www.allaboutgardening.com/wp-content/uploads/2022/01/Types-of-Flowers-in-Garden-1200x667.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="featurette-divider"/>
            <div>
                <div class="container text-center marketing">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
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