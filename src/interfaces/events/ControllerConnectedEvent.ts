export interface ControllerConnectedEvent extends ControllerDisconnectedEvent {
  isMediaNotificationController: boolean;
  isAutomotiveController: boolean;
  isAutoCompanionController: boolean;
}

export interface ControllerDisconnectedEvent {
  package: string;
}
