import React from 'react'

export default function Footer () {
  return (
    <footer>
      <div className='footer-wrapper'>

        <div className='link-wrapper'>
          <div>
            <a href='#projects'>Projects</a>
          </div>
          <div>
            <a href='#skills'>Skills</a>
          </div>
          <div>
            <a href='#contactme'>Contact Me</a>
          </div>
        </div>

        <div className='icon-wrapper'>
          <a href='https://www.linkedin.com/in/apurva-prajapati/'><i className='fa-brands icon fa-linkedin'></i></a>
          <a href='https://github.com/PrajapatiApurva'><i className='fa-brands icon fa-github'></i></a>
          <a href='apurva18092003@gmail.com'><i className='fa-regular icon fa-envelope'></i></a>
        </div>
      </div>
    </footer>
  )
}
