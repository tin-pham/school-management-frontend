import { Injectable, OnInit } from '@angular/core';
import { CacheStorageFacet, CacheStorageService } from '@core/services/cache.service';

@Injectable()
export abstract class CacheForm<T> implements OnInit {
  private cacheStorage: CacheStorageFacet;
  abstract dto: T;
  private excludeFromCache: string[];

  constructor(cacheService: CacheStorageService, cacheKey: string, excludeFromCache: string[] = []) {
    this.cacheStorage = cacheService.forKey(cacheKey);
    this.excludeFromCache = excludeFromCache;
  }

  ngOnInit() {
    this.restoreCacheStorage(this.dto);
  }

  async restoreCacheStorage(dto: T): Promise<void> {
    const cachedFormData = await this.cacheStorage.get();

    if (cachedFormData) {
      Object.assign(dto, cachedFormData);
    }
  }

  saveToTemporaryStorage(): void {
    // Create a shallow copy of the DTO
    const dtoCopy = { ...this.dto };

    // Remove the properties that should not be cached
    for (const key of this.excludeFromCache) {
      delete dtoCopy[key];
    }

    // Save the modified copy to the cache
    this.cacheStorage.set(dtoCopy);
  }

  removeCache() {
    return this.cacheStorage.remove();
  }
}
