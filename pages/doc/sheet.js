import { Button, IconButton } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Login from "../../components/Login";
import DescriptionIcon from "@mui/icons-material/Description";
import { useRouter } from "next/navigation";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import PeopleIcon from "@mui/icons-material/People";
import Image from "next/image";
import TextEditor from "../../components/TextEditor";

function Doc() {
  const { data: session, status } = useSession();
  const router = useRouter();
  // const { id } = router.query;
  // const [snapshot, loadingSnapshot] = useDocumentOnce(
  //   db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  // );
  if (status !== "authenticated") return <Login />;

  return (
    <div>
      <header className="flex justify-center items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <DescriptionIcon color="primary" />
        </span>
        <div className="flex-grow px-2">
          {/* <h2>{snapshot?.data()?.fileName}</h2> */}
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>
        <Button color="light-blue" className="hidden md:inline-flex h-10 items-center">
          <PeopleIcon />
          Share
        </Button>
        <Image
        src="/image/user.png"
        alt=""
        height={48}
        width={48}
        className="rounded-full ml-2 cursor-pointer"
      />
      </header>
      <TextEditor/>
    </div>
  );
}

export default Doc;
