import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { Home } from './client/components/Home';
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    const content = ReactDOMServer.renderToString(<Home />);
    const html=`<html>
    <head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

        </head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
    </html>
    
    `;
    res.send(html);
});
app.listen(3000, () => {
    console.log("listining on port 3000");
})

export default app;
