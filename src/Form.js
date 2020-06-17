import React from 'react';
import "rbx/index.css";
import { OptionBlock,  Title, Box, Button, Checkbox, Column, Container, Control, Field, Input, Label, Section, Select } from 'rbx';
import useForm from "./useForm";

const Form = () => {
  const [values, handleChange] = useForm(
      ['admin', 'admin123' ]
    );

  function login(event) {
    event.preventDefault();
    console.log(values);
  }

  return (
    <Section>
      <Container>

        <Column.Group>
          <Column size={4} offset={4}>
          <Box>

            <form onSubmit={login}>

              <Field>
                <Control>
                  <Input type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder={`input`}
                  required />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Input type="password" placeholder="Password" name="password" onChange={handleChange} value={values.password} required />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Label>
                    <Checkbox
                    id="human"
                    name="human"
                    onChange={handleChange}
                    checked={values.human}
                    required />
                     Agree with the magic terms of the loggin
                  </Label>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Button type="submit" color="primary" >Submit</Button>
                </Control>
              </Field>
            </form>

            </Box>

          </Column>
        </Column.Group>

      </Container>
    </Section>
  );
};

export default Form;