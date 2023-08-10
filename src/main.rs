use leptos::*;
use leptos_router::*;

fn main() {
    leptos::mount_to_body(|cx| view! { cx, <App/> })
}

#[component]
fn App(cx: Scope) -> impl IntoView {
    let (count, set_count) = create_signal(cx, 0);

    view! { cx,
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
    view! { cx,
        <nav>
            <div class="flex flex-row">
                <div class="hover:underline">
                    <a href="/">Home</a>
                </div>
                <div class="hover:underline">
                    <a href="/projects">Projects</a>
                </div>
                <div class="hover:underline">
                    <a href="/resume">Resume</a>
                </div>
                <div class="hover:underline">
                    <a href="/blog">Blog</a>
                </div>
                <div class="hover:underline">
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    }
}

#[component]
fn Home(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>
            Hello, my name is Arun
        </h1>
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
fn Blog(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>
            Blog
        </h1>
    }
}

#[component]
fn Contact(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>
            Contact
        </h1>
    }
}


