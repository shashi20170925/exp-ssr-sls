import * as express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
   const store=createStore();
    res.send(renderer(req.path, store));
});
app.listen(3000, () => {
    console.log("listining on port 3000");
})

export default app;
