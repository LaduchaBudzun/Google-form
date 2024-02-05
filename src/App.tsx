import { faAt, faKey, faUser } from "@fortawesome/free-solid-svg-icons"
import FormGroup from "./components/FormGroup"
import CheckboxWithLabel from "./components/CheckboxWithLabel"
import SocialButtons from "./components/SocialButtons"
import FormFooter from "./components/FormFooter"
import { useState } from "react"
import UsersTable from "./components/UsersTable"

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.firstName) {
      isValid = false;
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      isValid = false;
      errors.lastName = 'Last name is required';
    }
    if (!formData.terms) {
      isValid = false;
      errors.terms = 'You must agree to the terms and conditions';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      isValid = false;
      errors.email = 'Please enter a valid email address';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      isValid = false;
      errors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {...formData,date:new Date().getTime()};
      setUsers([user, ...users]);
      setFormData(initialFormData);
    }
  };

  const changeFormInput = (e,typeOfData) => {
    setFormData((prev) =>{
      const updatedFormData = {...prev,[typeOfData]:e.target.value};
      return updatedFormData
    })
  }

  return (
  <div className="app">
        <div className="form-container">
          <h4 className="form-title">Sign up</h4>
          <img src="/gmail-big.svg" className="gmail-icon"/>
          <form>
            <div className="names">
              <FormGroup icon={faUser} type="text" placeholder="First Name" value={formData.firstName} onChange={changeFormInput} typeOfData="firstName" error={errors.firstName}/>
              <FormGroup icon={faUser} type="text" placeholder="Last Name" value={formData.lastName} onChange={changeFormInput} typeOfData="lastName" error={errors.lastName}/>
            </div>
            <FormGroup icon={faAt} type="email" placeholder="Email Address" value={formData.email} onChange={changeFormInput} typeOfData="email" error={errors.email}/>
            <FormGroup icon={faKey} type="password" placeholder="Password"  value={formData.password} onChange={changeFormInput} typeOfData="password" error={errors.password}/>
            <CheckboxWithLabel id="terms-checkbox" label="I agree with terms and conditions" checked={formData.terms} onChange={changeFormInput} error={errors.terms} typeOfData="terms"/>
            <button type="submit" onClick={handleSubmit}>Sign up</button>
            <div className="wrapper-desc">
              <span className="small-desc">sponsored by</span>
            </div>
            <SocialButtons />
            <FormFooter />
          </form>
      </div>
      <div className="users">
        <UsersTable users={users}/>
      </div>
  </div>
  )
}

export default App
