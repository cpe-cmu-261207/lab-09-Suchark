import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div style={{ backgroundColor: "rgb(33, 30, 30)" }}>
      <Navbar />
      <div className=" text-center mt-5 mb-5">
        <p
          className="fw-bold mx-5 my-5"
          style={{ color: "rgb(249, 228, 146)", fontSize: "40px" }}
        >
          CONTACT
        </p>
      </div>

      <div className="p-2 hstack justify-content-center mx-3 mt-4 mb-5">
        <img
          width="200"
          height="200"
          src="./image/Me4.jpg"
          className="rounded-circle mg-2"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className="d-flex justify-content-center rounded-5 mb-5 mx-5 "
        style={{ backgroundColor: "rgb(250, 255, 180)" }}
      >
        <div className=" d-flex align-items-center mx-auto vstack">
          <p
            className=" fw-bold  mt-5 mb-5 "
            style={{ fontSize: "40px", color: "rgb(33, 30, 30)" }}
          >
            MY PROFILE
          </p>
          <p className="fw-bold mt-4" style={{ color: "rgb(51, 51, 46)" }}>
            NAME
          </p>
          <p style={{ color: "rgb(121, 89, 0)" }}> SUCHANUCH RINKUM </p>
          <p className="fw-bold mt-3 " style={{ color: "rgb(51, 51, 46)" }}>
            NICKNAME
          </p>
          <p style={{ color: "rgb(121, 89, 0)" }}> CHOMPOO </p>
          <p className="fw-bold my-4 " style={{ color: "rgb(51, 51, 46)" }}>
            ADDRESS
          </p>
          <p style={{ color: "rgb(121, 89, 0)" }}>
            4/7 ถนนราชภาคินัย ต.พระสิงห์ อ.เมืองเชียงใหม่
          </p>
          <p style={{ color: "rgb(121, 89, 0)" }}> รหัสไปรษณีย์ 50000 </p>
          <p className="fw-bold mt-4 " style={{ color: "rgb(51, 51, 46)" }}>
            FACEBOOK
          </p>
          <a
            style={{ color: "rgb(121, 89, 0)" }}
            href="https://www.facebook.com/Suchanuch.28.12.45/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.facebook.com/Suchanuch.28.12.45/
          </a>
          <p className="fw-bold mt-5 " style={{ color: "rgb(51, 51, 46)" }}>
            EMAIL
          </p>

          <Link href={"mailto:Shuchanuch_rin@cmu.ac.th"}>
            <a style={{ color: "rgb(121, 89, 0)" }}>Shuchanuch_rin@cmu.ac.th</a>
          </Link>
          <p className="fw-bold mt-5 " style={{ color: "rgb(51, 51, 46)" }}>
            PHONE
          </p>
          <p className="mb-5" style={{ color: "rgb(121, 89, 0)" }}>
            090-3172802
          </p>
        </div>
      </div>
    </div>
  );
}
