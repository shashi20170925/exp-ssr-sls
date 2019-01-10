import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Home } from './client/components/Home';
const app = express();

app.get('/', (req, res) => {
    const content = ReactDOMServer.renderToString(<Home />);
    res.send(content);
});
app.listen(3000, () => {
    console.log("listining on port 3000");
})

module.exports = app;