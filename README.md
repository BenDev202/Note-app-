# NotesApp

NotesApp is a free, simple note-taking application built with Node.js, Express and Mysql.

## Project Structure

The project consists of the following main files:

- `app.js`: The main application file
- `package.json`: Defines project dependencies and scripts
- `.gitignore`: Specifies files and directories to be ignored by Git

## Dependencies

The project uses several npm packages, including:

- express
- express-ejs-layouts
- dotenv
- ejs
- mysql
- passport
- and others for authentication and session management

## Setup

1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables

4. Start the server:

   ```
   npm start
   ```

## Features

- Express server setup with EJS templating engine
- Static file serving
- Environment variable configuration with dotenv
- Basic routing setup

## Development

To run the application in development mode with auto-reloading:

```
npm run dev
```

This uses nodemon to automatically restart the server when files change.

## Contributing

Contributions are welcome. Please fork the repository and create a pull request with your changes.

## License

[MIT License](LICENSE)
