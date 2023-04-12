import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex gap-4 mt-4 border-adresses flex-column px-4 py-4 col justify-content-between'>
            <div className='d-flex flex-column gap-4'>
                <div className='title px-2'>Адреса заведений</div>
                <div className='d-inline-flex flex-column'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div> 
                <div className='d-inline-flex px-2'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;