// js-cookies
import Cookies from "js-cookie";

// constant
import { sessionConstant } from "../constant/local";

export function sessionCookiesExist() {
  const session = Cookies.get(sessionConstant);

  if (!session) return false;

  return true;
}

export function getSession() {
  const session = Cookies.get(sessionConstant);

  if (!session) return "#ERROR#";

  return session;
}

export function removeSession() {
  if (!sessionCookiesExist()) {
    console.log("#ERROR#");
    return;
  }

  Cookies.remove(sessionConstant);
}
