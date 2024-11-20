
## **Introduction**

Implement a tinder-like UI that fetches the list of parking lots 

## Project Link

[Project Link](https://eminent-pull.surge.sh/)

## Features

- The user can see metadata and the image of one parking lot at a time.
- The user can label the beauty of a parking lot with “good” or “bad”
- After any decision, the next parking lot will be loaded
- The UI never fetches more than 5 cases in advance (you can use `limit` and
  `offset` query variables for pagination)
- The user can stop tindering at any time and switch to the summary view

- The user can see the good and bad lots in a compact fashion (e.g. list view) from this one UI session.
- The results are grouped / sorted / filterable for better overview

## Stack

- React
- Redux Toolkit: State Management
- Typescript: type-checking and **utilizes Ggql.tada for writing type-safe GraphQL queries** 🪄
- Styling: TailwindCss and ShadCn/UI
- Vitest , Vitest Ui , React testing library and MSW : testing and mocking API
- Json-server : fake REST API
- Faker : generating fake data
- Docker
- Vite

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`
3. Start the development server with `npm run start`
4. Build the project with `npm run build`.
5. Navigate to `http://localhost:5173` in your browser.

## Testing

To run unit tests, use the command `npm run test`

Run unit test in Vitest Ui, use the command `npm run test:ui`

## Deployment

1. Build the Docker image with `docker build -t parking .`.
2. Run the Docker container with `docker run -p 3000:80 parking`.

---
