/* eslint-disable space-before-function-paren */
import '@/styles/HomeSlide.css'

export default function HomeSlide({ screen = null }) {
  return (
    <div class='slider' style={{ width: screen }}>
      <div class='slides'>
        <div id='slide-1'>1</div>
        <div id='slide-2'>2</div>
        <div id='slide-3'>3</div>
        <div id='slide-4'>4</div>
        <div id='slide-5'>5</div>
      </div>
    </div>
  )
}
