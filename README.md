


This project houses the frontend for the myafros project.

This app can be started in a docker container but api calls may not be available as all endpoints are contained in environment variables.

The backend uses Django and Fast API and both are connected to a postGRES database.

Some of the APIs used are openai, google text-to-speech  and google speech-to-text.

Main components in this project:
- Voice-to-text app
- Text-to-voice app
- Image Generator
- CRM

To get this project started in a development environment

npm run dev

ENV

`NEXT_PUBLIC_BASE_URL='http://localhost:<PORT>/api'`
`NEXT_PUBLIC_MYAFROSAI_HOME='http://localhost:<PORT>'`
`NEXT_PUBLIC_ALLAUTH_BASE_URL='http://localhost:<PORT>'`

