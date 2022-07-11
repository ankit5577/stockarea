<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://stockarea-frontend.herokuapp.com">
    <h1 align="center">Stockarea</h1>
  </a>

  <h3 align="center">Stockarea: frontend assignment</h3>

  <p align="center">
    <a href="https://stockarea-frontend.herokuapp.com">View Demo</a>
  </p>
</p>
 
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>


### Built With

For | Technlogy
------------ | -------------
Frontend📱 | reactJS, HTML, CSS
Backend💻 | NodeJS, ExpressJS
Database📀 | MongoDB 
Deployed☁️ | Heroku 


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* node - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installation
1. Clone the repo
   ```bash
   $ git clone https://github.com/ankit5577/stockarea.git
   ```
2. Install NPM packages in both `main` and `react16` folder
   ```bash
   $ npm install
   $ cd react16 && npm install
   ```
3. add `.env` file main folder
   ```env
    PORT=3000
    MONGO_URL=mongodb+srv://ankit5577:ankit5577@stockarea.kygp3.mongodb.net/stockarea?retryWrites=true&w=majority
   ```
4. go to `react16` folder and run
  ```bash
   $ touch .env.development .env.production
   ```
5. add in `.env.development`
  ```env
    REACT_APP_API_URL=http://localhost:3000/api
   ```
6. run ```npm start``` in both main and react16 folders.
