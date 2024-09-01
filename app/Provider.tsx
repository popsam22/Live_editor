"use client";
import Loader from "@/components/Loader";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        {/* <RoomProvider id="my-room"> */}
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
        {/* </RoomProvider> */}
      </LiveblocksProvider>
    </div>
  );
};

export default Provider;
