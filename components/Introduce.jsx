import React from "react";

export default function Introduce() {
  return (
    <div>
      <div className="p-4 gap-3">
        <div className=" vstack gap-3 align-items-center ">
          <img
            width="150"
            height="150"
            src="/image/Me3.jpg"
            className="rounded-circle mg-2"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-bold" style={{ color: "rgb(255, 224, 102)" }}>
            SUCHANUCH RINKUM
          </span>
        </div>
      </div>

      <div
        className="d-flex ms-auto"
        style={{ backgroundColor: "rgb(33, 30, 30)" }}
      ></div>
    </div>
  );
}
