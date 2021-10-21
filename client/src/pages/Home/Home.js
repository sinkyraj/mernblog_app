import { useState, useEffect } from 'react'
import {
  Button, Form, FormGroup, Label, Input, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
 } from 'reactstrap'

import Post from '../../utils/Post'

const Home = () => {
const [postState, setPostState] = useState({
title: '',
body: '',
posts: []
})

  const handleInputChange = ({ target }) => {
    setPostState({ ...postState, [target.name]: target.value })
  }

  const handleCreatePost = event => {
    event.preventDefault()
    Post.create({
      title: postState.title,
      body: postState.body
    })
      .then(({ data: post }) => {
        console.log(post)
        const posts = [...postState.posts]
        posts.push(post)
        setPostState({ ...postState, posts, title: '', body: '' })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    Post.getAll()
      .then(({ data: posts }) => {
        console.log(posts)
        setPostState({ ...postState, posts })
      })
      .catch(err => {
        console.error(err)
        window.location = '/login'
      })
  }, [])

return(
<>
    <Container>
  <h1>Create A Post</h1>
    <Form inline onSubmit={handleCreatePost}>
        <Row>
          <Col xs="6">
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
        <Label htmlFor='title' className='mr-sm-2'>Title</Label>
        <Input
          type='text'
          name='title'
          value={postState.title}
          onChange={handleInputChange}
        />
      </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
        <Label htmlFor='body' className='mr-sm-2'>Body</Label>
        <Input
          type='textarea'
          name='body'
          value={postState.body}
          onChange={handleInputChange}
        />
      </FormGroup>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
      <Button onClick={handleCreatePost}>Create Post</Button>
          </Col>
        </Row>
    </Form>
    <br />
      <Row>
        <Col sm="6">
    {
      postState.posts.length
        ? postState.posts.map(post => (
          <Card key={post._id}>
            
            <CardBody>
              <CardTitle tag='h5'>{post.title}</CardTitle>
              <CardSubtitle tag='h6' className='mb-2 text-muted'>posted by {post.author.username}</CardSubtitle>
              <CardText>{post.body}</CardText>
            </CardBody>
            
          </Card>
        ))
        : null
    }
        </Col>
      </Row>
    </Container>
</>

)

}
export default Home