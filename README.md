


This project has recently been converted from React/Javascript to Next JS/Typescript. The current cloud hosting the app will not host the backend so I have hosted the backend on a separate cloud server.

This app can be started in a docker container. Although, some of the env variables may not fully function in a docker environment at the moment until all features are added and issues fixed.

The backend is using both Django and Fast API and they both are connected to a postGRES database.

Some of the APIs used are openai, google text-to-speech  and google speech-to-text.

This project used to be a standalone project containing various app which include:
- Voice-to-text app
- Text-to-voice app
- Image Generator
- CRM

However, I have seen a lot of issues while trying to run all this in one single project so I am moving all the apps into their separate project to become a standalone. However, I would still like to use the same backend to manage all the services leveraging Docker.

After all the modifications, this app will now become just the frontend to link with the standalone apps. This will make my apps lighter and easier for me to manage as a separate concern.


Consideration

Currently, I am using different authentication django modules for all my apps. This does not seem efficient and becoming demanding for me to have to manage multiple authentication for different apps. I have plans underway to have a single sign-on which I think will also give a better user experience. Once users sign-in on this page, they will be able to use all my apps. This permissions will only be for my own personal projects. 