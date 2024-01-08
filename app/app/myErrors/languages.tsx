"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { List, ListItem } from "@/ui/index";
import pythonLogo from "@/images/python.png";
import csharpLogo from "@/images/csharp.png";
import javaLogo from "@/images/java.png";
import tsLogo from "@/images/ts.png";

import availableLangList from "@/app/util/AvailableLangList";

// grid grid-cols-2 md:grid-cols-3
// grid grid-flow-row md:grid-flow-col
function Languages({ urlLink }: any) {
  return (
    <List className="grid grid-cols-2 gap-x-8 justify-items-center">
      {availableLangList.map((lang, index) => (
        <Link
          key={index}
          className="flex items-center "
          href={urlLink + "/" + lang.name}
        >
          <ListItem className="flex justify-center items-center gap-2">
            <Image
              src={lang.image}
              width={28}
              height={28}
              alt={lang.name + " logo"}
            />
            <p>{lang.name}</p>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default Languages;
