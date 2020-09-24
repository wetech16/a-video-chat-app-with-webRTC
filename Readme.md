# Build a video chat app with WebRTC

## VSCODE

## React

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
        .on { 'connection' }
            .on {'join-room', roomId, userId}
                - join { roomId  }
                - to {roomId}.broadcast.emit { 'user-connected', userId }
                - on { 'disconnect' }
                    - to{roomId}.broadcast.emit{'user-disconnected', userId}
    - server.listen
- room.ejs 
    - style 
    - script { express.get(/room), socket.on }
- script.js 
    - new Peer { peerJs }
        - on { 'open', id }
            - socket.emit{'join-room', ROOM_ID, id }socket.emit
        - on { 'call', call} 
            - answer { stream }
            - on { ' stream, userVideoStream }
                - addVideoStream{video, userVideoStream}
    - socket { io('/') }
        - on {'user-connected', userId}
            - connectToNewUser {userId, stream}
                - call {userId, stream}
                    - on {'stream', userVideoStream}
                        - addVideoStrewam {video, userVideoStream}
                    - on {'close'}
                        - video.remove
        - on {'user-disconnected', userId }
            - close()        
    - videoGrid {getElementById('video-grid')}
    - myVideo {createElement('video')
        - myVideo.muted
    - getUserMedia
        - addVideoStream{myVideo, stream}
            - srcObject{stream}
            - addEventListener{'loadedmetadata'}
                - play
            - videoGrid.append{video}
-----
v4: from uuid
room.ejs: ejs
peerJs: userId generated server peerjs --port 3001
i --save-dev nodemon
