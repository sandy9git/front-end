import {
  Text,
  Box,
  Heading,
  Card,
  Stack,
  List,
} from 'braid-design-system';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { User } from './UserTypes';

type UserDetailsState = {
 	userId: string;
};

// in real world this would come environment config
const userDetailsUrl = 'http://localhost:3000/user';

// similar to users page this woould be a container component and will perform all the interactions and 
// and component that displays list of users will be a pure presentation component that will get 
// all the data from props.
export default () => {
  const [user, setUser] = useState<User>({ name: '', userId: ''});

  const location = useLocation<UserDetailsState>();

  useEffect(() => {
    async function initialiseUserDetails(){
      const url = `${userDetailsUrl}/${location.state.userId}`;
      try {
        const userData = await axios.get(url)
        setUser(userData.data);
      } catch (error) {
        console.log(error);
      }
    }   
    initialiseUserDetails();
  });

  return (
    <Fragment>
      <Box background="brand" paddingY="xxlarge" paddingX="gutter">
        <Stack space="medium">
          <Heading level="1">Twitter User</Heading>
        </Stack>
      </Box>
      <Box paddingX={['xsmall', 'gutter']} style={{ marginTop: '-40px' }}>
        <Card>
          <Stack space="medium">
            <Stack space="large" dividers>
              <Heading level="2">User Details</Heading>
              <img src={user.profileImage}></img>
            </Stack>
            <Box paddingBottom="xsmall">
              <List size="large">
                <Text>Name: {user.name}</Text>
                <Text>Twitter Handle: {user.twitterHandle}</Text>
                <Text>Follower Count: {user.followerCount}</Text>
              </List>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Fragment>
  );
};