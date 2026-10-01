
import { Result$Ok, Result$Error } from "./gleam.mjs";
import {
  Option$Some,
  Option$None,
  unwrap,
} from "../gleam_stdlib/gleam/option.mjs";

export function new_(title, text, url, files) {
  return {
    title: unwrap(title, undefined),
    text: unwrap(text, undefined),
    url: unwrap(url, undefined),
    files,
  };
}
export function title(data) {
  return data.title == null ? Option$None() : Option$Some(data.title);
}

export function text(data) {
  return data.text == null ? Option$None() : Option$Some(data.text);
}

export function url(data) {
  return data.url == null ? Option$None() : Option$Some(data.url);
}
export function files(data) {
  return data.files ?? [];
}
export async function share(data) {
  try {
    return Result$Ok(await navigator.share(data));
  } catch (error) {
    return Result$Error(error.toString());
  }
}

export function canShare(data) {
  return navigator.canShare(data);
}
