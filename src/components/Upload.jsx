import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FileUpload } from "primereact/fileupload";
 
const Upload =()=>{
  return (
    <>
      <FileUpload
        name="demo"
        url="/api/upload"
        multiple
      />
      ;
    </>
  );
}
export default Upload;


