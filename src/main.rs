use std::ops::Deref;

use yew::prelude::*;

#[component]
fn App() -> Html {
    let counter = use_state(|| 0);
    let onclick = {
        let counter = counter.clone();
        move |e| {
            let value = counter.deref() + 1;
            counter.set(value);
        }
    };

    html! (
        <>
        <h1> { "OK!" } </h1>
        <button {onclick}>{ "+1" }</button>
        <p> { counter.deref() } </p>
        </>
    )
}

fn main() {
    yew::Renderer::<App>::new().render();
}
