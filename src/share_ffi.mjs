import { Result$Ok, Result$Error } from "./gleam.mjs";

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
