import * as React from 'react';
import {renderToString} from 'react-dom/server';
import  {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';

export default (path: string, serverStore:any)=>{

    const content = renderToString(
        <Provider store={serverStore} >

    <StaticRouter location={path} context={{}} >
<Routes  />
        </StaticRouter>
        </Provider>

   );
    return `<html>
    <head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

        </head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
    </html>
    
    `;
}