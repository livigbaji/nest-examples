import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getHello(): Promise<string> {
    const key = 'helloKey';
    const cachedValue = await this.cacheManager.get<string>(key);

    if (!cachedValue) {
      const value = 'Hello World!';
      await this.cacheManager.set(key, value, 1000);
      return value;
    }

    return cachedValue;
  }
}
