import React from "react";
import NextHead from "next/head";

/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || "Cliber"}</title>
    <meta name="description" content={description || "Cliber"} />
    <meta name="viewport" content="width=device-width, inititial-scale=1" />

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
