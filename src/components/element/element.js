/*
 * ----------	---	---------------------------------------------------------
 * File: element.js
 * Project: restaurant-page
 * File Created: Friday, 26th December 2025 3:26:50 pm
 * Author: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Last Modified: Friday, 26th December 2025 4:00:32 pm
 * Modified By: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Copyright (c) 2025 Ilma Co.
 * ----------	---	---------------------------------------------------------
 */

export class element {
  constructor(tag, id, classList, heading, text, textArr) {
    this.tag = tag;
    this.id = id;
    this.classList = classList;
    this.heading = heading;
    this.text = text;
    this.textArr = textArr;
  }
}

export function createElement(elementArgs) {
  const { tag, id, classList, heading, text, textArr } = elementArgs;
  console.log("Creating element: ", elementArgs);
  const element = document.createElement(tag);
  if (id) {
    element.id = id;
  }

  if (classList) {
    element.classList.add(...classList);
  }

  if (heading) {
    const h2 = document.createElement("h2");
    h2.textContent = heading;
    element.appendChild(h2);
  }

  if (text) {
    const p = document.createElement("p");
    p.textContent = text;
    element.appendChild(p);
  }

  if (textArr && Array.isArray(textArr)) {
    const ul = document.createElement("ul");
    textArr.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    element.appendChild(ul);
  }

  return element;
}
