import gleam/javascript/array.{type Array}
import gleam/javascript/promise.{type Promise}
import gleam/option.{type Option}
import plinth/browser/file.{type File}

pub type ShareData

@external(javascript, "../../share_ffi.mjs", "share")
pub fn share(data: ShareData) -> Promise(Result(Nil, String))

@external(javascript, "../../share_ffi.mjs", "canShare")
pub fn can_share(data: ShareData) -> Bool

@external(javascript, "../../share_ffi.mjs", "new_")
pub fn new(
  title: Option(String),
  text: Option(String),
  url: Option(String),
  files: Array(File),
) -> ShareData

@external(javascript, "../../share_ffi.mjs", "title")
pub fn title(data: ShareData) -> Option(String)

@external(javascript, "../../share_ffi.mjs", "text")
pub fn text(data: ShareData) -> Option(String)

@external(javascript, "../../share_ffi.mjs", "url")
pub fn url(data: ShareData) -> Option(String)

@external(javascript, "../../share_ffi.mjs", "files")
pub fn files(data: ShareData) -> Array(File)
