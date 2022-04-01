import * as React from 'react';

import UserForm from '@components/UserForm';
import Navbar from '@components/Navbar';
import './_user-details.scss';

const UserDetail = () => {
  const [visible, setVisible] = React.useState<boolean>(true);

  const closeAction = React.useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className='container'>
        <UserForm />
      </div>
    </React.Fragment>
  );
};

export default UserDetail;
