'use client'

import React from "react";
import { columns, Payment } from "@/modules/message/ui/components/coloms";
import { DataTable } from "@/modules/message/ui/components/data-table";
import { MessageView } from "@/modules/message/ui/view/message-view";



const Page = () => {
  return (
    <div className=" pt-26 px-4 md:pt-32">
     <MessageView />
    </div>
  );
};

export default Page;
