import React from "react";
import { Card } from "react-bootstrap";
import "./Artidetails.css";

function Articlesdetails() {
  return (
    <>
      <section className="container-fluid secSpacer ">
        {/* <div className="container">
          <div className="articlespage">
            <Card.Img
              className=" articlespage image"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
              alt="Bristol harbour"
            />
            <div className="description">
              <h3>Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum</h3>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
                It is also used to temporarily replace text in a process called
                greeking, which allows designers to consider the form of a
                webpage or publication, without the meaning of the text
                influencing the design. Lorem ipsum is typically a corrupted
                version of De finibus bonorum et malorum, a 1st-century BC text
                by the Roman statesman and philosopher Cicero, with words
                altered, added, and removed to make it nonsensical and improper
                Latin.
              </p>

              <h3>Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum</h3>
              <p>
                Versions of the Lorem ipsum text have been used in typesetting
                at least since the 1960s, when it was popularized by
                advertisements for Letraset transfer sheets. Lorem ipsum was
                introduced to the digital world in the mid-1980s, when Aldus
                employed it in graphic and word-processing templates for its
                desktop publishing program PageMaker. Other popular word
                processors, including Pages and Microsoft Word, have since
                adopted Lorem ipsum, as have many LaTeX packages, web content
                managers such as Joomla! and WordPress, and CSS libraries such
                as Semantic UI.
              </p>
            </div>
          </div>
        </div> */}
        <div class="row gy-4">
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="chef-member">
              <div class="member-img">
                <img
                  src="assets/img/looking_for_work.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>LOOKING FOR WORK?</h4>
                <p>
                  We can help you find work immediately so get in touch with one
                  of the team to find your next role.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Chefs Member --> */}

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="chef-member">
              <div class="member-img">
                <img
                  src="assets/img/looking_for_chefs.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>LOOKING FOR A CHEF?</h4>
                <p>
                  Our extensive database contains qualified, reliable and
                  available chefs at all levels, so contact the team now to
                  register your vacancy.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Chefs Member --> */}

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="chef-member">
              <div class="member-img">
                <img
                  src="assets/img/meet_the_team.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>MEET THE TEAM & FIND OUT MORE</h4>
                <p>
                  With over 40 years combined experience we know the market
                  better than anyone and offer the friendliest service, so come
                  and meet the team to find out more.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Chefs Member --> */}
        </div>
      </section>
    </>
  );
}

export default Articlesdetails;
