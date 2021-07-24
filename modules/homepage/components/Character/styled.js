import styled from "styled-components"

export const Container = styled.section`
  box-sizing: border-box;
  padding-top: 32px;
`

export const Slogan = styled.p`
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
  font-weight: 100;
  letter-spacing: 0.1em;
`

export const CardList = styled.ul`
  display: flex;
  width: 100%;
`

export const CardItem = styled.li`
  flex: 1;
  &::before {
    content: "";
    display: block;
    padding-top: 150%;
  }
  &:nth-child(1) {
    background-color: #831518;
  }
  &:nth-child(2) {
    background-color: #a9bfcc;
  }
  &:nth-child(3) {
    background-color: #d94727;
  }
  &:nth-child(4) {
    background-color: #dcbedb;
  }
  &:nth-child(5) {
    background-color: #263375;
  }
  &:nth-child(6) {
    background-color: #b4d33d;
  }
`
