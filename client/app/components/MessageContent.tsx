import { ReactNode } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { VscKebabVertical } from "react-icons/vsc";
import MessageItems from "./message/MessageItems";

interface MenssageContentProps {
    onclick?: () => void,
    sender?: ConversetionType
    children: ReactNode
}
const MenssageContent: React.FC<MenssageContentProps> = ({ sender, children }) => {
    return (<>
    
        <div className="grid grid-rows-12  h-full ">
            
           

            {/* Start MessageIntes Hire */}
            
                {children}
            {/* End MessageIntes Hire */}

           
            {/* Start Message Footer Send Message */}
        </div>
    </>);
}

export default MenssageContent;