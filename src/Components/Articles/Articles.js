import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Articles.css";


function Articles() {
  return (
    <>
      <section className="container-fluid secSpacer ">
        <div className="container">
          <Row>
            <div className="mainHd">
              <h3>Articles</h3>
              <p>Recent article on polkadot ecosystem</p>
            </div>
            {/* 4 */}
            <Col xs={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
                  alt="Bristol harbour"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
                  alt="Bristol harbour"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
                  alt="Bristol harbour"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
                  alt="Bristol harbour"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                </Card.Body>
                <Card.Footer>
                <div class="card-footer">
                    <button class="btn btn-success">By Gavin Wood</button>
                    <button class="btn btn-border">Read More</button>
                </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
                  alt="Bristol harbour"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
                  alt="Bristol harbour"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div class="grid">
	<div class="card card__one">
		<figure class="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg" alt="sdfsdf" width="340" height="280" />
		</figure>
		<div class="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, tempora.
		</div>
	</div>

	<div class="card card__two">
		<figure class="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748268/card-hover/photo-2.jpg" alt="/ddsf" width="340" height="280" />
		</figure>
		<div class="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nemo rem quod perspiciatis unde ducimus aliquam natus facilis.
		</div>
	</div>

	<div class="card card__three">
		<figure class="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748268/card-hover/photo-3.jpg" alt="/ddd" width="340" height="280" />
		</figure>
		<div class="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, possimus dicta ipsam est mollitia.
		</div>
	</div>
</div>
        </div>
      </section>
    </>
  );
}

export default Articles;
