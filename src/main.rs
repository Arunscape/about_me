use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {

    let code = include_str!("../info.js");

    html! {
        <div class="grid">
            <h1>{ "Hello World" }</h1>
            <div>
                <img src="https://avatars.githubusercontent.com/u/8227297"/>
                <p>{"Arun Woosaree E.I.T."}</p>
                <p>{"Bsc. Computer Engineering Software Co-op at the University of Alberta"}</p>
                <pre><code class="language-javascript">
                { code }
                </code></pre>
            </div>
        </div>
    }
}

fn main() {
    yew::start_app::<App>();
}
