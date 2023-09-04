import cors from '@koa/cors';
import Koa from 'koa';
import { koaBody } from 'koa-body';
import ticketsFull from './tickets.json' assert { type: 'json'};
import http from 'http';

let tickets = [...ticketsFull];

const app = new Koa();

app.use(cors());

app.use(
  koaBody({
    urlencoded: true,
    multipart: true
  })
);

app.use(ctx => {
  const { method } = ctx.request.query;

  switch (method) {
    case "allTickets":
      ctx.response.body = JSON.stringify(tickets);
      return;

    case "createTicket":
      const { id, title, descriprtion, status, created } = ctx.request.body;
      tickets.push({ id, title, descriprtion, status, created });
      ctx.response.body = JSON.stringify("OK");
      return;

    case "ticketById":
      ctx.response.body = JSON.stringify(tickets.find(({ id }) => ctx.request.query.id === id).description);
      return;

    case "deleteTicket":
      const deleteIndex = tickets.findIndex(({ id }) => ctx.request.query.id === id);
      tickets.slice(deleteIndex, 1);
      ctx.response.body = JSON.stringify(deleteIndex);
      return;

    case "editTicket":
      const editedIndex = tickets.findIndex(({ id }) => ctx.request.query.id === id);
      const ticketForEdit = tickets[editedIndex];
      ticketForEdit.title = ctx.request.query.title;
      ticketForEdit.description = ctx.request.query.descriprtion;
      ctx.response.body = JSON.stringify(editedIndex);
      return;

    case "checkTicket":
      const checkedIndex = tickets.findIndex(({ id }) => ctx.request.query.id === id);
      tickets[checkedIndex].status = ctx.request.query.status;
      ctx.response.body = JSON.stringify(checkedIndex);
      return;

    default:
      ctx.response.status = 404;
      return;
  }
});

const server = http.createServer(app.callback());

const port = 7070;

server.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server listen on port ${port}`);
})
