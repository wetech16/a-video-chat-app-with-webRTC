## boilplate package.json npm init -y

## backend npm i express ejs socket.io

## dependency npm i uuid

## npm i --save-dev nodemon

## scripts: "devStart": "nodemon server.js" -- npm run devStart

## server.js

## room.ejs

## socket io

## peerjs for handle userId npm i -g peer
    server: peerjs --port 3001
    
    
## Build a video chat app with WebRTC

## VSCODE

## React
-

## CSS

## BackEnd
- package.json
    - run { nodemon }
- server.js
    - app { express }
        - set { 'view engine', ejs } 
        - use { express.static('public') }
        - render { 'room', roomId, | get{'/:room'}, v4 , redirect } 
        
    - io { socket.io } 
        1. join { roomId | on{'join-room', (roomId, useId) } | on{'connection', socket}  }
        2. to{roomId}.broadcast.emit { 'user, userId }
    - server.listen
- room.ejs 
    - style 
    - script { express.get(/room), socket.on }
- script.js 
    - socket { io('/') }
        - emit('join-room', 
        - on
-----
v4: from uuid
room.ejs: ejs
peerJs: peerjs --port 3001
i --save-dev nodemon
