import {
  Inject,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class AppService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  constructor(@Inject('HELLO_SERVICE') private client: ClientProxy) {}

  async onApplicationShutdown(signal?: string) {
    await this.client.close();
  }

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  async getHello() {
    return lastValueFrom(this.client.send('get_hello', {}));
  }
}
