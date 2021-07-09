
import { useState, useEffect } from "react"
import {
 Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap'

import  User  from '../../utils/User'

const Profile = () => {

  const [profileState, setProfileState] = useState({
  user: {}
})

useEffect(()=>{
  User.profile()
   .then(({ data: user})=> setProfileState({...profileState, user }))
   .catch(err => {
     console.error(err)
     window.location = './login'
   })
},[])
  return (
    <>
      <Container>
        <Row>
          <Col>
      <h1>Your Info</h1>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>{profileState.user.name}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>{profileState.user.email}</CardSubtitle>
          <CardText>{profileState.user.username}</CardText>
        </CardBody>
      </Card>
      <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
      <h1>Your Posts</h1>
      {
        profileState.user.posts
          ? profileState.user.posts.map(post => (
            <Card key={post._id}>
              <CardBody>
                <CardTitle tag='h5'>{post.title}</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>posted by {profileState.user.username}</CardSubtitle>
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
export default Profile