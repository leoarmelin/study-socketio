export interface IMessage {
  userId: string;
  username: string;
  text: string;
  fromServer: boolean;
  userColor: string;
  createdAt: Date;
}
