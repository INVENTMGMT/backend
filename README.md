# 307-project

<h3>Welcome Friends, to the Serverless Dojo.</h3> 
<h4>Here we will master Graphql built on top of the serverless framework.</h4>

<h3>Style Requirements</h3>
<p>For all Javascript files, we are using ESLint plugin off of VSCode to maintain similar style requirements.</p>
<p>For Python files, we shall use the styles depicted in pycodestyle; the package's information can be found via the following URL:</p>
<ol>
<li>https://pypi.org/project/pycodestyle/</li>
</ol>

<h3>Setup</h3>

<p>Clone the repo and install these dependencies..</p>
<ul>
 
<li><code>yarn global add serverless</code></li>
<li><code>yarn add serverless-offline --save-dev</code></li>
<li><code>yarn add apollo-server-lambda</code></li>
</ul>
<br>
<p>Next, type in <code>serverless offline</code> and visit the url it generates on your local machine</p>
<br>
<p>Now you can start to play around with the <strong>resolvers, typedefs, and queries</strong> that our Apollo Server is working with</p>

<h5>Resolvers</h5>
<p>These will be the keywords that are waiting to be triggered.</p>
 
 
<h5>Typedefs</h5>
<p>Typedefs will define both Queries and the contents of any objects we return. This is where Graphql gets pretty powerful. Notice how our <code>hello</code> query is supposed to return a String.</p>

<h5>Queries</h5>
<p>In the same constant, we define all of the Queries our Graphql server will handle and what it returns. If we define another object, like a Store Item, it can hold a String id and Int price. Then our Query could be define to return a Store Item</p>
<br>
<p> Thats all I got for now, we'll do some demos when we meet</p>

<h3>Installing Docker</h3>
<p>Visit the website <a href=https://docs.docker.com/get-docker/> here </a></p>
<p>Now follow these commands closely</p>
<ol>
 <li>Choose your respective OS and install docker</li>
 <li>Check Docker installed properly with <code>docker --version</code></li>
 <li>Hit <code>docker pull amazon/dynamodb-local</code></li>
 <li>Run <code>docker run -p 8000:8000 amazon/dynamodb-local</code></li>
 <li>This shell is now being used for the db listener. Open another shell and run <code>scripts/create-table</code> from the project root directory</li>
 <li>The printout should list a new table got created on our localhost</li>
</ol>


<h1>GraphQl Docs</h1>

<h2>1) Adding an item</h2>
<h5>Usage</h5>
<p> '{ "query": "{ addItem(id: ID, name: String, price: Int, quantity: Int) { id name price quantity} }" }' </p>
<h5>Return Value: Item</h5>
<p>{"data" : { "addItem" : { "id" : ID, "name" : String, "price" : Int, "quantity" : Int}}}</p>
<p>When your request returns to the frontend, it will be in JSON format. Access any of the attributes of the Item typedef</p>
<h5>**Special Use Case**</h5>
<p>This can double as an <strong>update</strong> function in the backend. If the ID already exists in the backend, the item sent will replace the existing one.</p>
<h5>Instances where this can be used to update</h5>
<ul>
 <li>Adding more of an existing item from a recent shipment</li>
 <li>Changing the price</li>
 <li>Selling/shipping an item, and reducing the quantity in stock</li>
 <li>Starting a sale on a particular set of items (multiple add item calls in ONE single query string is possible</li>
</ul>


<h2>2) Getting Item by Name</h2>
<h5>Usage</h5>
<p> '{ "query": "{ getByName (name: String) { id name price quantity } }" }' </p>
<h5>Return Value: [Item]</h5>
<p>{"data":{"getByName": [{"id" : ID, "name" : String, "price" : Int , "quantity" : Int}, {"id" : ID, "name" : String, "price" : Int, "quantity" : Int}] }}</p>
<p>When your request returns to the frontend, it will be in JSON format. Index into the list and access any of the attributes of the Item typedef</p>
<h5>Explanation</h5>
<p>Use this query to retrieve all items that contain your keyword. For example, if you were looking for any kind of "ball", the search would return a baseball, football, soccer ball etc.</p>

<h2>3) Getting Item by ID</h2>
<h5>Usage</h5>
<p> '{ "query": "{ getByID (id: ID) { id name price quantity } }" }' </p>
<h5>Return Value: Item</h5>
<p>{"data" : {"getByID" : { "id" : ID," name" : String, "price" : Int, "quantity" : Int }}</p>
<p>When your request returns to the frontend, it will be in JSON format. Access any of the attributes of the Item typedef</p>
<h5>Explanation</h5>
<p>This one will returned a particular item with its respective ID. The use case here is when someone uses a barcode or SKU number for an item. It returns exactly one item OR none if it doesnt exist</p>

<h2>4) Deleting an Item (by ID) </h2>
<h5>Usage</h5>
<p> '{ "query": "{ deleteItem (id: ID, name: String, price: Int, quantity: Int): Item) { id name price quantity } }" }' </p>
<p>This will require your entire object to delete. This should be possible because that data is already being displayed in the client. Package all of that back up and send it to the backend to be delete</p>
<h5>Return Value</h5>
<p>Returns an item on a successful delete</p>
<h5>Explanation</h5>
<p>Can emulate items being sold or taken out of inventory</p>


<h2>4) Carrying out a Transaction </h2>
<h5>Usage</h5>
<p> '{ "query": "{ trx (itemId ID, quantity: Int, shipped: Boolean, address: String): Transaction) { id quantity shipped address } }" }' </p>
<p>This will simulate a customer making a purchase. The item in the inventory database will be appropriately decreased and then the purchase information is stored in the transaction table. The client is responsible for supplying a possible quantity and the correct item ID</p>
<h5>Return Value</h5>
<p>Returns the transaction information and shipping information IF applicable</p>
<h5>Explanation</h5>
<p>Classic operations of a transaction</p>

