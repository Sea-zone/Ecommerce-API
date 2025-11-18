import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './categories/category.module';
import { customerModule } from './customer/customer.module';
import { pgConfig } from './database/config';
import { OrderModule } from './orders/order.module';
import { ProfileModule } from './profile/profile.module';
import { userModule } from './user/user.module';
@Module({
  imports: [
    userModule, customerModule, ProfileModule, OrderModule, CategoryModule,
    MikroOrmModule.forRoot(pgConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
