import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styled from 'styled-components'

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  form {
    width: 100%;
  }
`

const Label = styled('label')`
  display: block;
  span {
    line-height: 1.5;
  }
`

const Row = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 15px;
`

const Input = styled('input')`
  width: 100%;
  border: none;
  outline: none;
  background-color: #f7f7f7;
  padding: 10px 30px;
  border-radius: 100px;
  box-sizing: border-box;
  margin-top: 15px;
  border: 2px solid transparent;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #6046f1;
  }
`

const TextArea = styled('textarea')`
  width: 100%;
  height: 300px;
  border: 2px solid transparent;
  background-color: #f7f7f7;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 30px;
  margin-top: 15px;
  resize: none;
  outline: none;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #6046f1;
  }
`

const ButtonsWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`

const SubmitButton = styled('button')`
  text-decoration: none;
  color: white;
  background-color: #6046f1;
  display: inline-block;
  padding: 15px 50px;
  border-radius: 100px;
  margin-top: 1rem;
  box-shadow: 0px 10px 30px rgba(96, 70, 241, 0.5);
  text-transform: uppercase;
  border: none;
  margin-left: 30px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
`

const ResetButton = styled(SubmitButton)`
  border: 3px solid #111;
  background-color: #fff;
  color: #111;
  box-shadow: 0px 10px 30px rgba(17, 17, 17, 0.15);
`

export const RightSide = () => {
  return (
    <Wrapper>
      <form>
        <Row>
          <Label>
            <span>First name:</span> <br />
            <Input type='text' name='firstName' id='#firstName' />
          </Label>
          <Label>
            <span>Last name:</span> <br />
            <Input type='text' name='lastName' id='#lastName' />
          </Label>
        </Row>
        <Row>
          <Label>
            <span>Email address:</span> <br />
            <Input type='text' name='email' id='#email' />
          </Label>
          <Label>
            <span>Subject:</span> <br />
            <Input type='text' name='subject' id='#subject' />
          </Label>
        </Row>
        <Label>
          <span>Message:</span> <br />
          <TextArea name='message' id='message'></TextArea>
        </Label>
        <ButtonsWrapper>
          <div>
            <ResetButton type='reset'>
              <span>
                Reset{' '}
                <FaLongArrowAltRight size={25} style={{ marginLeft: '15px' }} />
              </span>
            </ResetButton>
            <SubmitButton type='submit'>
              <span>
                Submit{' '}
                <FaLongArrowAltRight size={25} style={{ marginLeft: '15px' }} />
              </span>
            </SubmitButton>
          </div>
        </ButtonsWrapper>
      </form>
    </Wrapper>
  )
}
