import { Injectable } from '@angular/core';
declare var alertify : any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  // message(message : string, messajeType : MessageType, position: Position, delay: number=4)
  message(message : string,options: AlertifyOptions)
  {
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position',options.position);
    const msj= alertify[options.messajeType](message)



  }
}
export class AlertifyOptions{
  messajeType: MessageType=MessageType.Success;
  position: Position=Position.BottomLeft;
  delay: number=4;


}
export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}
export enum Position {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
}
