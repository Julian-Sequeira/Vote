# Vote
A (very) simple voting web application - practice for the CSC309 (Web programming) Exam

# Instructions

0) Create vote.js, a node server using express, express-static,
   sqlite3, ws etc. The server should listen on ports 8000
   and 8001 (for ws). Run and test vote.js, at least it should
   serve up static-content.

1) In static-content/vote.html, create react components sufficient 
   to build the vote application.
   The components will not query the backend yet.

   That is a VoteComponent, VoteButton, VoteIssue and VoteResults
   The GUI should look like...

   IAmGoingToEndGame [yes] [no] So far yes=23, no=44

2) Use your components to mock up the above example. 

3) Create a restful API which has the following routes

   POST /api/vote/:issue/:vote
   The response should be JSON listing the current
   votes on the issue.

   Used to register your vote on an issue

   Example: POST /api/vote/IAmGoingToEndGame/yes 
   Response:
   { "yes":23, "no":44 }

   NOTE: For now, you can store all of the votes in a single JS object,
   for example

   var votes = {}; 

   At some point votes might look like
   { "IAmGoingToEndGame": { "yes":44, "no":32 }, "csc309isgreat": { "yes":99, "no" : 0 }}

4) Check that your restful api works, that is, use the browser
   to issue some requests.

5) Modify your react code so that it is almost, that is, when the user clicks
   a button, an ajax request is sent to the server.

6) Modify your react code that that it is live, that is, when the user clicks
   a button, an ajax request is sent to the browser. The response
   is captured and the state of the VoteComponent is modified.
   The user then sees the current votes on the issue. Of course
   this is only when they vote.

7) Modify the server code (vote.js) so that it accepts socket
   connections and when a user votes (in the restful api), the
   collection of all votes is sent back to interested, web socket
   connected clients.

8) Add web sockets to the client. To keep things simple, we will 
   use web sockets outside of React. Add another div to vote.html
   and then populate it with the messages recieved from the websocket.

