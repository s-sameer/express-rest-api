// What is a REST API?
// API stands for Application Programming Interface - it is a way for two computers to talk each other
// REST is the most common communication standard between computers/applications over the internet.
// Most web and mobile apps use the REST standard for talking to servers.
// REST is a set of rules for building an API. 
// An API that follows the rules of rest is called a RESTful API
// In short: REST API is a way for computers/applications to talk each other over the internet

// Basics:
// A RESTful API organizes resouces (on a server) into a set of unique URIs
// The URIs differentiate the diff. types of resources on a server
// Resources should be grouped by nouns and not verbs
// A client interacts with a resource by making a request to the endpoint(URL) for the resource over HTTP
// Different types of requests:
// - get: read the data about an existing resource
// - post: create a new resource
// - put: update an existing resource
// - patch: update an existing resource
// - delete: delete an existing resource
// CRUD - create, read, update, delete
// The server formats the result of processing the request into a response
// A restful api returns proper http status codes
// 200 level -> Success
// 400 level -> Something is wrong with clients requests
// 500 level -> Something is wrong at the server level
// Every request and response is independent from each other
// If an endpoint returns a huge amount of data, use pagination
// - Common pagination scheme uses limit and offset as parameters (use sensible values if not specified by user)
// Versioning of an API is very important -> versioning allows backward compatibility
// - Prefix the version before the resource e.g /v1/products
// Besides REST, other popular API options include GraphQL and gPRC
// Browers can only make get requests
// Forms send a post request
// We use postman to test out APIs
// To uniquely identify each record in a db, we can add a unique id to it
// Common packages for creating REST APIs: express, body-parser, uuid