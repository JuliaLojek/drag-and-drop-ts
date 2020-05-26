// below is a special comment with three slashes whisc ts understands and it's actually not a comment
// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

import ProjectInput from "./components/project-input.js";
import ProjectList from "./components/project-list.js";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
