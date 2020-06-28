//@ts-check
/**@module */
import React from "react";

// Exporting the Container, Row, and Col components from this file

/**
 * This Container component allows us to use a bootstrap container without worrying about class names
 * @function Container
 * @param {*} fluid
 */
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


/**
 * This Row component lets us use a bootstrap row without having to think about class names
 * @function Row
 * @param {*} fluid
*/
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

/**
 * This Col component lets us size bootstrap columns with less syntax
 * e.g. <Col size="md-12"> instead of <div className="col-md-12">
 * @function Col
 * @param {*} size
*/export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
