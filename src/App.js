import "./App.css";
import React from 'react';
import { Card, Form, Input, Button } from './components/form';

function App() {
  return (
    <>
    <Card>
    <Form>
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Button type="submit">Login</Button>
    </Form>
    </Card>
    </>
    );
}
    

export default App;
