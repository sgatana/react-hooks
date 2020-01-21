import React, { useState } from 'react';
const SetName = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <div>
      <p>
        <label>First Name:</label>
        <input
          type='text'
          value={name.firstName}
          onChange={e => setName({...name, firstName: e.target.value })}
        />
      </p>
      <p>
        <label>Last Name:</label>
        <input
          type='text'
          value={name.lastName}
          onChange={e => setName({...name, lastName: e.target.value })}
        />
      </p>
      <p>
        your name is {`${name.firstName} ${name.lastName}`}
      </p>
    </div>
  );
};

export default SetName;
