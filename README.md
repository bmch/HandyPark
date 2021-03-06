<h1 align="center">Handy Park</h1>

<div align="center">A car park booking application built with React and Node </div>

<p align="center">
  <img alt="Application View" src="https://i.imgur.com/emJU2TZ.jpg">
</p>

## ❯ What is this and who is it for 🤷‍♀️

HandyPark is a parking management app designed for car parking companies to manage and sell spaces online.
It overlays custom price markers for each parking location using the [google-map-react](https://github.com/google-map-react/google-map-react) library. This project was completed in one week. The purpose was was to get more experience with React, Material-UI and styled components.

---

## ❯ Screenshots 🖥️ 📷

<p align="center">
  <img alt="Application View" src="https://github.com/bmch/HandyPark/blob/master/img/React%20App.gif">
</p>

<p align="center">
  <img alt="Application View" src="https://i.imgur.com/2ddhxcu.png">
</p>

Material UI admin panel

<p align="center">
  <img alt="Material UI Admin Panel" src="https://i.imgur.com/jPYTL1m.png">
</p>
---

## ❯ Installation 💾

### Setting up the server 🛠

Type the following command into the terminal to pull down a copy of the code

```bash
git clone https://github.com/bmch/HandyPark.git
```

To change your current directory to the server folder

```bash
cd server
```

To install all of the server dependencies type

```bash
npm install
```

Next create a .env file (or copy the .env.example file) in the server folder with a line of JWT_SECRET=add-your-key-here, add any secret/key you like.

```bash
cp .env.example .env
```

Ensure MongoDB is running and then type node index.js to run the server

```bash
node index.js
```

### Setting up the client 🛠

Move to the client directory

```bash
cd ../client
```

Copy the example .env.development.example file and make the required configuration changes to it.
You will need to add a Google Map API Key and ensure the server URL is correct

```bash
cp .env.development.example .env.development
```

Install the project dependencies

```bash
npm install
```

Run webpack to start the react application

```bash
npm run devserver
```

---

## ❯ Contributing

I built this application in 7 days in a race against time. There is a lot of room for improvement. If you feel like it, you're more than welcome to contribute to the project. Just fork the repository and submit a pull request. Thanks in advance!

## ❯ Author

Brendan McHugh > [Github](https://github.com/bmch)

## ❯ License

[MIT](https://opensource.org/licenses/MIT)
