import React from "react";
import HeroVideo from "../assets/HeroVideo.mp4";
import SecretSourceVideo from "../assets/SecretSourceVideo.mp4";
import Image_1 from "../assets/neon-bor.png";
import BorderBottom from "../assets/BorderBottom.png";
import BoxBg from "../assets/box.png";
import Image_4 from "../assets/bWo4zI-qhM2LTamGiSdEdg==.png";
import Image_5 from "../assets/FAf_tuSU5LNHncWuXIDO-Q==.png";
import Image_6 from "../assets/IMWeHiCdCFcXl1PVEuDPpw==.png";
import Image_7 from "../assets/tVn5HuFayfFC7iP0jVX9HA==.png";
import PinkPaint from "../assets/PinkPaint.png";
import Image_10 from "../assets/image-10.png";
import Image_11 from "../assets/08d08dad90.gif";
import Image_12 from "../assets/image-12.png";
import video_3 from "../assets/section-3.mp4";
import video_4 from "../assets/racing-rec.mp4";
import Logo from "../assets/logo.png";
import Image_13 from "../assets/plate_2.png";
import Image_14 from "../assets/plate_3.png";
import Image_15 from "../assets/plate_4.png";
import Image_16 from "../assets/plate_5.png";
import Image_17 from "../assets/plate_6.png";
import Image_18 from "../assets/plate_8.png";
import Image_19 from "../assets/plate_9.png";
import Image_20 from "../assets/plate_1.png";
import Image_21 from "../assets/plate_7.png";
import Image_22 from "../assets/plate_10.png";
import Image_23 from "../assets/drop-image.png";
import Image_24 from "../assets/New Project (6).png";
import video_5 from "../assets/section-4.mp4";
import video_6 from "../assets/wheel.mp4";
import video_7 from "../assets/car.mp4";
import video_8 from "../assets/gold.mp4";
import video_9 from "../assets/section-5.mp4";
import Image_25 from "../assets/image.png";
import Image_30 from "../assets/KnrcNb5-k6R_lF2ANuPSPA%3D%3D-svg.png";
import Image_31 from "../assets/one.png";
import Image_32 from "../assets/three.png";
import Image_33 from "../assets/two.png";
import Image_34 from "../assets/last-section.png";
import Image_35 from "../assets/queen.png";
import Image_36 from "../assets/HalftoneBG.png";
// import Image_37 from "../assets/bg-image.png";
import video_10 from "../assets/footer-video.mp4";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <div
        className="Home w-100 position-relative top-0 start-0"
        style={{ zIndex: "1" }}
      >
        <section className="Home_HeroSection">
          <video
            className="bg-video"
            src={HeroVideo || ""}
            autoPlay={true}
            loop
            muted
          />

          <div className="position-absolute end-0 px-3 ActionContainer text-sm-start text-center">
            <img
              className="topborder d-sm-block d-none"
              src={Image_1 || ""}
              alt="logo"
            />
            <img className="Logo" src={Logo || ""} alt="logo" />
            <p className="text-white d-block">
              Master the Race, Claim the Chase
            </p>
            <button className="btn ActionBtn rounded-0">Action</button>
          </div>

          <img
            src={BorderBottom || ""}
            alt="BorderBottom"
            className="w-100 BorderBottom position-absolute bottom-0 start-0"
          />
        </section>
      </div>

      <section className="w-100 position-relative SecretSourceContainer py-5">
        <video
          className="bg-video h-100"
          src={SecretSourceVideo || ""}
          autoPlay={true}
          loop
          muted
        />
        <img
          src={BorderBottom || ""}
          alt="BorderBottom"
          className="w-100 BorderBottom position-absolute top-0 start-0"
        />
        <div className="SecretSource w-100 d-flex align-items-center justify-content-center mt-5 px-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="SecretSource-info">
              <h1 className="title">The Secret Sauce!</h1>
              <h1 className="unity">WEB 3.0 + UNITY + INFLU3NCE</h1>
              <p className="gaming-info">
                Join the ONLY actually thrilling gameplay on chain. <br />
                Payout Pursuit will be THE MULTICHAIN racing game of the GameFi
                universe. <br /> Gamers will have opportunities to win
                cryptocurrency prizes in daily, weekly, and monthly race events,
                as well as in special events.
              </p>
            </div>

            <div className="row m-0 mt-5 justify-content-center position-relative SecretSourceLogoContainer overflow-hidden">
              {/* <img
                src={Image_37 || ""}
                alt=""
                className="w-100 position-absolute start-0 top-0"
              /> */}
              <div className="col-12 col-md-6 position-relative SecretSourceCol d-flex align-items-center justify-content-evenly h-100">
                <img src={Image_4 || ""} alt="" style={{ width: "100px" }} />
                <img src={Image_5 || ""} alt="" style={{ width: "100px" }} />
              </div>
              <div className="col-12 col-md-6 position-relative SecretSourceCol d-flex align-items-center justify-content-evenly h-100">
                <img src={Image_6 || ""} alt="" style={{ width: "100px" }} />
                <img src={Image_7 || ""} alt="" style={{ width: "100px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* *************************************************************** */}
      <section className="container_2 w-100 position-relative ">
        <video
          className="bg-video h-100"
          src={video_3 || ""}
          autoPlay={true}
          loop
          muted
        />
        <img
          src={PinkPaint || ""}
          alt="PinkPaint"
          className="PinkPaint position-absolute w-100"
        />
        <div className="container w-100 h-100">
          <div className="row skills-meet m-0 w-100 h-100 align-items-center justify-content-center">
            <div
              className="col-12  col-lg-6 p-3 position-relative"
              style={{ background: "rgb(0 0 0 / 40%)" }}
            >
              <img src={Image_10 || ""} alt="" className="side-image-1" />
              <h1 className="text-start skills-title">Where Skill</h1>
              <h1 className="text-start skills-title">Meets Thrill</h1>
              <p className="text-start skills-info">
                Payout Pursuit was conceived by a true gaming enthusiast, born
                with a passion for thrilling adventures in the digital realm.{" "}
                <br />
                <br />
                At Payout Pursuit, we're committed to delivering an unparalleled
                level of competitiveness, ensuring that everyone has a fair shot
                at success. Whether you're a seasoned gamer or just getting
                started, you can develop your skills and vie for the chance to
                win instant, substantial crypto payouts. This is not just
                another game; it's a thrilling journey where skill, strategy,
                and a dash of luck can lead to massive rewards.
              </p>
              <button className="button">Play Now</button>
            </div>
            <div className="col-12 col-lg-6 mt-lg-0 mt-4">
              <img src={Image_12 || ""} alt="" className="side-image-2" />
              <div className="recording-game position-relative">
                <img className="w-100" src={Image_11 || ""} alt="" />
                <video
                  className="racing-video"
                  src={video_4 || ""}
                  autoPlay={true}
                  loop
                  muted
                  controls
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom-plate">
          <img src={Image_13 || ""} alt="" />
          <img src={Image_14 || ""} alt="" />
          <img src={Image_15 || ""} alt="" />
          <img src={Image_16 || ""} alt="" />
          <img src={Image_17 || ""} alt="" />
          <img src={Image_18 || ""} alt="" />
          <img src={Image_19 || ""} alt="" />
          <img src={Image_20 || ""} alt="" />
          <img src={Image_21 || ""} alt="" />
          <img src={Image_22 || ""} alt="" />
        </div>
      </section>

      {/* *************************************************************** */}
      <section className="container_3 w-100 position-relative">
        <video
          className="bg-video h-100"
          src={video_5 || ""}
          autoPlay={true}
          loop
          muted
        />

        <div className="core-vision position-relative">
          <div className="CoreVisionTitleContainer position-relative">
            <img src={Image_23 || ""} alt="" className="bg-image" />

            <h1 className="core-vision-title">Core Vision</h1>
          </div>

          <div className="container-fluid px-3">
            <div className="row core-vision-info w-100">
              <div className="col-12 col-lg-4 p-2">
                <video
                  className="video-circle"
                  src={video_6}
                  autoPlay="true"
                  loop
                />
                <h1 className="drift-racing">Drift Racing Game</h1>
                <p className="drift-racing-info">
                  To create an engaging, browser-friendly, skill-based game that
                  seamlessly integrates cryptocurrency stakes.
                </p>
              </div>
              <div className="col-12 col-lg-4 p-2">
                <video
                  className="video-circle"
                  src={video_7}
                  autoPlay="true"
                  loop
                />
                <h1 className="game-assests">Ownable in-game assets</h1>
                <p className="game-assests-info">
                  Payout NFTs you own become playable assets within the game,
                  enhancing your gameplay experience
                </p>
              </div>
              <div className="col-12 col-lg-4 p-2">
                <video
                  className="video-circle"
                  src={video_8}
                  autoPlay="true"
                  loop
                />
                <h1 className="win-mechanism">UNFATHOMABLE WIN MECHANISM</h1>
                <p className="win-mechanism-info">
                  To give a fair chance of becoming The Drift King, who seizes
                  the lion's share of the winnings.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={Image_24 || ""} alt="BorderBottom" className="w-100" />
      </section>

      {/* *************************************************************** */}
      {/* <section className="container_4 w-100 position-relative">
        <video
          className="bg-video"
          src={video_9 || ""}
          autoPlay={true}
          loop
          muted
        />

        <div className="development-roadmap w-100">
          <img src={Image_25 || ""} alt="" className="bg-image" />
          <h1 className="roadmap-title">
            Development <br /> Roadmap
          </h1>

          <div className="container-fluid" style={{ padding: "0 50px" }}>
            <div className="row w-100">
              <div className="col-12 col-lg-4 p-2">
                <div className="v-images">
                  <img
                    src={Image_30 || ""}
                    alt=""
                    className="v"
                    style={{ width: "250px" }}
                  />
                  <img src={Image_31 || ""} alt="" className="one" />
                </div>

                <div className="v-info">
                  <h1 className="text-white text-center fs-bold">
                    V1 : Global Leaderboard
                  </h1>
                  <p className="text-white text-center my-3">
                    Launch Beta version of the gameplay, enabling users to get
                    acquainted with in-game physics before actual competition.{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 p-2">
                <div className="v-images">
                  <img
                    src={Image_30 || ""}
                    alt=""
                    className="v"
                    style={{ width: "250px" }}
                  />
                  <img src={Image_32 || ""} alt="" className="two" />
                </div>

                <div className="v-info">
                  <h1 className="text-white text-center fs-bold">
                    V2 : Blockchain Integration
                  </h1>
                  <p className="text-white text-center my-3">
                    Events will require an entry fee, that pools up as rewards
                    for the top tier winners (top 30%)
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 p-2">
                <div className="v-images">
                  <img
                    src={Image_30 || ""}
                    alt=""
                    className="v"
                    style={{ width: "250px" }}
                  />
                  <img src={Image_33 || ""} alt="" className="three" />
                </div>
                <div className="v-info">
                  <h1 className="text-white text-center fs-bold">
                    V3 : Multichain madness
                  </h1>
                  <p className="text-white text-center my-3">
                    Compete against players from others chains and Win a pot of
                    mixed native chain tokens{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Image_34 || ""}
          alt="FooterBorder"
          className="footer-border w-100"
          style={{ marginTop: "-126px" }}
        />
      </section> */}

      {/* *********************************************************** */}
      {/* <div className="container_5 w-100 position-relative  d-flex flex-column align-items-center justify-content-center">
        <video
          className="bg-video"
          src={video_10 || ""}
          autoPlay={true}
          loop
          muted
        />
        <img
          src={Image_36 || ""}
          alt=""
          className="bg-overlay w-100 h-100 opacity-50"
        />

        <div className="container-fluid">
          <div className="row m-0 w-100">
            <div className="footer col-lg-5 col-sm-6 col-12">
              <img src={Logo || ""} alt="" style={{ width: "450px" }} />
              <p>
                In this high-stakes race, only ONE can reign supreme as the
                undisputed Drift King.{" "}
              </p>
            </div>
            <div className="col-lg-7 col-sm-6 col-12">
              <img src={Image_35 || ""} alt="" />
            </div>
          </div>

          <div className="row m-0 w-100">
            <h1 className="text-start">Connect with us</h1>
            <ul className="link-items col-lg-12 col-sm-12 col-12">
              <li className="col-lg-2 col-sm-2">
                <a href="http://">Instagram</a>
              </li>
              <li className="col-lg-2 col-sm-2">
                <a href="http://">Twitter</a>
              </li>
              <li className="col-lg-2 col-sm-2">
                <a href="http://">Facebook</a>
              </li>
              <li className="col-lg-2 col-sm-2">
                <a href="http://">Linkedin</a>
              </li>
              <li className="col-lg-2 col-sm-2">
                <a href="mailto:info@payoutpursuit.com">
                  Info@payoutpursuit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
