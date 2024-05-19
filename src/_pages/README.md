# Pages

Complete pages for a page-based application (like a website) or screens/activities for screen-based applications (like mobile apps).
This layer is similar to Widgets in its compositional nature, albeit on a larger scale. Each slice in this layer contains UI components that are ready to be plugged into a router and sometimes data-fetching logic and error handling.
For a social network

- News feed
- Community page
- User's public profile

## Example

| `ui` | `model` | `lib` | `api` |
| --- | --- | --- | --- |
| Composition of Entities, Features and Widgets into complete pages. Can also contain error boundaries and loading states. | Usually not used | Non-business interactions (e.g., gestures) and other necessary code for the page to deliver a complete user experience | Data loaders for SSR-oriented frameworks |
