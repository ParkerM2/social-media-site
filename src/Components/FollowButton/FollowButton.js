import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { isUserFollowingProfile } from '../../services/firebase/firebase';

export default function BasicButtons({currentUser, profileID}) {

    // set it up to check if followed or not
    // return a contained button to follow if they aren't in the current user's follow list
    // if they are in the list show unfollow outlined button 

  return (
    <>
      <Button variant="text">Follow</Button>
    </>
  );
}