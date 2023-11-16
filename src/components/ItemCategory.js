
import { useState } from "react";
import ItemDetails from "./itemDetails";


const ItemCategory = ({itemCategory, showList, setShowIndex}) => {

    //const [showList, setShowList] = useState(false);
    const showHide = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 rounded-l-xl mx-auto my-4 shadow-lg p-4 bg-gray-100 ">
                <div className="flex justify-between text-lg font-bold cursor-pointer" onClick={showHide}>
                    <span>{itemCategory.title}({itemCategory.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                <div>                 
                    {showList && <ItemDetails itemDetails={itemCategory.itemCards}/>}                 
                </div>
            </div>
        </div>
    )
}

export default ItemCategory;