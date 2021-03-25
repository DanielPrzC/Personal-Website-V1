import React from "react";

import IconExternal from "./IconExternal";
import IconGithub from "./IconGithub";
import IconLinkedin from "./IconLinkedin";
import IconInstagram from "./IconInstagram";
import IconTwitter from "./IconTwitter";

const Icon = ({ name }) => {
  switch (name) {
    case "External":
      return <IconExternal />;
    case "Github":
      return <IconGithub />;
    case "Linkedin":
        return <IconLinkedin />;
    case "Instagram":
        return <IconInstagram />;
    case "Twitter":
        return <IconTwitter />
    default:
      return <IconExternal />;
  }
};

export default Icon;