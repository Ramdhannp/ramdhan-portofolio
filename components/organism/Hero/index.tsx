import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div id="hero">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-6 order-1  mt-3 my-sm-auto text-center text-lg-start text-md-start">
                    <h2><span id="typed-strings">
                        <Typewriter
                        options={{
                            strings: ['Hallo,', 'こんにちは,', '안녕하시네요,', 'مرحبا,'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </span></h2>
                    <h1 className="fw-bold mb-4">I Am <span className="color-acsent">Ramdhan N P</span></h1>
                    <p>Siap bekerja sebagai Full Stack Developer<br/>
                        Menguasai Ekosistem Javascript <span className="fw-bold color-acsent">MERN Stack</span></p>
                    <a className="btn btn-custom1 my-1 mt-2" href='https://wa.me/089621253726' target="_blank" rel="noopener noreferrer">Lets Talk <svg className="ms-1 arrow"
                            xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 38.044 31.65">
                            <g id="right-arrow" transform="translate(0 -41.346)">
                                <g id="Group_23" data-name="Group 23" transform="translate(0 41.346)">
                                    <path id="Path_2" data-name="Path 2"
                                        d="M37.436,55.693,23.7,41.953a2.088,2.088,0,0,0-2.945,0L19.5,43.2a2.067,2.067,0,0,0-.608,1.472,2.107,2.107,0,0,0,.608,1.49L27.52,54.2H2.055A2.032,2.032,0,0,0,0,56.243v1.764a2.11,2.11,0,0,0,2.055,2.138H27.61L19.5,68.222a2.062,2.062,0,0,0,0,2.924l1.247,1.244a2.089,2.089,0,0,0,2.945,0L37.436,58.648a2.1,2.1,0,0,0,0-2.955Z"
                                        transform="translate(0 -41.346)" fill="#fff" className="arrow" />
                                </g>
                            </g>
                        </svg>
                    </a>

                    <div className="social-icon position-absolute bottom-0 mb-2">
                        <a href="https://www.linkedin.com/in/ramdhan-nugraha-pratama-2a2b25159/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 31.297 31.297">
                            <path id="linkedin"
                                d="M28.466,0H2.831A2.831,2.831,0,0,0,0,2.831V28.466A2.831,2.831,0,0,0,2.831,31.3H28.466A2.831,2.831,0,0,0,31.3,28.466V2.831A2.831,2.831,0,0,0,28.466,0ZM9.685,27.024a.824.824,0,0,1-.824.824H5.354a.824.824,0,0,1-.824-.824v-14.7a.824.824,0,0,1,.824-.824H8.861a.824.824,0,0,1,.824.824ZM7.107,10.113a3.332,3.332,0,1,1,3.332-3.332A3.332,3.332,0,0,1,7.107,10.113ZM28.012,27.09a.758.758,0,0,1-.758.758H23.491a.758.758,0,0,1-.758-.758v-6.9c0-1.029.3-4.508-2.688-4.508-2.319,0-2.79,2.381-2.884,3.45V27.09a.758.758,0,0,1-.758.758h-3.64a.758.758,0,0,1-.758-.758V12.256a.758.758,0,0,1,.758-.758H16.4a.758.758,0,0,1,.758.758v1.283c.86-1.291,2.138-2.287,4.859-2.287,6.026,0,5.992,5.63,5.992,8.723V27.09Z"
                                className="change-my-color" />
                            </svg>
                        </a>
                        <a href="https://github.com/Ramdhannp" target="_blank" rel="noopener noreferrer">
                            <svg id="github-logo" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 35.627 34.755">
                                <path id="Path_20" data-name="Path 20"
                                    d="M33.237,14.237a17.736,17.736,0,0,0-6.483-6.483,17.423,17.423,0,0,0-8.941-2.389A17.425,17.425,0,0,0,8.872,7.754a17.734,17.734,0,0,0-6.483,6.483A17.425,17.425,0,0,0,0,23.178,17.312,17.312,0,0,0,3.4,33.65a17.446,17.446,0,0,0,8.779,6.436,1.038,1.038,0,0,0,.928-.162.907.907,0,0,0,.3-.7q0-.07-.012-1.252t-.012-2.064L12.849,36a6.805,6.805,0,0,1-1.287.081,9.809,9.809,0,0,1-1.612-.162,3.6,3.6,0,0,1-1.554-.7A2.943,2.943,0,0,1,7.375,33.8l-.232-.534a5.8,5.8,0,0,0-.73-1.183A2.8,2.8,0,0,0,5.4,31.2l-.162-.116a1.7,1.7,0,0,1-.3-.279,1.272,1.272,0,0,1-.209-.325q-.07-.163.116-.267a1.5,1.5,0,0,1,.673-.1l.464.069a3.386,3.386,0,0,1,1.148.557,3.744,3.744,0,0,1,1.125,1.206A4.089,4.089,0,0,0,9.544,33.4a2.731,2.731,0,0,0,1.519.5,6.6,6.6,0,0,0,1.322-.116,4.613,4.613,0,0,0,1.044-.348,3.758,3.758,0,0,1,1.136-2.389,15.881,15.881,0,0,1-2.377-.418,9.466,9.466,0,0,1-2.18-.9,6.244,6.244,0,0,1-1.867-1.554,7.468,7.468,0,0,1-1.218-2.435,11.581,11.581,0,0,1-.475-3.479A6.765,6.765,0,0,1,8.28,17.471a6.235,6.235,0,0,1,.162-4.731,3.25,3.25,0,0,1,1.995.313,13.946,13.946,0,0,1,1.937.893q.615.371.986.626a16.751,16.751,0,0,1,8.907,0l.881-.556A12.483,12.483,0,0,1,25.282,13a3.04,3.04,0,0,1,1.879-.255,6.175,6.175,0,0,1,.185,4.731,6.766,6.766,0,0,1,1.833,4.778A11.711,11.711,0,0,1,28.7,25.74a7.178,7.178,0,0,1-1.229,2.435A6.484,6.484,0,0,1,25.6,29.718a9.484,9.484,0,0,1-2.18.9,15.865,15.865,0,0,1-2.377.418,4.131,4.131,0,0,1,1.206,3.293v4.894a.924.924,0,0,0,.29.7,1.007,1.007,0,0,0,.916.162,17.444,17.444,0,0,0,8.779-6.436,17.315,17.315,0,0,0,3.4-10.472A17.439,17.439,0,0,0,33.237,14.237Z"
                                    transform="translate(0 -5.365)" className="change-my-color" />
                            </svg>
                        </a>
                        <br/>
                        <a href="#" className="fw-bold text-decoration-none change-my-color2">Download
                            <span className="color-acsent download"> Curriculum
                                Vitae</span></a>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 order-md-2" data-aos="zoom-in">
                    <img src="img/myFace.png" width="100%" className="float-lg-end mx-auto d-block" alt="" />
                </div>
            </div>
        </div>
    </div>

  )
}