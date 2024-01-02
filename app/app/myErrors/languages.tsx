"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { List, ListItem } from "@/ui/index";
import pythonLogo from "@/images/Python-logo-notext.svg.png";
import csharpLogo from "@/images/Logo_C_sharp.svg.png";
import javaLogo from "@/images/1200px-Java_Logo.svg.png";
import jsLogo from "@/images/JavaScript-logo.png";

const LangList = [
  {
    lang: "Python",
    image: pythonLogo,
    param: "py",
  },
  {
    lang: "C#",
    image: csharpLogo,
    param: "csharp",
  },
  {
    lang: "Java",
    image: javaLogo,
    param: "java",
  },
  {
    lang: "JavaScript",
    image: jsLogo,
    param: "js",
  },
];

function Languages() {
  return (
    <div>
      <List className="grid grid-cols-2 md:grid-cols-3">
        {LangList.map((lang) => (
          <Link className="flex items-center " href={"myErrors/" + lang.param}>
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
