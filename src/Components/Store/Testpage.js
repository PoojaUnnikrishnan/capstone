import React from 'react'
import { Button } from 'react-bootstrap';

import { useUserAuth } from '../../context/UserAuthContext';

export const Testpage = () => {
    const { logOut, user } = useUserAuth();
    
    const handleLogout = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div>
         <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
    </div>
  )
}
