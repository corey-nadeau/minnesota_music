# Minneapolis Music Capstone Project Site

This is a web application that allows users to search for music events and artists in Minneapolis, MN, using APIs from Spotify and Ticketmaster. Additionally, the site features a CRUD (Create, Read, Update, Delete) operation where the user can create, read, update, and delete events. The backend is built with Python, Flask, and SQL, while the frontend is built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

To run this project, you will need to have the following software installed on your machine:

- Node.js
- Python
- Flask
- SQL database (e.g. SQLite)

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/minneapolis-music.git
```

2. Change to the project directory.

```bash
cd minneapolis-music
```

3. Install the frontend dependencies.

```bash
npm install
```

4. Install the backend dependencies.

```bash
pip install -r requirements.txt
```

### Configuration

1. Create a `.env` file in the project root directory.

```bash
touch .env
```

2. Add the following environment variables to the `.env` file.

```
REACT_APP_SPOTIFY_CLIENT_ID=<your Spotify client ID>
REACT_APP_SPOTIFY_CLIENT_SECRET=<your Spotify client secret>
REACT_APP_TICKETMASTER_API_KEY=<your Ticketmaster API key>
DB_CONNECTION_STRING=<your database connection string>
```

### Usage

1. Start the backend server.

```bash
python app.py
```

2. Start the frontend server.

```bash
npm run dev
```

3. Open your browser and navigate to http://localhost:3000.

## Features

- Search for music events and artists in Minneapolis using APIs from Spotify and Ticketmaster.
- Create, read, update, and delete artists and events using a backend built with Python, Flask, and SQL.
- Responsive UI built with React and Tailwind CSS.
- Uses React Slider Images for image slider gallery.
- Uses EmailJS to send contact form emails to site owner.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork this repository.
2. Create a new branch with your feature or bug fix.
3. Make changes and commit them to your branch.
4. Push your changes to your forked repository.
5. Open a pull request and describe your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

link to hosted site:   https://minneapolis-music.netlify.app/
