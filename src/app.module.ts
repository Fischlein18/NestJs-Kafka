import { Module } from '@nestjs/common';
import { KafkaModule } from './common/kafka/kafka.module';
import { ConsumerModule } from './consumer/consumer.module';
import { DefaultModule } from './default/default.module';

Module({
  imports: [
    KafkaModule.register({
      clientId: 'test-app-client',
      brokers: ['192.168.99.104:9092'],
      groupId: 'test-app-group',
    }),
    DefaultModule,
    ConsumerModule,
  ],
})
export class AppModule {}