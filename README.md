# kvk-search

## Short description
This tool makes it easy for B2B visitors on your site to retrieve their company info. It offers a simple search box where the visitor enters their company name.

## How it works
After user enters company name and clicks the serach button, the tool will call your server which contains your secret KVK api key. Get one here: https://developers.kvk.nl/. The server will call the KVK database and forward the entire response to your website.

The script on the website takes the first 10 results of the response and loads them into a series of divs in your html.

## Files
* the 'default' file contains the nginx configuration

* the 'kvk-search-node.js' file contains the server-side code

* the 'kvk-search.html' file contains the client-side code
