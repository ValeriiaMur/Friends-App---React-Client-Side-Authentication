# Friends-App---React-Client-Side-Authentication
Practicing Client-Side Authentication with this Single Page Application. There is an API built that has authentication built into it. It holds a list of friends and lets you add, edit, or remove friends from that list. The list of friends is protected and can be viewed only if you have a JWT stored in your local storage. Login will change to Logout if the token is present.

![img](1.png)
![img](2.png)

# The endpoints that this API has to offer in server.js:

[POST] * to /api/login: returns a token to be added to the header of all other requests. Pass in the following credentials as the body of the request: { username: 'Valerie', password: '123' }

[GET] to /api/friends: returns the list of friends.

[GET] to /api/friends/123: returns the friend with the id passed as part of the URL (123 in example).

[POST] to /api/friends: creates a friend and return the new list of friends. Pass the friend as the body of the request (the second argument passed to axios.post).

[PUT] to /api/friends/:id: updates the friend using the id passed as part of the URL. Send the an object with the updated information as the body of the request (the second argument passed to axios.put).

[DELETE] to /api/friends/123: removes the friend using the id passed as part of the URL (123 in example).
