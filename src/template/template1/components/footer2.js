import React from 'react'

export default function FooterTwo() {
  return (
    <section className="container-fluid footer_section">
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved. By{" "}
        <a target="_blank" rel="nofollow noopener" href="//html.design/">
          HTML Design
        </a>
      </p>
    </section>
  )
}
