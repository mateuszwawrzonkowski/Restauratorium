import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #D17272;
    width:100%;
`;
const Title = styled.div`
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.bold};
`;
const Form = styled.form`
  display:flex;
  flex-direction: column;
  width:80%;
`;

const InputItem = styled.div`
  position:relative;
  padding: 20px;
  :first-child{
    input{
      text-transform: capitalize;
    }
  }
`;

const Input = styled.input`
  background-color: transparent;
  border:none;
  border-bottom: 3px solid #F2A034;
  outline: none;
  width: 100%;
  color: gray;
  :focus{
    +label{
      transform:scale(0.8);
    }
  }
  :not(:placeholder-shown){
    font-size:1.6rem;
  }
`;

const Label = styled.label`
  position: absolute;
  top:20px;
  left: 20px;
  transition:0.3s;
  top:0;
`;

const TextArea = styled.textarea`
  width:100%;
  min-height:100px;
  background-color: transparent;
  border:none;
  border-bottom: 3px solid #F2A034;
  outline:none;
  resize:none;
  font-size: 2rem;
  padding:10px;
  text-transform: capitalize;
  :focus{
    +label{
      transform:scale(0.8);
    }
  }
`;

const AddRestaurantForm = () => (
  <FormWrapper>
    <Button close><span /></Button>
    <Title>Add new restaurant</Title>
    <Form>
      <InputItem>
        <Input
          type="text"
          name="name"
          id="name"
        />
        <Label htmlFor="name">Restaurant name</Label>
      </InputItem>
      <InputItem>
        <Input
          type="text"
          name="link"
          id="link"
        />
        <Label htmlFor="link">Facebook link</Label>
      </InputItem>
      <InputItem>
        <Input
          type="text"
          name="image"
          id="image"
        />
        <Label htmlFor="image">Image Url</Label>
      </InputItem>
      <InputItem>
        <TextArea
          name="description"
          id="description"
          maxlength="20"
          placeholder="Short description about restaurant (type of food, prices)"
        />
        <Label htmlFor="description">Description</Label>
      </InputItem>
    </Form>
    <Button add>Add</Button>
  </FormWrapper>
);

export default AddRestaurantForm;
