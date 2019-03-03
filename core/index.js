import { path } from "ramda";

const obj = {
  name: {
    first: "nald"
  }
};

export default path(["name", "first"], obj);
