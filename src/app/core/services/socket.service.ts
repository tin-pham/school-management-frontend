import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {}

  createConnection(): any {
    this.socket = io('http://localhost:3000');

    return {
      subscribe: (onMessageReceived, onError, onComplete) => {
        this.socket.on('message', msg => {
          onMessageReceived(msg);
        });

        this.socket.on('connect_error', err => {
          onError(err);
        });

        this.socket.on('disconnect', () => {
          onComplete();
        });

        // Return a cleanup function to unsubscribe from the events
        return () => {
          this.socket.off('message');
          this.socket.off('connect_error');
          this.socket.off('disconnect');
        };
      },
      next: data => {
        this.socket.emit(data.event, {
          transportOptions: {
            polling: {
              extraHeaders: data.headers,
            },
          },
        });
      },
    };
  }
}
