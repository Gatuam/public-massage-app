import { Message } from "@/model/user";
export interface ApiResponse {
  success: boolean;
  message: string;
  isAccpectingMessage?: boolean;
  messages?: Array<Message>;
}
