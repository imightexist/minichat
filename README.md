# minichat
host a chat app
# setting up
1. make sure nodejs is installed (the ubuntu script just installs node, you still have to run the linux script)
2. go to the grab deps folder and run the script for your os
3. set up shit in the config.json file
4. start the nodejs file
# config.json
what all the shit means in config.json
## webserver
it hosts a webapp that allows you to chat on the same port. without it you can use the main client (coming soon) or make your own chat client.
## folder
the folder for the webserver
## logfile
logs the chat to the specified file
## port
what port the server is hosted on
# so how the fuck does this work?
its a websocket server
