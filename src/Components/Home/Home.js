import React from "react";
import "./Home.css";
import {Row, Col } from "react-bootstrap";
import BlogCard from "../maincard/BlogCard";
// import BlogCard from "./BlogCard"

function Home() {
  return (
    <>
      <section className="container-fluid secSpacer">
        <div className="container">
          <div className="content ">
            <h3>
              Awesome Dot is a list that curates the best resources, projects{" "}
              <br /> and learning in the <span>Polkadot Ecosystem.</span>
            </h3>
          </div>
          {/* search bar  */}
          <div>
          <form class="form-search" method="get" action="#">
          {/* <i class="fa fa-search" aria-hidden="true"></i> */}
            <input
              type="search"
              name="search"
              placeholder="Browse through hundreds of projects "
            />
            <button type="submit">Search</button>
          </form>
          
          </div>

          <div className="customCards ">
              <Row>
                <Col>
                  <Row>
                    <ul>Polkadot Price</ul>
                    <li>$9.811</li>
                    <li>
                      24H; <span>2.12%</span>
                    </li>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <ul> Market cap</ul>
                    <li>$36,52,52,563</li>
                    <li>Rank: #7</li>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <ul> Accounts</ul>
                    <li>$52,75,458</li>
                    <li>24H: +1,502</li>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <ul> Transactions</ul>
                    <li>9,98,89,845</li>
                    <li>24H: +2,12,122</li>
                  </Row>
                </Col>
              </Row>
              <hr />
            </div>
          {/* price section */}
          <div className="mainHd">
            <h3>Trending Projects</h3>
          </div>

          {/* card */}
          <Row className="g-3">
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/img1.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/img2.jpeg"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/img3.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/img4.webp"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/img5.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/img6.jpeg"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/ksm1.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/ksm2.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                    <BlogCard
                    image="/ksm3.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/ksm4.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/ksm5.png"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="w-full p-3 items-center ">
                <div className="home__blogCard">
                  <BlogCard
                    image="/ksm6.webp"
                    time="a Few seconds ago"
                    category="Cooking"
                    heading="Stew Cooking"
                    content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
          {/* <div>
          <a
      href="/"
      class="scroll-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    >hello</a>
          </div> */}
      </section>
    </>
  );
}

export default Home;
