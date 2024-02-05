import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputWithIcon = ({ icon, type, placeholder,value,onChange,typeOfData,error }) => (
  <div className='wrapper-input-icon'>
      <div className="input-icon">
        <FontAwesomeIcon icon={icon} className={`icon-user ${error ? 'icon-user-error' : ''}`}/>
        <input type="text" className={`input-field ${error ? 'input-field-error': ''}`} placeholder={placeholder} value={value} onChange={(e) => onChange(e,typeOfData)}  required/>
      </div>
      {error ? 
        <span className='error-input-mes'>{error}</span>
     : ''}
  </div>
);

export default InputWithIcon;