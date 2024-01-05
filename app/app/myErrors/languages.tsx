"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { List, ListItem } from "@/ui/index";
import pythonLogo from "@/images/python.png";
import csharpLogo from "@/images/csharp.png";
import javaLogo from "@/images/java.png";
import tsLogo from "@/images/ts.png";

const LangList = [
  {
    lang: "python",
    image: pythonLogo,
    param: "python"
  },
  {
    lang: "typescript",
    image: tsLogo,
    param: "ts"
  }
]

function Languages() {
  return (
    <div>
      <List className="grid grid-cols-2 md:grid-cols-3">
        {LangList.map((lang, index) => (
          <Link
            key={index}
            className="flex items-center "
            href={"myErrors/" + lang.param}
          >
            <ListItem className=" flex justify-center  items-center  gap-2">
              <Image
                src={lang.image}
                width={32}
                height={32}
                alt={lang.lang + " logo"}
              />
              <p>{lang.lang}</p>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default Languages;
