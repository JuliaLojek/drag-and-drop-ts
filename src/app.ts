// below is a special comment with three slashes whisc ts understands and it's actually not a comment
// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

import ProjectInput from "./components/project-input";
import ProjectList from "./components/project-list";
import _ from "lodash";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log(_.shuffle([3, 5, 1, 8]));