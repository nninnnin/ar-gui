import * as dat from "dat.gui";

type Test = "a" | "b" | "c";

export function main(test?: Test) {
  console.log(test);

  const gui = new dat.GUI();

  console.log("imported dat gui: ", gui);
}

main("b");
