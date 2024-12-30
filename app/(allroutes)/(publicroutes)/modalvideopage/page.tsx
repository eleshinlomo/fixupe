import ModalVideo from '@/components/modalvideo/modal-video'
import VideoThumb from '@/public/boxes.png'
import React from 'react'

const ModalVideoPage = () => {
  return (
    <div className='py-8'>
        {/* Hero image */}
        <ModalVideo
            thumb={VideoThumb}
            thumbWidth={400}
            thumbHeight={600}
            thumbAlt="Modal video thumbnail"
            video="/videos/myafros_intro.mp4"
            modalText = 'Video walk-through'
            videoWidth={1920}
            videoHeight={1080} />
    </div>
  )
}

export default ModalVideoPage