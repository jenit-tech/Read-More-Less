// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  ReactContainer,
  Heading,
  Paragraph,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [display, setDisplay] = useState(false)
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 171)

  const onClickDisplay = () => {
    setDisplay(prevState => !prevState)
  }

  return (
    <AppContainer>
      <ReactContainer>
        <Heading>React Hooks</Heading>
        <Paragraph>Hooks are a new addition to React</Paragraph>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Paragraph> {display ? reactHooksDescription : slicedText} </Paragraph>
        <Button type="button" onClick={onClickDisplay} > {display ? 'Read Less' : 'Read More'}</Button>
      </ReactContainer>
    </AppContainer>
  )
}

export default ReadMore
