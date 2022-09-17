import { IconArrowRightBar } from "@tabler/icons";
import React from "react";

export default function Hobby() {
  return (
    <div>
      <div
        className="d-flex ms-auto"
        style={{ backgroundColor: "rgb(33,30,30)" }}
      >
        <div className="mx-auto mt-5 px-2" style={{ maxWidth: " 1000px " }}>
          <p
            className=" mt-3 fw-bold"
            style={{ fontSize: "60px", color: "aliceblue" }}
          >
            MY SKILL
          </p>
        </div>
      </div>

      <div
        className="d-flex ms-auto justify-content-center"
        style={{ backgroundColor: "rgb(33, 30, 30)" }}
      >
        <div
          style={{ backgroundColor: "rgb(243, 220, 128)" }}
          className="bg-border border-2 rounded-4 mb-5"
        >
          <div
            style={{ backgroundColor: "rgb(243, 220, 128)" }}
            className="bg-border border-2 rounded-4 mb-5"
          >
            <div className="d-flex ms-5 p-5 mt-auto ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="image/Music2.jpg"
                  width="500"
                  height="260"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mt-2 ">MUSICAL</h5>
                  <p className="card-text">
                    i love playing music! Playing music makes me feel relaxed
                    and happy every time I play music with my friends.
                    Practicing music has given me guitar skills. piano and
                    violin
                  </p>
                </div>
              </div>

              <div className="card ms-3" style={{ width: "18rem" }}>
                <img
                  src="image/graf1.jpg"
                  width="500"
                  height="260"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mt-2">GRAPHIC DESIGN</h5>
                  <p className="card-text">
                    Doing graphic design has made my imagination develop. Art
                    improves our mood and helps us to be happy when it comes out
                    as beautiful as expected.
                  </p>
                </div>
              </div>

              <div className="card ms-3" style={{ width: "18rem" }}>
                <img
                  src="image/com.jpg"
                  width="500"
                  height="260"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mt-2">VIDEO</h5>
                  <p className="card-text">
                    Production,conceptualizing and imagin storytelling in just
                    the right lighting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
