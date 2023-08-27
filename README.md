<a name="readme-top"></a>

[![Nextjs][nextjs-shield]][nextjs-url]

<br />
<div align="center">
  <a href="https://github.com/mchtter/flight-search-app">
    <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Flighty</h3>

  <p align="center">
    Introducing Flighty – Your Ultimate Travel Companion! Seamlessly search, and book the best flight deals with just a few taps. Elevate your travel experience with Flighty and take off on unforgettable journeys with ease.
    <br />


    !!! IMPORTANT !!!
    IF YOU WANT TO TRY APP WITH MOCK DATA, YOU SHOULD SELECT THIS OPTION ON THE SEARCH FORM:

      FROM: Antalya(AYT)
      TO: Istanbul(SAW)
      DEPARTURE: 2023-10-02
      RETURN: 2023-10-03

  </p>
    <br />
    <a href="https://github.com/mchtter/flight-search-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://flighty.mucahit.dev/">View Demo</a>
    </div>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#testing">Testing</a></li>
      </ul>
    </li>
    <li><a href="#database">Database</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[![Flighty Screen Shot][product-screenshot-0]](https://flighty.mucahit.dev)
  Homepage for search flights form

[![Flighty Screen Shot][product-screenshot-2]](https://flighty.mucahit.dev)
  Homepage Loading State

[![Flighty Screen Shot][product-screenshot-1]](https://flighty.mucahit.dev)
  Warning Toast

[![Flighty Screen Shot][product-screenshot-4]](https://flighty.mucahit.dev)
  There is no flight for the selected date

[![Flighty Screen Shot][product-screenshot-5]](https://flighty.mucahit.dev)
  Flight Search Results

[![Flighty Screen Shot][product-screenshot-3]](https://flighty.mucahit.dev)
  Flight Search Results Loading State

[![Flighty Screen Shot][product-screenshot-6]](https://flighty.mucahit.dev)
  Sorted Flight Search Results

[![Flighty Screen Shot][product-screenshot-7]](https://flighty.mucahit.dev)
  Departure and Return Flight Changed

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

It was coded with ♥️, using the latest technologies.

[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![Javascript][Javascript]][Javascript-url]
[![Cypress][Cypress]][Cypress-url]
[![Tailwind][Tailwind]][Tailwind-url]
[![Webpack][Webpack]][Webpack-url]
[![Eslint][Eslint]][Eslint-url]
[![Prettier][Prettier]][Prettier-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
# Getting Started

Before starting the application development, you can easily set up the necessary environments on your computer by following the steps below.

* Clone the repo
   ```sh
   git clone https://github.com/mchtter/flight-search-app.git
   ```
## Installation

First, make sure you are in the root folder located in the root directory of the project using the terminal.
* npm
  ```sh
  cd flight-search-app
  ```

To install all the necessary files and packages and set up the environment, follow the steps below:

1. Install NPM packages
   ```sh
   npm install
   ```
2. Run the application
   ```sh
   npm run dev
   ```

Enjoy the coding!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

To run the tests, follow the steps below:


1. If you want to run the tests in the browser, run the following command.
   ```sh
   npm run test
   ```
2. If you want to run the tests headless mode, run the following command.
   ```sh
    npm run test:headless
   ```
3. If you want to run the tests with cypress test runner, run the following command.
   ```sh
    npm run cy:run
   ```
4. If you want to open the cypress test runner, run the following command.
   ```sh
    npm run cy:open
   ```
  
Note: The tests are run using the Cypress framework and it will work default port 4173. If you want to change the port, you can change it in the 'package.json' or you can configurate it in the 'cypress.config.js' file. 

[![Flighty Screen Shot][product-screenshot-9]](https://flighty.mucahit.dev)
  Test runner

[![Flighty Screen Shot][product-screenshot-9]](https://flighty.mucahit.dev)
  Test cases

[![Flighty Screen Shot][product-screenshot-8]](https://flighty.mucahit.dev)
  Test results

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Database


### Flights
      {
        "id": 1,
        "airline": "Turkish Airlines",
        "from": "Antalya(AYT)",
        "to": "Istanbul(SAW)",
        "departure": "2023-10-02",
        "departureTime": "10:00",
        "remainingSeat": 7,
        "price": "200"
      }

| Column Name   | Data Type |
| ------------- | --------- |
| id            | int8      |
| airline       | text      |
| from          | text      |
| to            | text      |
| departure     | date      |
| departureTime | timestamp |
| remainingSeat | number    |
| price         | number    |

## Roadmap

- [x] Add Tests
- [x] Add Search Flight Form
- [x] Add List Flight Results
- [x] Add Error and Warning Toast
- [x] Error Handling
- [x] API Mock Data
- [x] Add Loading Spinner

See the [open issues](https://github.com/mchtter/flight-search-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Alperen ERYILMAZ - [@mucoscript](https://twitter.com/mucoscript) - mchtter@gmail.com

Project Link: [https://github.com/mchtter/flight-search-app](https://github.com/mchtter/flight-search-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[nextjs-shield]: https://img.shields.io/badge/-VIEW%20DEMO-black.svg?style=for-the-badge&logo=nextdotjs&colorB=111
[nextjs-url]: https://flighty.mucahit.dev/

[product-screenshot-0]: src/assets/docs/app-screenshot-0.png
[product-screenshot-1]: src/assets/docs/app-screenshot-1.png
[product-screenshot-2]: src/assets/docs/app-screenshot-2.png
[product-screenshot-3]: src/assets/docs/app-screenshot-3.png
[product-screenshot-4]: src/assets/docs/app-screenshot-4.png
[product-screenshot-5]: src/assets/docs/app-screenshot-5.png
[product-screenshot-6]: src/assets/docs/app-screenshot-6.png
[product-screenshot-7]: src/assets/docs/app-screenshot-7.png
[product-screenshot-8]: src/assets/docs/app-screenshot-8.png
[product-screenshot-9]: src/assets/docs/app-screenshot-9.png

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://www.nextjs.org/
[React.js]: https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://www.react.dev/

[Javascript]: https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://www.js.org/
[Cypress]: https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://www.cypress.io/
[Tailwind]: https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://www.tailwindcss.com

[Webpack]: https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white
[Webpack-url]: https://webpack.js.org/

[Eslint]: https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[Eslint-url]: https://www.eslint.org/
[Prettier]: https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white
[Prettier-url]: https://www.prettier.io/
