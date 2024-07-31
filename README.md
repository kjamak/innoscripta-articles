# Innoscript Articles

## Getting Started

This repository contains the code for the Innoscript Articles application. Follow the instructions below to set up and run the application using Docker, or manually using npm.

### Prerequisites

- **Docker**: Ensure Docker is installed on your machine. Follow the [Docker installation guide](https://docs.docker.com/get-docker/) for instructions.
- **Node.js**: If running manually, ensure you have [Node.js](https://nodejs.org/) installed.

### Setting Up the `.env` File

1. Remove the `.example` suffix from the `.env.example` file before running the application.

### Running with Docker

1. **Build the Docker Image**:

   docker build -t innoscript-app .

2. **Run the Docker Container**:

   ```bash
   docker run -p 3000:3000 innoscript-app
   ```

3. **Access the Application**: Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Manually

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Application**:

   ```bash
   npm start
   ```

3. **Access the Application**: Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.
