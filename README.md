# BookSearch

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

A book search engine in MERN

## Description

A book search and storage site that is built using the MERN stack. The application was already built but was built using RESTful API. I successfully refactored this application to be a GraphQL API built with Apollo Server.
The application opens to a search page that allows users to search for any book on the Google Books platform. The application makes use of the Google Books api and returns results based on the user's input. The application will allow users to search for books without being logged in, however, if the user would like to save a book to a list, they will either need to log in or sign up. Clicking the Login/Signup button on the top right corner will allow them to either login or sign up for an account. When the user signs up, the must enter a username, email address and a password. On click of submit the user is registered and logged in. The user can now see a new link option in the right corner to view saved books. If they are a new user, they will not have saved books, but if they have been regular users will see books in their list. The search page should show a list of books based on the search term entered. They should see an image, list of authors, description, a link to the book on Google Books and a save button. If they are on the list of saved books they should see the same options except the book will have button to remove the book from their list. Clicking the logout will log them out of the application.

## Usage

Below is a screenshot of the completed, deployed site.
![Screenshot of the completed and deployed BookSearch application](/Assets/images/Screenshot-BookSearch.png)

This is the link to the deployed application on Heroku: https://boiling-citadel-64814-3bab821fe02c.herokuapp.com/

## Credits

I would like to acknowledge that I pulled a lot of code from examples provided to me through the UNB Coding Bootcamp, specifically modules 20 and 21.

## License

MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
