# RTKQ-demo

## Data Normalization
### Normalization: 
1. Recommended in docs
2. No duplication of data
3. Creates an ID lookup
### createEntityAdapter API: 
1.Abstracts more logic from components 
2.Built-in CRUD methods 
3.Automatic selector generation
### State Shape:
{ posts:
    {
    ids: [1,2,3,...J,
    entities: {
    'T: {
    userld: 1, id: 1, title: etc.

# Using RTK Query with entityAdapter
## JSON-server
1. Grab data from jsonplaceholder website and paste them into data/db.json
2. Install json-server globally: $npm i json-server -g
3. Start the server: $json-server --watch data/db.json --port 3500
4. It now sees the users and posts.
