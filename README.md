# BioBot

BioBot is an AI-powered chatbot designed to provide conversational assistance on biotechnology topics. It remembers the context of the conversation, making interactions more natural and informative.

## Features

- Conversational capabilities with context retention
- Provides information related to various biotechnology topics
- Front-end bundled using `vite.js`
- Back-end built with Node.js
- Powered by Cohere AI chat models

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Cohere AI API keys

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Biotechnologyguy/BioBot.git
    cd biobot
    ```

2. Set up the environment variables:
    ```bash
    nano .env
    ```
    Add your Cohere AI API key to the `.env` file (variable: `COHERE_API_KEY`).

### Running the Front-End

1. Navigate to the client folder:
    ```bash
    cd client
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm run dev
    ```

### Running the Back-End

1. Open another terminal or command prompt.

2. Navigate to the server folder:
    ```bash
    cd server
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the server:
    ```bash
    node server.js
    ```

## Usage

Once the application is running, you can interact with BioBot through the provided interface. Simply start the conversation and ask any biotechnology-related questions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## Contact

For any questions or feedback, please reach out to [founder@biotechnologyguy.com](mailto:founder@biotechnologyguy.com).