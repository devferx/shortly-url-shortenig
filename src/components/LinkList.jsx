import React from "react";
import Link from "./Link";

const LinkList = ({ links }) => (
  <>
    {links.map((link, i) => (
      <Link key={i} original={link.original} shortLink={link.shortLink} />
    ))}
  </>
);

export default LinkList;
