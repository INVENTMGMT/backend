# 307-project

<h3>Welcome Brothers, to the Serverless Dojo.</h3> 
<h4>Here we will master Graphql built on top of the serverless framework.</h4>

<p>Clone the repo and hit a quick <code>yarn install</code></p>
<br>
<p>Next, type in <code>serverless offline</code> and visit the url it generates on your local machine</p>
<br>
<p>Now you can start to play around with the <strong>resolvers, typedefs, and queries</strong> that our Apollo Server is working with</p>

<h5>Resolvers</h5>
<p>These will be the keywords that are waiting to be triggered. Our only resolver right now is <code>hello</code>
 
 
<h5>Typedefs</h5>
<p>Typedefs will define both Queries and the contents of any objects we return. This is where Graphql gets pretty powerful. Notice how our <code>hello</code> query is supposed to return a String.</p>

<h5>Queries</h5>
<p>In the same constant, we define all of the Queries our Graphql server will handle and what it returns. If we define another object, like a Store Item, it can hold a String id and Int price. Then our Query could be define to return a Store Item</p>
<br>
<p> Thats all I got for now, we'll do some demos when we meet</p>
