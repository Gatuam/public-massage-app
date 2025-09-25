import React from "react";
import { columns, Payment } from "@/modules/message/ui/components/coloms";
import { DataTable } from "@/modules/message/ui/components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const Page = async () => {
  const data = await getData();
  return (
    <div className=" pt-26 px-4 md:pt-32">
        <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
