# Word Pal
Word Pal is a dictionary application where users search for words and view their definitions and synonyms. When also logged in through Discord, users can save words to their collection, which can further be grouped based on defined categories.

### [Live Deployment](https://wordpal.vercel.app)

![alt text](https://austinaluzzi.com/assets/images/dictionary.png "Demo Search")

# Technologies
- Next.js
- NextAuth
- Postgres
- Tailwind CSS
- HeadlessUI

This app was built in Next.js using the app router paradigm. A mixture of both client and server React components are used, integrated with server actions for data mutation. Postgres is utlized as a database to store users and their saved words and categories. NextAuth facilities account creation by using Discord as an auth provider. HeadlessUI improves interface development by providing components such as dialogs and dropdown menus.

# Installation

### Prerequisites
- **Node.js and npm**
- **Discord Developer App with OAuth2 Redirect URL set**

### Steps

1. Clone the repository
    ```
    git clone https://github.com/aaluzzi/word-pal.git
    cd word-pal
    ```

2. Install dependencies
    ```
    npm install
    ```

3. Set environment variables

    Create a `.env` file to configure your Discord application credentials:
    ```
    DISCORD_CLIENT_ID=""
    DISCORD_CLIENT_SECRET=""
    ```
4. Run the application
    ```
    npm start
    ```
