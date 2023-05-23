import Head from "next/head";
import Header from "../components/Header";
import {
  IconButton,
  Dialog,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderIcon from "@mui/icons-material/Folder";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import { useState } from "react";
import { db } from "../firebase";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import DocumentRow from "../components/DocumentRow";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();

  const [ snapshot ] = useCollectionOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs")
  );

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const router = useRouter();

  if (status !== "authenticated") return <Login />;

  const createDocument = async () => {
    if (!input) return;

    const userDocsCollection = db.collection("userDocs");
    const userDocRef = userDocsCollection.doc(session.user.email);
    const docsCollection = userDocRef.collection("docs");

    docsCollection.add({
      fileName: input,
    });
    
    router.push(`doc/sheet`)

    setInput("");
    setShowModal(false);
  };

  const modal = (
    <Dialog size="sm" open={showModal}>
      <DialogBody>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of Document..."
          onKeyDown={(event) => event.key === "Enter" && createDocument}
        />
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="text" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button color="blue" onClick={createDocument}>
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  );

  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <meta name="description" content="Google Docs Clone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {modal}
      <section className="bg-[#fbf9fa] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <IconButton color="gray" variant="text" className="border-0">
              <MoreVertIcon />
            </IconButton>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image
                src="/image/docs.png"
                alt=""
                fill
                priority={true}
                sizes="11"
                onClick={() => setShowModal(true)}
              />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <FolderIcon color="action" />
          </div>
        </div>

        {snapshot?.docs.map((doc) => {
          <DocumentRow
            key={doc.id}
            id={doc.id}
            fileName={doc.data().fileName}
          />;
        })}
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
