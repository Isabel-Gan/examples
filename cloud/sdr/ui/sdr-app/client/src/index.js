/*eslint-env browser*/
// Generic react client app, generated by create-react-app, that starts App.js

// node imports
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';
import {
    BrowserRouter,
    Route,
    Link,
} from 'react-router-dom';
/// node imports

// local imports
import gql from 'graphql-tag';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'carbon-components/css/carbon-components.css'
import 'carbon-addons-cloud/css/styles.css'
import '@ibm/plex/css/ibm-plex.css'
/// local imports

const client = new ApolloClient({
    link: createUploadLink(),
    cache: new InMemoryCache()
});

// Test a query to graphql on our back-end
const NOUNS_LIST = gql`
{
    nouns {
        noun
        sentiment
        numberofmentions
        timeupdated
    }
}
`;
client.query({ query: NOUNS_LIST }).then(console.log);

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
