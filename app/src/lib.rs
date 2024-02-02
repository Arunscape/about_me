use crate::error_template::{AppError, ErrorTemplate};

use leptos::*;
use leptos_meta::*;
use leptos_router::*;
use memoize::memoize;

pub mod error_template;

#[component]
pub fn App() -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/pkg/start-axum-workspace.css"/>
        <Html attr:data-theme="catppuccin-mocha"/>
  //      <Html attr:data-theme="forest"/>
        <Link rel="shortcut icon" href="/images/arun.svg"/>
        <Meta name="description" content="Arun's Website"/>

        // sets the document title
        <Title text="Arun's Website"/>

        // content for this welcome page
        <Router fallback=|| {
            let mut outside_errors = Errors::default();
            outside_errors.insert_with_default_key(AppError::NotFound);
            view! { <ErrorTemplate outside_errors/> }.into_view()
        }>
            <main>
                <Routes>
                    <Route path="" view=HomePage/>
                    <Route path="/blog" view=BlogList/>
                    <Route path="/blog/:id" view=BlogPost/>
                </Routes>
            </main>
        </Router>
    }
}

/// Renders the home page of your application.
#[component]
fn HomePage() -> impl IntoView {
    // Creates a reactive value to update the button
    let (count, set_count) = create_signal(0);
    let on_click = move |_| set_count.update(|count| *count += 1);

    view! {
        <h1>"Welcome to Leptos!"</h1>
        <h2>"You clicked " {count} " times"</h2>
        <button class="btn btn-primary" on:click=on_click>
            "Click Me: "
            {count}
        </button>
    }
}

fn BlogList() -> impl IntoView {
    view! { <h1>"Blog List"</h1> }
}



#[derive(Params, PartialEq, Default)]
struct BlogPostParams {
    id: String,
}

#[component]
fn BlogPost() -> impl IntoView {

    let params = use_params::<BlogPostParams>();

    let id = move || {
        params.with(|p| {
            p.as_ref().map(|p| p.id.clone()).unwrap_or_default()
        })
    };

    let once = create_resource(||(), move |_| async move {
        get_blog(id()).await
    });


    view! {
        <>
            <Title text=id/>
            <Meta name="description" content=id/>
            <h1>{format!("{}", id())}</h1>
            <div>{once.get()}</div>
        </>
    }
}

#[memoize]
fn get_blog_html(name: String) -> String {
    todo!()
}

#[server]
async fn get_blog(id: String) -> Result<String, ServerFnError> {
    use comrak::markdown_to_html;


    let md = "";
    let html = markdown_to_html(&md, &comrak::ComrakOptions::default());

    Ok(html)
}
