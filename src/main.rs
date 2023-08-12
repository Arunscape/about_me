use leptos::*;
use leptos_router::*;
use leptos_meta::*;
mod blog;
mod markdown;
use crate::blog::Blog;

fn main() {
    leptos::mount_to_body(|cx| view! { cx, <App/> })
}

#[component]
fn App(cx: Scope) -> impl IntoView {
    let (count, set_count) = create_signal(cx, 0);

    view! { cx,
        <Html attributes=AdditionalAttributes::from(vec![("data-theme", "catppuccin-mocha")])/>
        <Router>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" view=Home/>
                    <Route path="/projects" view=Projects/>
                    <Route path="/resume" view=Resume/>
                    <Route path="/blog" view=Blog/>
                    <Route path="/contact" view=Contact/>
                </Routes>
            </main>
        </Router>
    }
}
#[component]
fn Navbar(cx: Scope) -> impl IntoView {

    let paths = move || { vec![
        ("Home", "/"),
        ("Projects", "/projects"),
        ("Resume", "/resume"),
        ("Blog", "/blog"),
        ("Contact", "/contact"),
    ]};
    view! { cx,
        <nav>
            <div class="flex flex-row space-x-4">
                <For
                    each=paths
                    key=|(l, p)| *p
                    view=move |cx, (l, p)| {
                        view! { cx,
                            <div class="btn btn-hover">
                                <a href=p>{l}</a>
                            </div>
                        }
                    }
                />
            </div>
        </nav>
    }
}

#[component]
fn Home(cx: Scope) -> impl IntoView {
    view! { cx,
        <>
            <h1 class="text-green-800 dark:text-green-100">
                Hello, my name is Arun
            </h1>
        </>
    }
}

#[component]
fn Projects(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>
            Projects
        </h1>
    }
}

#[component]
fn Resume(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>
            Resume
        </h1>
    }
}

#[component]
fn Contact(cx: Scope) -> impl IntoView {
    view! { cx,
        <>
            <h1>
                Contact Me
            </h1>
            <div>
                Email: arun@arun.gg
            </div>
        </>
    }
}


