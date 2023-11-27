import { Back
 } from './style'
import { MdKeyboardReturn } from 'react-icons/md'
function BackButton() {
  return (
    <div>
      <Back to="/" >
      <MdKeyboardReturn size={120}/>
      </Back>
    </div>
  )
}

export default BackButton
