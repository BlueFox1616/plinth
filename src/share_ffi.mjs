
import { Result$Ok, Result$Error } from "./gleam.mjs";
import {
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
  return data.title != null ? Result$Ok(data.title) : Result$Error(undefined);
}

export function text(data) {
  return data.text != null ? Result$Ok(data.text) : Result$Error(undefined);
}

export function url(data) {
  return data.url != null ? Result$Ok(data.url) : Result$Error(undefined);
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
