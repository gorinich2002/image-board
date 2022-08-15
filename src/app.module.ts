import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port : 5432,
      username: 'root',
      password: 'root',
      database: 'postgres',
      models: [],
      autoLoadModels:true

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
