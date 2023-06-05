# glare

[![Package Version](https://img.shields.io/hexpm/v/glare)](https://hex.pm/packages/glare)
[![Hex Docs](https://img.shields.io/badge/hex-docs-ffaff3)](https://hexdocs.pm/glare/)

A Gleam Web Framework written with SolidJS

## Quick start

```gleam
import glare.{select, render, signal, text}
import glare/element.{main, h1, button}
import glare/hooks.{use_signal}
import glare/event.{onclick}
import glare/property.{font_family, size, border, radius}

pub fn content() {
   let #(count, set_count) = use_signal(0)
   main([
       h1(text("Hello Glare"))
       |> size("1.3rem"),
       
       button([
           text("Button has been clicked "),
           signal(count),
           text(" times")
       ])
       |> border("1px solid black")
       |> radius("20px")
       |> onclick(fn () { set_count(count() + 1) })
   ])
   |> font_family("Lexend")
}

// import this file from html and execute the `run` function
pub fn run() {
    let body = select("body")
    render(content(), body)
}
```

## Installation


```sh
gleam add glare
```

Documentation can be found at <https://hexdocs.pm/glare>.
