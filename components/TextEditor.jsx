import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw } from "draft-js";
import { db } from "../firebase";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const TextEditor = () => {
  const { data: session } = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  // const { id } = router.query;
  // const [snapshot] = useDocumentOnce(
  //   db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  // );

  // useEffect(() => {
  //   if (snapshot?.data()?.editorState) {
  //     setEditorState(
  //       EditorState.createWithContent(
  //         convertFromRaw(snapshot?.data()?.editorState)
  //       )
  //     );
  //   }
  // }, [snapshot]);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  //   db.collection("userDocs")
  //     .doc(session.user.email)
  //     .collection("docs")
  //     .doc(id)
  //     .set(
  //       {
  //         editorState: convertFromRaw(editorState.getCurrentContent()),
  //       },
  //       {
  //         merge: true,
  //       }
  //     );
  };
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16">
      <Editor
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10"
        editorState={editorState}
      />
    </div>
  );
};

export default TextEditor;
