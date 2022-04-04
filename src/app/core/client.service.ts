import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { AbstractService } from './abstract.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends AbstractService {
  constructor(override transferState: TransferState, override logger: LoggerService) {
    super(transferState, logger);
  }
  public doThings() {
    console.log('🧔 doing things on the CLIENT side');
  }

  public setTransferState(urlKey: string, state: unknown): void {
    this.logger.log('🕳️ SetTransfer do nothing on client side', null);
  }

  public getTransferState(urlKey: string): unknown {
    const URL_KEY = makeStateKey(urlKey);
    const transferred = this.transferState.get<unknown>(URL_KEY, null);
    if (transferred) {
      this.logger.warn(
        '⤵️ 📦 Transferred : ' + urlKey,
        Array.isArray(transferred) ? transferred.length : 1
      );
      this.transferState.remove(URL_KEY);
    }
    return transferred;
  }
}
