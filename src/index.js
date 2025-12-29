/*
 * ----------	---	---------------------------------------------------------
 * File: index.js
 * Project: webpack-template
 * File Created: Saturday, 27th December 2025 11:02:28 pm
 * Author: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Last Modified: Monday, 29th December 2025 5:38:09 pm
 * Modified By: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Copyright (c) 2025 Ilma Co.
 * ----------	---	---------------------------------------------------------
 */

if (process.env.NODE_ENV !== "production") {
  console.log("Now running in development mode");
}

function component() {
  const element = document.createElement("pre");

  element.innerHTML = [
    "This is a webpack template project.",
    "You are in " + process.env.NODE_ENV + " mode.",
  ].join("\n\n");

  return element;
}

document.body.appendChild(component());
