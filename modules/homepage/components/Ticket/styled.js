import styled from "styled-components"

export const Container = styled.section`
  /* background-color: #dcbedb; */
  box-sizing: border-box;
  /* padding-top: 64px; */
  /* padding-bottom: 64px; */
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: 100;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
`

export const CardList = styled.ul`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const CardItem = styled.li`
  flex: 1;
  margin: 0 8px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 24px;
  text-align: center;
`

export const CardTitle = styled.p`
  font-size: 24px;
  color: #222222;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 24px;
`

export const CardImageWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-family: Arial;
`

export const CardOriginalPrice = styled.span`
  font-size: 20px;
  font-weight: 100;
  text-decoration: line-through;
  margin-right: 6px;
`
export const CardSpecialPrice = styled.span`
  font-size: 28px;
  font-weight: 100;
  color: #d43e23;
`

export const CardPrice = styled.span`
  font-size: 20px;
  text-decoration: line-through;
`

export const CardButton = styled.a`
  display: inline-block;
  padding: 10px 28px;
  background-color: #ff0058;
  font-size: 22px;
  font-weight: 100;
  color: #ffffff;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
