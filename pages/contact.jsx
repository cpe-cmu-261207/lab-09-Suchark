import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <div class=" text-center mt-5 mb-5">
        <p
          class="fw-bold mx-5 my-5"
          style="color:rgb(249, 228, 146) ; font-size: 40px;"
        >
          CONTACT
        </p>
      </div>

      <div class="p-2 hstack justify-content-center mx-3 mt-4 mb-5">
        <img
          width="200"
          height="200"
          src="./image/Me4.jpg"
          class="rounded-circle mg-2"
          style="object-fit: cover ;"
        />
      </div>

      <div
        class="d-flex justify-content-center rounded-5 mb-5 mx-5 "
        style="background-color: rgb(250, 255, 180) ;"
      >
        <div class=" d-flex align-items-center mx-auto vstack">
          <p
            class=" fw-bold  mt-5 mb-5 "
            style=" font-size: 40px ;  color: rgb(33, 30, 30) f"
          >
            {" "}
            MY PROFILE{" "}
          </p>
          <p class="fw-bold mt-4" style="color: rgb(51, 51, 46) ;">
            {" "}
            NAME{" "}
          </p>
          <p style="color: rgb(121, 89, 0) ;"> SUCHANUCH RINKUM </p>
          <p class="fw-bold mt-3 " style="color: rgb(51, 51, 46) ;">
            {" "}
            NICKNAME{" "}
          </p>
          <p style="color: rgb(121, 89, 0) ;"> CHOMPOO </p>
          <p class="fw-bold my-4 " style="color: rgb(51, 51, 46) ;">
            {" "}
            ADDRESS{" "}
          </p>
          <p style="color: rgb(121, 89, 0) ;">
            {" "}
            4/7 ถนนราชภาคินัย ต.พระสิงห์ อ.เมืองเชียงใหม่{" "}
          </p>
          <p style="color: rgb(121, 89, 0) ;"> รหัสไปรษณีย์ 50000 </p>
          <p class="fw-bold mt-4 " style="color: rgb(51, 51, 46) ;">
            {" "}
            FACEBOOK{" "}
          </p>
          <a
            style="color: rgb(121, 89, 0) ;"
            href="https://www.facebook.com/Suchanuch.28.12.45/"
            target="_blank"
          >
            https://www.facebook.com/Suchanuch.28.12.45/
          </a>
          <p class="fw-bold mt-5 " style="color: rgb(51, 51, 46) ;">
            {" "}
            EMAIL{" "}
          </p>
          <a style="color: rgb(121, 89, 0) ;" href="mailto:#" target="_blank">
            Shuchanuch_rin@cmu.ac.th
          </a>
          <p class="fw-bold mt-5 " style="color: rgb(51, 51, 46) ;">
            {" "}
            PHONE{" "}
          </p>
          <p class="mb-5" style="color: rgb(121, 89, 0) ;">
            {" "}
            090-3172802{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
