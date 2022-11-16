import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'HELLO_SERVICE',
                transport: Transport.REDIS,
                options: {
                    host: '0.0.0.0',
                    port: 6379,
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
