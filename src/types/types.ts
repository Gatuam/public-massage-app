import { Message } from "@/model/user";
export interface ApiResponse {
  success: boolean;
  message: string;
  isAccpectionMessage?: boolean;
  messages?: Array<Message>;
}
