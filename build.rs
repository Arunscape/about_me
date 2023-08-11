use femark::{HTMLOutput, process_markdown_to_html};
use std::fs::File;
use std::io::Write;
use std::fs::OpenOptions;
use std::env;
use std::path::Path;



fn main() {
    let outdir = std::env::var("OUT_DIR").unwrap();

    let test = include_str!("./src/blog/test.md").to_string();
    let html = process_markdown_to_html(test).expect("failed to parse markdown");
    
    dbg!(&html);

    let path = Path::new(&outdir).join("test.html");

    let mut f = OpenOptions::new()
        .write(true)
        .create(true)
        .open(&path)
        .unwrap();


    f.write_all(html.content.as_bytes()).unwrap();


    println!("cargo:rerun-if-changed=src/blog");
    let val = std::env::var("OUT_DIR").unwrap();

    println!("cargo:rustc-env=TEST={val}");
}

