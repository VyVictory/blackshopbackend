import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './user/midđlewares/auth.middleware'; // Corrected import path
//import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { ProductTypeModule } from './product_type/product-type.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot("mongodb+srv://blackshop:blackshopmongodb@blackshop.5c90je5.mongodb.net/?retryWrites=true&w=majority&appName=blackshop"),
    ProductModule,
    ProductTypeModule,
    UserModule,
    UploadModule,
   // CartModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}

