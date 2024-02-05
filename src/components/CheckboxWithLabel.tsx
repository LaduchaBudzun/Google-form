
const CheckboxWithLabel = ({ id, label,checked,onChange,typeOfData,error }) => {
    return ( 
        <div className="checkbox-wrapper-28">
        <input id={id} checked={checked} onChange={e =>onChange(e,typeOfData)} type="checkbox" className="promoted-input-checkbox"/>

        <svg><use xlinkHref="#checkmark-28" /></svg>
        <label htmlFor={id} className={`${error ? 'label-error': ''}`}>
            {error ? '*': ''}
        {label}
        </label>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
            <symbol id="checkmark-28" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                </path>
            </symbol>
        </svg>
    </div>
    )
}
 

export default CheckboxWithLabel;