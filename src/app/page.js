import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <img
        loading="eager"
        src="/Landing desktop.png"
        className="hidden sm:block w-full h-full"
      />
      <img
        loading="eager"
        src="/Landing mobile.png"
        className="block sm:hidden w-full h-full"
      />
    </Fragment>
  );
}
