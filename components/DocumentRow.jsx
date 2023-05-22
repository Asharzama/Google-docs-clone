import { IconButton } from "@material-tailwind/react";
import ArticleIcon from "@mui/icons-material/Article";

const DocumentRow = ({ id, fileName }) => {
  return (
    <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
      <IconButton>
        <ArticleIcon color="action" />
      </IconButton>
      <p className="flex-grow pl-5 w-10 pr-10">{fileName}</p>
      <p className="pr-5 text-sm">09/07/2022</p>
    </div>
  );
};

export default DocumentRow;
