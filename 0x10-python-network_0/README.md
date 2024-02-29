# :shell: 0x10 - cURL debugging :shell:

In this project I will be creating a variety of bash scripts to do operations on web servers and get information from requests. I will be primarily using curl to acomplish the actual HTTP requests.

## :running: Getting Started

* [Ubuntu 14.04 LTS](http://releases.ubuntu.com/14.04/) - Operating system reqd.

* [Python 3.4](https://www.python.org/download/releases/3.4.0/) - Python Version Used

## :warning: Prerequisites

* Must have `git` installed

* Must have repository cloned

* Must have `python3` installed

```
$ sudo apt-get install git
```

```
$ sudo apt-get install python3
```
## Learning objectives: General

URL (Uniform Resource Locator): A URL is a reference or address to a resource on the internet. It specifies the protocol to be used (such as HTTP or HTTPS), the domain or IP address where the resource is located, and additional parameters like paths and queries.

HTTP (Hypertext Transfer Protocol): HTTP is a protocol used for transferring hypermedia documents, such as HTML. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.

Reading a URL: A URL is typically structured as follows:

Scheme for HTTP URL: The scheme for HTTP URLs is http://.

Domain Name: A domain name is a human-readable label assigned to an IP address on the internet. It typically represents a website or a server.

Sub-domain: A sub-domain is a subdivision of a larger domain. For instance, in sub.example.com, "sub" is the sub-domain.

Port Number in a URL: Port numbers are specified after the domain name or IP address, separated by a colon. For example, :8080 specifies port 8080.

Query String: A query string is part of a URL that contains data to be passed to the server as parameters. It follows the path and is preceded by a question mark (?).

HTTP Request: An HTTP request is a message sent from a client (e.g., web browser) to a server, requesting a resource such as a web page.

HTTP Response: An HTTP response is a message sent from a server to a client in response to an HTTP request. It contains the requested resource or an error message.

HTTP Headers: HTTP headers are additional pieces of information sent along with an HTTP request or response. They contain metadata about the message, such as content type, cookies, caching directives, etc.

HTTP Message Body: The HTTP message body contains the actual data being sent in an HTTP request or response, such as the contents of a web page or form data.

HTTP Request Method: An HTTP request method defines the type of action the client wants to perform on a resource. Common methods include GET, POST, PUT, DELETE, etc.

HTTP Response Status Code: An HTTP response status code indicates the outcome of the server's attempt to fulfill the client's request. Examples include 200 for success, 404 for not found, 500 for server error, etc.

HTTP Cookie: An HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the web browser. It is often used for tracking user sessions, storing user preferences, and other purposes.

Making a Request with cURL: cURL is a command-line tool for transferring data with URLs. You can make an HTTP request using cURL by specifying the URL and desired options, such as headers or request method.

When typing google.com in your browser (Application level): When you type "google.com" in your browser and hit Enter, your browser initiates an HTTP request to the Google servers. The server processes the request and responds with the Google homepage, which your browser then renders for you to see and interact with.

## :blue_book: Authors
* **Ricardo Sass** - [@bluegalaxy13](https://github.com/bluegalaxy13)

