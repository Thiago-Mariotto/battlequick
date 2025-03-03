/* eslint-disable @typescript-eslint/ban-types */
import express, { Request, Response } from 'express';
import HttpServer from './HttpServer';

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (req: Request, res: Response) {
      const output = await callback(req.params, req.body);
      res.status(output.status).json(output.response);
    });
  }

  listen(port: number): void {
    this.app.listen(port, () => console.log(`app listen on: ${port}`));
  }
}