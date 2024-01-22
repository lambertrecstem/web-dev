import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
//@ts-ignore
import DOMPurify from "dompurify";
import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//@ts-check

interface Props {
  value: string;
  placeholder: string;
  setValue: (v: string) => void;
  valueSaved: boolean;
  setValueSaved: (saved: boolean) => void;
  editMode: boolean;
}

export default function PubContentTextEditor({
  setValue,
  valueSaved,
  setValueSaved,
  value,
}: Props) {
  const editorRef: any = useRef(null);

  const [initValue] = useState(value);
  console.log(initValue);

  return (
    <>
      <Editor
        apiKey="sxc5e6rlgekpwirvhhrrpefd11q0cr5iyko1r1aqqcx8rodq"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        init={{
          plugins:
            "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (respondWith: any) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue={initValue}
        onEditorChange={() => {
          if (editorRef.current) {
            setValue(editorRef.current.getContent());
          }
        }}
      />
      <div className="border w-full h-full ">
        {!valueSaved ? (
          <div className="text-secondary grid place-items-center h-full text-[20pt] ">
            <div
              onClick={() => {
                setValueSaved(!valueSaved);
                if (editorRef.current) {
                  const rawContent = editorRef.current.getContent();
                  setValue(rawContent);
                }
              }}
              className="bg-greenAccent p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        ) : (
          <div className="text-secondary grid place-items-center h-full text-[20pt] ">
            <div
              onClick={() => setValueSaved(!valueSaved)}
              className="bg-redAccent p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faPencil} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
