"use client";
import { useState } from "react";
import { Button } from "@/ui";
import Link from "next/link";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

function SignupForm() {
  const [mailError, setMailError] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState({
    strength: "",
    show: false,
    validated: false,
  });
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  function handlePasswordChange(event: any) {
    var passwordValue = event.target.value;
    const strengthChecks = {
      length: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };
    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    let verifiedList = Object.values(strengthChecks).filter((value) => value);
    let strength =
      verifiedList.length == 4
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";
    if (strength == "Strong")
      setPasswordValidate({
        ...passwordValidate,
        strength: strength,
        show: true,
        validated: true,
      });
    else
      setPasswordValidate({
        ...passwordValidate,
        strength: strength,
        show: true,
        validated: false,
      });
    formData.password = event.target.value;
  }

  function checkMail(event: any) {
    var email: string = event.target.value;
    console.log(email);
    if (email.includes(".org")) {
      setMailError(true);
    } else {
      setMailError(false);
    }
  }

  function changeShowPassword() {
    if (passwordShow) setPasswordShow(false);
    else setPasswordShow(true);
  }
  return (
    <form
      className="flex flex-col justify-center gap-2 text-foreground w-full max-w-md"
      method="post"
    >
      <div className="flex flex-col justify-center gap-2">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        {mailError ? (
          <label htmlFor="email" className="text-red-800">
            Cannot use ".org" email during registration. Contact your
            administrator
          </label>
        ) : (
          <></>
        )}
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
          onBlur={checkMail}
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <div className=" relative ">
          <input
            className="rounded-md px-4 py-2 bg-inherit border w-full relative"
            type={passwordShow ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            required
            onChange={handlePasswordChange}
            onBlur={() => {
              if (
                passwordValidate.show &&
                passwordValidate.strength == "Strong"
              )
                setPasswordValidate({
                  ...passwordValidate,
                  show: false,
                });
            }}
          />
          <span
            className="absolute top-0 right-0 h-full p-1 flex items-center bg-transparent text-black cursor-pointer select-none"
            onClick={changeShowPassword}
          >
            {!passwordShow ? <IconEye /> : <IconEyeOff />}
          </span>
        </div>

        {passwordValidate.show ? (
          passwordValidate.strength == "Strong" ? (
            <label className="text-green-700 text-sm ">
              Password Strength: {passwordValidate.strength}
            </label>
          ) : (
            <label className="text-gray text-sm text-red-700 ">
              Password Strength: {passwordValidate.strength}
            </label>
          )
        ) : (
          <></>
        )}
      </div>

      <div className="w-3/4 mx-auto flex flex-col items-center gap-2 justify-center mt-3">
        <Button
          formAction="/auth/sign-up"
          type="submit"
          disabled={mailError || !passwordValidate.validated}
          className="w-full"
        >
          Sign Up
        </Button>
        <Link href="/login" className="w-full">
          <Button
            color="green"
            formAction="/auth/sign-up"
            type="submit"
            className="w-full"
          >
            Already have an account? Sign In!
          </Button>
        </Link>
      </div>
    </form>
  );
}
export default SignupForm;
