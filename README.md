# EasyHTTP Library

## Library for makeing HTTP requests

@Version 2.0.0
@Author Amin Pahlavani
@License MIT

- I added corse-unblocked extension to chrome to pass PUT request
- Fetch promises only reject with a TypeError when a network error occurs. Since 4xx and 5xx responses aren't network errors, there's nothing to catch. You'll need to throw an error yourself to use Promise#catch.
A fetch Response conveniently supplies an ok , which tells you whether the request succeeded.
