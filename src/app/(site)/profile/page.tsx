import { ProfileView } from "@/modules/dashboard/profile/ui/view/profile-view";
import React from "react";

const Page = async () => {
  return <div className=" pt-26 px-4 md:pt-32 flex flex-col flex-1 w-full h-screen">
    <ProfileView/>
  </div>;
};

export default Page;
