import { useState } from 'react'
// import Notice from "../UI/Notice/Notice"
// import Button from "../UI/Button/Button"
// import CheckDone from "../UI/CheckDone/CheckDone"
import { Button, CheckDone } from '../modules/test'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const App = () => {
  const [notices, setNotices] = useState([])

  const addNotice = async () => {
    const newNotice = {
      id: notices.length ? notices[notices.length - 1].id + 1 : 0,
      title: 'Success!',
      content: 'Payment was successful!',
    }
    setNotices(notices.concat([newNotice]))
  }

  const removeNotice = (id) => {
    let newNotice = [...notices]
    newNotice = newNotice.filter((el) => el.id != id)
    setNotices(newNotice)
  }
  const [active, setActive] = useState(false)
  const showCheckDone = () => {
    setActive(true)
  }
  return (
    <>
      {/* <Notice notices={notices} remove={removeNotice}></Notice>
      <Button onClick={() => addNotice()}>Show Notification</Button> */}
      <Button onClick={() => showCheckDone()}>Show check done</Button>
      <CheckDone active={active} setActive={setActive}></CheckDone>
      <Button onClick={() => toast('success!', { autoClose: 3000 })}>
        Toast
      </Button>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
