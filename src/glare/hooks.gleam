/// Creates a signal from SolidJS to manage state
/// 
///     > let #(count, set_count) = create_signal(0)
///     > io.println(int.to_string(count()))
///     0
///     > set_count(count() + 1)
///     > io.println(int.to_string(count()))
///     1
///
pub external fn create_signal(v: a) -> #(fn() -> a, fn(a) -> Nil) =
  "../core.mjs" "create_signal"
