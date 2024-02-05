import InputWithIcon from './InputWithIcon';

const FormGroup = ({ icon, type, placeholder,value,onChange,typeOfData,error }) => (
  <div className="form-group">
    <InputWithIcon icon={icon} type={type} placeholder={placeholder} value={value} onChange={onChange} typeOfData={typeOfData} error={error}/>
  </div>
);

export default FormGroup;