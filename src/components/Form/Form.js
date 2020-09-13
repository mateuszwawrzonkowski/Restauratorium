import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { connect } from 'react-redux';
import { addCard } from 'actions';

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
  :focus{
    +label{
      transform:scale(0.8);
    }
  }
`;

const AddRestaurantForm = ({ addCard }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setImage(() => {
      const imageLink = [];
      for (let i = link.length; i >= 0; i -= 1) {
        if (link[i] === '/') {
          break;
        } else {
          imageLink.push(link[i]);
        }
      }
      return `https://graph.facebook.com/${imageLink.reverse().join('')}/picture?type=large`;
    });
  }, [link]);
  return (
    <FormWrapper>
      <Title>Add new restaurant</Title>
      <Form>
        <InputItem>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="name">Restaurant name</Label>
        </InputItem>
        <InputItem>
          <Input
            type="text"
            name="link"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Label htmlFor="link">Facebook link</Label>
        </InputItem>
        {/* <InputItem>
          <Input
            type="text"
            name="image"
            id="image"
            value={imageUrl}
            onChange={console.log(link)} // zmienic zeby bralo link i zwracalo nazwe knajpy
          />
          <Label htmlFor="image">Image Url</Label>
        </InputItem> */}
        <InputItem>
          <TextArea
            name="description"
            id="description"
            maxlength="20"
            placeholder="Short description about restaurant (type of food, prices)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Label htmlFor="description">Description</Label>
        </InputItem>
      </Form>
      <Button
        onClick={() => addCard({
          name,
          link,
          imageUrl,
          description,
        })}
        modalAdd
      >
        Add

      </Button>
    </FormWrapper>
  );
};

AddRestaurantForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addCard: (cardContent) => dispatch(addCard(cardContent)),
});

export default connect(null, mapDispatchToProps)(AddRestaurantForm);
