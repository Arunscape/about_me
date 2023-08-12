use std::fs::File;
use std::io::Write;
use std::fs::OpenOptions;
use std::env;
use std::path::Path;

use pulldown_cmark::{Parser, Options, html};



fn main() {
    let outdir = std::env::var("OUT_DIR").unwrap();

    let test = include_str!("./src/blog/test.md");


    let mut options = Options::empty();
options.insert(Options::ENABLE_STRIKETHROUGH);
let parser = Parser::new_ext(test, options);


    let mut html = String::new();
    html::push_html(&mut html, parser);
    dbg!(&html);

    let path = Path::new(&outdir).join("test.html");

    let mut f = OpenOptions::new()
        .write(true)
        .create(true)
        .open(&path)
        .unwrap();


    f.write_all(html.as_bytes()).unwrap();


    println!("cargo:rerun-if-changed=src/blog");
    println!("cargo:rerun-if-changed=build.rs");

    let val = std::env::var("OUT_DIR").unwrap();
    println!("cargo:rustc-env=TEST={val}");
}

