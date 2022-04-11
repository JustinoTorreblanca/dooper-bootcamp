import Link from "next/link";
import React from "react";
import * as Styles from "./styles";
import { DooperLogo } from "./styles";

export default function HeaderLogo() {
  return (
    <Styles.Element>
      <Link href="/">
        <a>
          <DooperLogo />
        </a>
      </Link>
    </Styles.Element>
  );
}
