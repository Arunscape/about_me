use leptos::*;

// takes in a prop which is the string contents of a markdown file
#[component]
pub fn Markdown(cx: Scope, html: String) -> impl IntoView {
    view! { cx,
        <>
            <div inner_html=html></div>
        </>
    }
}
    
