// below is a special comment with three slashes whisc ts understands and it's actually not a comment
// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

import ProjectInput from "./components/project-input";
import ProjectList from "./components/project-list";
import _ from "lodash";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

// lodash with types
console.log(_.shuffle([3, 5, 1, 8]));

// class-transformer
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import Product from "./models/product";

const products = [
  // imitates fetched data
  { title: "book", price: 10.99 },
  { title: "phone", price: 139.99 },
];

// manually rewriting fetched data to our ts model
// const loadedProducts = products.map((product) => {
//   return new Product(product.title, product.price);
// });

const loadedProducts = plainToClass(Product, products); // it goes through the entire array and convert its elements to the class model provided in the first argument

loadedProducts.forEach((product) => console.log(product.getInfo()));
