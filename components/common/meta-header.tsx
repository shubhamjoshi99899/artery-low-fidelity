import Head from "next/head";
import React from "react";
import { metaHeadingInterface } from "../../interfaces/meta-heading.interface";

const MetaHeader: React.FunctionComponent<metaHeadingInterface> = ({
  subHeading,
}) => {
  return (
    <>
      <Head>
        <title> {subHeading} | Artery Low Fidelity </title>
        <meta
          name="description"
          content="Wiser Count, an app for smart hotel pricing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default MetaHeader;
