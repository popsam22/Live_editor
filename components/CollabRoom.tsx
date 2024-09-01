"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { ReactNode } from "react";
import Header from "./Header";
import { Editor } from "./editor/Editor";

const CollabRoom = () => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
            <Header>
              <div className="flex w-fit items-center gap-2 justify-center">
                <p className="document-title">Placeholder document title</p>
              </div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  );
};

export default CollabRoom;
