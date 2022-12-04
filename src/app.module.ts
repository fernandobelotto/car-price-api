import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportEntity } from './reports/reports.entity';
import { ReportsModule } from './reports/reports.module';
import { UserEntity } from './users/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ReportsModule,
    UsersModule,

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [UserEntity, ReportEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
