import React, { useState } from "react";
import "./App.css";

function Home() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (index) => {
    setSelectedDiv(selectedDiv === index ? null : index);
  };

  const educationDetails = [
    {
      title: "MASTER DEGREE GRAPHIC DESIGN",
      details: `Sed nec bibendum nunc. Cras ut nisi in urna fermentum condimentum. Etiam tincidunt purus vitae ligula
                ultricies, sed ultrices velit vestibulum. Mauris luctus nulla vitae felis varius bibendum. Curabitur a
                massa dignissim, consectetur magna at, vehicula turpis.`,
    },
    {
      title: "BACHELOR DEGREE OF COMPUTER SCIENCE",
      details: `Nulla auctor purus in ipsum ullamcorper, sed pharetra urna ullamcorper. Nulla facilisi. Aenean feugiat,
                elit vel lacinia varius, ex arcu cursus justo, in bibendum felis urna eget lorem. Duis scelerisque diam
                quis purus tempus, vel euismod purus euismod.`,
    },
    {
      title: "DIPLOMA IN INFORMATION TECHNOLOGY",
      details: `Etiam eu libero nec metus commodo congue ut ac lectus. Curabitur gravida metus ut eros bibendum, ac
                vestibulum eros fringilla. Nulla facilisi. Donec accumsan lectus at velit pretium fermentum. Vivamus
                varius purus sed sollicitudin tincidunt.`,
    },
    {
      title: "DIPLOMA IN INFORMATION TECHNOLOGY",
      details: `Sed ut ornare eros. Aenean consectetur odio in orci condimentum, at ullamcorper sapien auctor. Cras
                vehicula nulla in turpis vehicula, a scelerisque est pulvinar. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae.`,
    },
    {
      title: "HIGH SCHOOL SECONDARY EDUCATION",
      details: `Integer eget sem id sapien ultricies luctus. Vestibulum nec scelerisque est, in suscipit nisi. Donec
                dignissim, arcu eget interdum efficitur, leo turpis ullamcorper leo, a dictum nisl dolor at velit. Nulla
                facilisi. Curabitur faucibus urna a urna elementum.`,
    },
  ];

  return (
    <>
      <div className="mdiv">
        <div className="scroll">
          <div className="div1">
            <img
              src="/img/img5.webp"
              alt=""
              height="200px"
              width="200px"
              className="img1"
            />
          </div>
          <div className="myh3">
            <h3>Ashutoshh Singh</h3>
          </div>
          <div className="myh5">
            <h5>devops engineer</h5>
          </div>
          <div className="myul">
            <ul className="ul">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">SERVICES</a>
              </li>
              <li>
                <a href="">SKILLS</a>
              </li>
              <li>
                <a href="">EDUCATION</a>
              </li>
              <li>
                <a href="">EXPERIENCE</a>
              </li>
              <li>
                <a href="">WORK</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="part2">
          <div className="d-flex">
            <div className="div2">
              <div>
                <h1>Hi !</h1>
                <h1>I'am Ashutoshh .</h1>
              </div>
            </div>
            <div className="div3 d-flex justify-content-center align-items-end">
              <img src="/img/me.png" alt="" height="600px" />
            </div>
          </div>
          <div className="about">
            <div className="div4">
              <p>ABOUT US</p>
              <h5>WHO AM I?</h5>
            </div>
            <div className="div5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis inventore veritatis culpa tenetur quia! Suscipit
                eveniet quisquam voluptatibus porro maxime assumenda non
                consequuntur unde fugiat temporibus ullam quia laborum a, magni
                delectus quo earum aut provident neque cupiditate distinctio,
                praesentium ab totam dolorum. Ipsam dolore nulla eos magnam
                ducimus quos quidem quas dolor in, sapiente numquam? Temporibus
                dolorem quod provident, maxime numquam commodi quibusdam rem
                consequatur necessitatibus magni repellendus soluta illum
                possimus quos cum repudiandae atque. <br />
                <br /> Dolorum alias necessitatibus cupiditate nulla voluptate
                reprehenderit expedita error dolor nemo dicta tempore distinctio
                nihil impedit totam perspiciatis harum quo, quia repudiandae
                enim tenetur.
              </p>
            </div>
            <div className="about-card">
              <div className="card1">
                <img src="" alt="" />
                <h3>Graphic Design</h3>
              </div>
              <div className="card1">
                <img src="" alt="" />
                <h3>Web Design</h3>
              </div>
              <div className="card1">
                <img src="" alt="" />
                <h3>Software</h3>
              </div>
              <div className="card1">
                <img src="" alt="" />
                <h3>Application</h3>
              </div>
            </div>
            <div className="about-card2">
              <div className="cookieCard">
                <p className="cookieHeading">
                  I am happy to know you that 300+ projects done sucessfully!
                </p>
                <button className="acceptButton">Understood</button>
              </div>
            </div>
          </div>
          <div className="Services">
            <div className="div6">
              <p>WHAT I DO?</p>
              <h5>HERE ARE SOME OF MY EXPERTISE</h5>
            </div>
            <div className="services-card">
              <div className="card">
                <img src="../img/argo.png" alt="" height="90%" />
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card__content">
                  <p className="card__title">Card Title</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Skills">
            <div className="div6">
              <p>MY SPECIALTY</p>
              <h5>MY SKILLS</h5>
            </div>

            <div>
              <div className="container">
                <div className="skill-box">
                  <span className="title">HTML</span>

                  <div className="skill-bar">
                    <span className="skill-per html">
                      <span className="tooltip">50%</span>
                    </span>
                  </div>
                </div>

                <div className="skill-box">
                  <span className="title">CSS</span>

                  <div className="skill-bar">
                    <span className="skill-per css">
                      <span className="tooltip">70%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <span className="title">JavaScript</span>

                  <div className="skill-bar">
                    <span className="skill-per javascript">
                      <span className="tooltip">50%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <span className="title">NodeJS</span>

                  <div className="skill-bar">
                    <span className="skill-per nodejs">
                      <span className="tooltip">30%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Education">
            <div className="div6">
              <p>EDUCATION</p>
              <h5>EDUCATION</h5>
            </div>
            <div style={{ width: "90%", margin: "0 auto", marginTop: "5%" }}>
              {educationDetails.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    onClick={() => handleClick(index)}
                    style={{
                      width: "100%",
                      height: "55px",
                      marginTop: "2%",
                      backgroundColor: "#f0f0f0",
                      marginBottom: "10px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    {item.title}
                  </div>
                  {selectedDiv === index && (
                    <div
                      style={{
                        width: "100%",
                        padding: "20px",
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        marginBottom: "10px",
                      }}
                    >
                      {item.details}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="Experience">
            <div className="div6">
              <p>EXPERIENCE</p>
              <h5>WORK EXPERIENCE</h5>
            </div>
            <div className="Experience-mdiv">
              <div className="Experience-div1"></div>
              <div className="Experience-div2"></div>
              <div className="Experience-div3"></div>
              <div className="Experience-div4"></div>
            </div>
            <div className="Experience-mdiv1">
              <div className="Experience-div1"></div>
              <div className="Experience-mdiv1-1"></div>
              <div className="Experience-div3"></div>
              <div className="Experience-div4"></div>
            </div>
            <div className="Experience-mdiv1">
              <div className="Experience-div1"></div>
              <div className="Experience-mdiv1-2"></div>
              <div className="Experience-div3"></div>
              <div className="Experience-div4"></div>
            </div>
            <div className="Experience-mdiv1">
              <div className="Experience-div1"></div>
              <div className="Experience-mdiv1-3"></div>
              <div className="Experience-div3"></div>
              <div className="Experience-div4"></div>
            </div>
            <div className="Experience-mdiv1">
              <div className="Experience-div1"></div>
              <div className="Experience-mdiv1-4"></div>
              <div className="Experience-div3"></div>
              <div className="Experience-div4"></div>
            </div>
            <div className="Experience-mdiv1-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
