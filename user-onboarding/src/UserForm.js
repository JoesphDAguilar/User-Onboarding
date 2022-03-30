import React from "react";

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add a User</h2>

            <div>
                <div>{errors.name}</div>
                <div>{errors.role}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div> 

            <div>
                <h4>General Information</h4>
                <label>First Name
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='firstName'
                        type='text'
                    />
                </label>

                <label>Last Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='lastName'
                        type='text'
                    />
                </label>

                <label>Role 
                    <select 
                        onChange={onChange}
                        value={values.role}
                        name='role'
                    >
                         <option value="">-- Select A Role --</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Network Engineer">Network Engineer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                    </select>
                </label>

                <label>Email
                    <input
                       value={values.email}
                       onChange={onChange} 
                       name='email'
                       type='text'
                    />
                </label>

                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
            </div>
            <div>
                <h4>Terms of Service</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget. Eget nunc
                      scelerisque viverra mauris in aliquam sem fringilla ut. Volutpat consequat mauris nunc 
                      congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate 
                      sapien. Est velit egestas dui id ornare. Libero volutpat sed cras ornare arcu dui vivamus. 
                      Sed odio morbi quis commodo. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. 
                      Condimentum mattis pellentesque id nibh tortor id. Placerat in egestas erat imperdiet sed. 
                      Ut venenatis tellus in metus.</p>
                
                <label>I Agree to Terms
                    <input
                        type='checkbox'
                        name='tos'
                        onChange={onChange}
                        checked={values.tos}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}