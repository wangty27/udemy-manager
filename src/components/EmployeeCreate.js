import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='John Doe'
          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone'
            placeholder='888-888-8888'
          />
        </CardSection>
        <CardSection>
          <Button>Add</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
