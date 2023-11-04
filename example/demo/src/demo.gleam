import glare/element.{Node, button, div, header, main, p}
import glare/property.{attr, class, font_family, size, style}
import glare/event.{onclick}
import glare.{create_render, select, signal, text}
import glare/hooks.{create_signal}
import gleam/io

pub fn body() -> Node {
  let #(count, set_count) = create_signal(0)

  main([
    header([
      p([text("Title")])
      |> font_family("Arial")
      |> size("1.5rem")
      |> class("title"),
      p([text("A Subtitle with text")])
      |> font_family("Roboto")
      |> size("1.1rem"),
    ]),
    p([
      text(
        "Facilis vel quia atque voluptatem voluptas ipsum deserunt sunt. Est veritatis facilis et sit. Necessitatibus rerum eveniet impedit dolores velit magni autem qui",
      ),
    ])
    |> style("border-radius", "16px")
    // add custom styling
    |> attr("data-summary", "this is a random paragraph"),
    // custom attributes
    p([text("count: "), signal(count)]),
    // state using solid-js signals
    button([text("click me")])
    |> onclick(fn() {
      io.println("clicked")
      set_count(count() + 1)
    }),
    div([text("some content")]),
  ])
}

pub fn run() {
  create_render(body(), select("body"))
}
