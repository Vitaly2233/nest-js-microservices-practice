import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  @MessagePattern('get_hello')
  async getHello() {
    let times = 0;
    for (let i = 0; i < 100; i++) {
      times++;
    }
    console.log(times);

    return 'hello';
  }
}
