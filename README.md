# Text Analyzer

## Instructions

1. ### Frameworks and Tools
   - NestJS (Backend)
   - Vite (Frontend)
   - MySQL (Database)
   - TypeORM (ORM)
   - Tailwind CSS (Styling) -> very basic styling though
   - Logger (Winston) -> can be found inside combined.log, error.log
   - NestJS Throttler (Rate Limiting) -> please check app module ts and it has overriden once at text-analyzer controller
   - concurrently (npm package) -> to run frontend and backend concurrently
   - SSO using auth0
   - Too Many Requests (429) -> custom exception page at frontend
   - 404 page -> frontend when no route found
   - Swagger API Documentation -> `http://localhost:5000/api`
2. ### Clone the repository
   ```bash
   git clone https://github.com/ashraf-kabir/text-analyzer.git
   ```
3. ### Install the dependencies
   ```bash
   cd text-analyzer
   ```
   #### for mac & linux (consider non-root user)
   ```bash
   # chmod +x initialize.sh
   ./initialize.sh
   ```
   #### for windows
   ```bash
   ./initialize.bat
   ```
4. ### Prepare DB locally

   ```sql
   CREATE DATABASE text_analyzer;

   USE text_analyzer;

   DROP TABLE IF EXISTS `text`;
   CREATE TABLE `text` (
    `id` int NOT NULL AUTO_INCREMENT,
    `content` text NOT NULL,
    `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    INSERT INTO `text` (`id`, `content`, `createdAt`) VALUES (1, 'Random Text. Test Hello Dhaka.\nTest 123', '2024-09-28 01:27:04'), (2, 'Scar tissue that I wish you saw. Sarcastic mister know-it-all.', '2024-09-28 09:12:51'), (3, 'New text', '2024-09-28 11:17:28'), (4, 'Random evening', '2024-09-28 14:44:39');
   ```

5. ### Run the application
   ```
   npm run dev
   ```
6. ### Open the browser and go to the following URL
   ```
   http://localhost:5173
   ```
7. ### Backend Base URL
   ```
   http://localhost:5000
   ```
8. ### Backend API Endpoints

   1. ### CRUD

      1. Add Text CURL

         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer' \
         --header 'Content-Type: application/json' \
         --header 'Authorization: Bearer <TOKEN>' \
         --data '{
             "text": "Scar tissue that I wish you saw. Sarcastic mister know-it-all."
         }'
         ```

      2. Get Texts CURL

         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer' \
         --header 'Authorization: Bearer <TOKEN>'
         ```

      3. Get Text by ID CURL
         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer/1' \
         --header 'Authorization: Bearer <TOKEN>'
         ```
      4. Update Text by ID CURL
         ```
         curl --location --request PUT 'http://localhost:5000/api/v1/text-analyzer/1' \
         --header 'Content-Type: application/json' \
         --header 'Authorization: Bearer <Token>' \
         --data '{
             "text": "Random Text."
         }'
         ```
      5. Delete Text by ID CURL
         ```
         curl --location --request DELETE 'http://localhost:5000/api/v1/text-analyzer/1' \
         --header 'Authorization: Bearer <Token>'
         ```

   2. ### Text Analysis
      1. Count Words
         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer/count-words/1' \
         --header 'Authorization: Bearer <TOKEN>'
         ```
      2. Count Characters
         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer/count-characters/1' \
         --header 'Authorization: Bearer <TOKEN>'
         ```
      3. Count Sentences
         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer/count-sentences/2' \
         --header 'Authorization: Bearer <TOKEN>'
         ```
      4. Count Paragraphs
         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer/count-paragraphs/1' \
         --header 'Authorization: Bearer <TOKEN>'
         ```
      5. Longest Word
         ```
         curl --location 'http://localhost:5000/api/v1/text-analyzer/longest-word/2' \
         --header 'Authorization: Bearer <TOKEN>'
         ```

### Note: Alternate instructions for manual setup

```bash
sudo git clone https://github.com/ashraf-kabir/text-analyzer.git
cd text-analyzer
npm install
sudo cp .env.example .env
cd client
npm install
sudo cp .env.example .env

cd ..
# go back to project root
# serve the application frontend and backend concurrently
npm run dev
```

_Note: setup mysql and create database text_analyzer and table text as mentioned above._

### Author

Ashraf Kabir

Email: ashrafkabir95@gmail.com

WhatsApp: [+8801751336666](https://wa.me/+8801751336666)

### Some screenshots:

1. [https://ibb.co.com/MCLxCRw](https://ibb.co.com/MCLxCRw)
2. [https://ibb.co.com/0nK7T5X](https://ibb.co.com/0nK7T5X)
3. [https://ibb.co.com/v1k0sNZ](https://ibb.co.com/v1k0sNZ)
4. [https://ibb.co.com/b7Ys82P](https://ibb.co.com/b7Ys82P)
5. [https://ibb.co.com/DYMXLxD](https://ibb.co.com/DYMXLxD)
6. [https://ibb.co.com/7tv60sS](https://ibb.co.com/7tv60sS)
7. [https://ibb.co.com/zftfWkc](https://ibb.co.com/zftfWkc)
8. [https://ibb.co.com/bQB7Qnw](https://ibb.co.com/bQB7Qnw)
9. [https://ibb.co.com/DDXsR3m](https://ibb.co.com/DDXsR3m)
10. [https://ibb.co.com/p0V09C7](https://ibb.co.com/p0V09C7)
11. [https://ibb.co.com/N1Vs9hS](https://ibb.co.com/N1Vs9hS)
