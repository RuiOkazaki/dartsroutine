# Entities

Concepts from the real world that form together the essence of the project. Commonly, these are the terms that the business uses to describe the product.
Each slice in this layer contains static UI elements, data stores and CRUD operations.
For a social network

- User
- Post
- Group

## Example

| `ui` | `model` | `lib` | `api` |
| --- | --- | --- | --- |
| Skeleton of a business entity with slots for interactive elements | Data storage of instances of this entity as well as functions for manipulating that data. This segment is most fit for storing server-side data. If you use [TanStack Query](https://tanstack.com/query/latest) or other methods of implicit storage, you may choose to omit this segment. | Functions for manipulating instances of this entity that aren't related to storage | API methods using the API client from Shared for easy communication with the backend |
