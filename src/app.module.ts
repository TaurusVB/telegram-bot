import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: '6584897423:AAH1ho5c3J9e4nT_EqeCJYB6UDRoWfD85XY',
      }),
    }),
    ChatgptModule,
  ],
})
@Update()
export class AppUpdate {
  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Welcome');
  }

  @Help()
  async help(@Ctx() ctx) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hears(@Ctx() ctx) {
    await ctx.reply('Hey there');
  }
}

export class AppModule {}
