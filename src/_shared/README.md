# Shared

Isolated modules, components and abstractions that are detached from the specifics of the project or business. Warning: not to be treated like a utility dump!
This layer, unlike others, does not consist of slices, and instead consists of segments directly.

- UI kit
- API client
- Code working with browser APIs

## Example

| `ui` | `model` | `lib` | `api` |
| --- | --- | --- | --- |
| UI kit | Usually not used | Utility modules of several related files. If you need to use individual helpers, consider using utility libraries such as [`lodash-es`](https://www.npmjs.com/package/lodash-es). | Rudimentary API client with additional features like authentication or caching. |

## Source

[Feature-Sliced Design Documentation](https://feature-sliced.design/), Accessed on 19th May 2024
