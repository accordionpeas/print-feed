# print-feed

## Set-up

### Environment variables
- Create `.env` file on the root of the project
- Add API key to `.env` file as `HARVARD_ART_API_KEY`

### Install dependencies
- Run `npm i`

***

## Run

### Development mode
- `npm run dev`
- visit `http://localhost:3000`

### Production mode
- `npm run build`
- `npm start`
- visit `http://localhost:3000`

***

## Testing
### Headless tests
- `npm test`

### Visual Tests
- `npm run test:debug`

***

## Further work

Time permitting, further improvements could be made:
- Virtualise the results - as the feed is implemented as an infinite scroll then eventually there will be a performance implications as all results are rendered to the screen - this could be solved by virtualising the results.
- Large images - the images are larger than needed for the UI and sometimes take a few seconds to load. This could possibly be improved if the API provides a way to resize images, or resizeing could be done on the server.
- External API mocking - in order to write end-to-end tests, the external API has been mocked with fixtures. This could be made to be more dynamic in order to provide greater flexibility when testing - one solution to this might be to create a proxy server that both the app server and Cypress can interact with in order to change mocked responses at run time.