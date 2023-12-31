import React from "react";

import { getBoards } from "@/api/boards";

import NavigationSidebar from "@/components/navigation/navigation-sidebar";

import ModalProvider from "@/providers/modal-provider";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";


interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  const user = await getCurrentUser();
  console.log(user);
  if(!user) {
    return notFound();
  }

  const boards = await getBoards();
  
 
  
  return (
    <>
    <ModalProvider />
    <div className="h-screen flex flex-col">
      
      <div className="flex h-full">
        <NavigationSidebar boards={boards} />
        {/* <div>
          <Header />
        </div> */}
        {children}
      </div>
    </div>
    </>
  );
}
