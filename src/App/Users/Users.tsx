import {
  Box,
  Heading,
  Card,
  Stack,
  TextField,
  Button,
  Inline,
} from 'braid-design-system';
import React, { Fragment, useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { User } from './UserTypes';

// in real world this would come environment config
const usersUrl = 'http://localhost:3000/users';

// for large project this woould be a container component and will perform all the interactions and 
// and component that displays list of users will be a pure presentation component that will get 
// all the data from props.
export default () => {
  const [userIds, setUserIds] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const history = useHistory();
  const loadPage = (id?: string) => {
    history.push('/user-details', { userId: id })
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setUserIds(event.target.value);
  };
  const handleSearchButtonClicked = async (
    event: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const url = `${usersUrl}?user_ids=${userIds}`;
  try {
      const usersData = await axios.get(url);
      setUsers(usersData.data);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <Fragment>
      <Box background="brand" paddingY="xxlarge" paddingX="gutter">
        <Stack space="medium">
          <Heading level="1">Twitter User Search</Heading>
        </Stack>
      </Box>
      <Box paddingX={['xsmall', 'gutter']} style={{ marginTop: '-40px' }}>
        <Card>
          <Stack space="medium">
            <Stack space="large" dividers>
              <Heading level="2">Search Users by Id</Heading>
              <Inline space="small">
                <TextField
                  message="e.g. 783214,6253282"
                  onChange={handleChange}
                />
                <Button onClick={handleSearchButtonClicked}>Search</Button>
              </Inline>
            </Stack>
          </Stack>
        </Card>
        <Card>
          <Stack space="medium">
            <Stack space="large" dividers>
              <Heading level="2">Users</Heading>
            </Stack>
            <Box paddingBottom="xsmall">
              <Stack space="medium">
                {users.map((user) => (                    
                  <Button onClick={() => loadPage(user.userId)}>
                    {user.name}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Fragment>
  );
}
