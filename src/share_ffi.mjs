import { Ok, Error } from "./gleam.mjs";

export async function share(data) {
  try {
    return new Ok(await navigator.share(data));
  } catch (error) {
    return new Error(error.toString());
  }
}

export function canShare(data) {
  return navigator.canShare(data);
}
