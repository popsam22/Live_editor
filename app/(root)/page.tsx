import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import doc from "../../public/assets/icons/doc.svg";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddDocument from "@/components/AddDocument";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const document = [];
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {document.length > 0 ? (
        <div></div>
      ) : (
        <div className="document-list-empty">
          <Image
            src={doc}
            alt="document"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocument
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
