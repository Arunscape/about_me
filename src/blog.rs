use leptos::*;
use crate::markdown::Markdown;

#[component]
pub fn Blog(cx: Scope) -> impl IntoView {
    let html = include_str!(
        concat!(env!("TEST"), "/test.html")
        );
    view! { cx,
        <>
            <Markdown html=html.to_string()/>
        </>
    }
}
