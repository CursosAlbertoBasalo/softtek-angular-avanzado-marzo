import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { AbstractService } from './abstract.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService extends AbstractService {
  constructor(override transferState: TransferState, override logger: LoggerService) {
    super(transferState, logger);
  }

  public doThings() {
    console.log('doing things on the server side');
  }

  public setTransferState(urlKey: string, state: unknown): void {
    this.logger.warn('📦 ⤵️ Transferring : ' + urlKey, Array.isArray(state) ? state.length : 1);
    const URL_KEY = makeStateKey(urlKey);
    this.transferState.set<unknown>(URL_KEY, state);
  }

  public getTransferState(urlKey: string): unknown {
    this.logger.log('🕳️ GetTransfer do nothing on server side', null);
    return null;
  }
}
