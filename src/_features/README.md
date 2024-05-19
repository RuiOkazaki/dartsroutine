# Features

Actions that a user can make in the application to interact with the business entities to achieve a valuable outcome. This also includes actions that the app makes on behalf of the user to produce value for them.
Each slice in this layer can contain interactive UI elements, internal state and API calls that enable value-producing actions.
For a social network

- Authenticate
- Create a post
- Join a group

## Example

| `ui` | `model` | `lib` | `api` |
| --- | --- | --- | --- |
| Interactive elements that enable users to use this feature | Business logic and infrastructure data storage, if needed (e.g., current app theme). This is the code that actually produces value for the user. | Infrastructural code that helps to concisely describe the business logic in the `model` segment | API methods that represent this feature on the backend. May compose API methods from Entities. |

## Source

[Feature-Sliced Design Documentation](https://feature-sliced.design/), Accessed on 19th May 2024
