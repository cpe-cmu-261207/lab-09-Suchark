import React from "react";
import Navbar from "../components/Navbar";

export default function exper() {
  return (
    <div>
      <div>
        <div>
          <div class=" text-center mt-5">
            <p
              class="fw-bold"
              style="color:rgb(255, 224, 102) ; font-size: 30px;"
            >
              PROJECT EXPERIENCE
            </p>
          </div>

          <div class="shadow-lg p-3 mx-5 mt-5">
            <div class="hstack gap-5">
              <img
                src="./image/p1.jpeg"
                width="250"
                height="250"
                class="square-circle"
                style="object-fit: cover"
              />
              <div class="vstack mt-4">
                <span class="fw-bold" style="color: white; font-size: 25px">
                  TUKBATH TERMBOON
                </span>
                <div class="mt-3 ms-5 mb-4">
                  <span style="color: rgb(255, 245, 186); font-size: 15px">
                    The device works when the Arduno NodeMCU is switched on and
                    the Aircard starts up, the Aircard releases the wifi to the
                    Arduno NodeMCU, and the GPS connected to the Arduno NodeMCU
                    starts collecting the coordinates of the device's location.
                    Then send that coordinate to be processed at Arduno NodeMCU
                    and Arduno NodeMCU will send coordinates to the database in
                    real time, showing the location by pinning it to the Google
                    Map page of the application when there is an order from
                    Application for offering food to merit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-lg p-3 mx-5 mt-5">
          <div class="hstack gap-5">
            <img
              src="./image/p3.jpeg"
              width="250"
              height="250"
              class="square-circle"
              style="object-fit: cover"
            />
            <div class="vstack mt-4">
              <span class="fw-bold" style="color: white; font-size: 25px">
                AIP APPLICATION
              </span>
              <div class="mt-3 ms-5 mb-4">
                <span style="color: rgb(255, 245, 186); font-size: 15px">
                  <ul>
                    <li>
                      Modeling with machine learning uses data from 300
                      photographs per plant to create an AI model.
                    </li>
                    <li>Application page design</li>
                    <li>
                      Create and develop AI Plan Application with Thunkable
                      program
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shadow-lg mx-5">
        <div class="hstack p-3 gap-5 mt-5 mb-5 ">
          <img
            src="./image/p2.jpeg"
            width="250"
            height="250"
            class="square-circle"
            style="object-fit: cover"
          />
          <div class="vstack mt-4">
            <span class="fw-bold" style="color: white; font-size: 25px">
              FT DRON APPLICATION
            </span>
            <div class="mt-3 ms-5 mb-4">
              <span style="color: rgb(255, 245, 186); font-size: 15px">
                Pass the selection Energy seedling project to create youth value
                for the year 2020 "FT Dron project a drone to extinguish the
                fire for electric poles" To protect public property and keep
                firefighters safe.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
