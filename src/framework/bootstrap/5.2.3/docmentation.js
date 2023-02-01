import React,{useEffect} from 'react';
import { Tooltip,Toast} from 'bootstrap/dist/js/bootstrap.esm.min.js';


export default function CustomBootstrap() {

  useEffect(() => {
    //init tooltip
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .forEach(tooltipNode => new Tooltip(tooltipNode))
    });

    // toasts
    Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
  return (
    <>
    {/* UTILLITIES => API / BACKGROUND / BORDERS / COLORS / DISPLAY / FLEX / FLOAT / INTERACTIONS / OBJECT FIT / OPACITY / OVERFLW / POSITION / SHADOWS / SIZING / SPACING / TEXT / VERTICAL ALIGN / VISIBILITY / Z-INDEX */}
    <>
    {/* Z-INDEX */}
    <div className="z-3 position-absolute p-5 rounded-3"></div>
    <div className="z-2 position-absolute p-5 rounded-3"></div>
    <div className="z-1 position-absolute p-5 rounded-3"></div>
    <div className="z-0 position-absolute p-5 rounded-3"></div>
    <div className="z-n1 position-absolute p-5 rounded-3"></div>

    {/* VERTICAL ALIGN */}
    <table style={{ height: '100%' }}>
      <tbody>
        <tr>
          <td className="align-baseline">baseline</td>
          <td className="align-top">top</td>
          <td className="align-middle">middle</td>
          <td className="align-bottom">bottom</td>
          <td className="align-text-top">text-top</td>
          <td className="align-text-bottom">text-bottom</td>
        </tr>
      </tbody>
    </table>
    <span className="align-baseline">baseline</span>
    <span className="align-top">top</span>
    <span className="align-middle">middle</span>
    <span className="align-bottom">bottom</span>
    <span className="align-text-top">text-top</span>
    <span className="align-text-bottom">text-bottom</span>

    {/* TEXT */}

    <p className="text-decoration-underline">
    This text has a line underneath it.
  </p>
  <p className="text-decoration-line-through">
    This text has a line going through it.
  </p>
  <a href="#" className="text-decoration-none">
    This link has its text decoration removed
  </a>


    <p className="text-muted">
  Muted text with a{" "}
  <a href="#" className="text-reset">
    reset link
  </a>
  .
</p>

    <p className="font-monospace">This is in monospace</p>
    <p className="lh-1">
      This is a long paragraph written to show how the line-height of an element
      is affected by our utilities. Classes are applied to the element itself or
      sometimes the parent element. These classes can be customized as needed with
      our utility API.
    </p>
    <p className="lh-sm">
      This is a long paragraph written to show how the line-height of an element
      is affected by our utilities. Classes are applied to the element itself or
      sometimes the parent element. These classes can be customized as needed with
      our utility API.
    </p>
    <p className="lh-base">
      This is a long paragraph written to show how the line-height of an element
      is affected by our utilities. Classes are applied to the element itself or
      sometimes the parent element. These classes can be customized as needed with
      our utility API.
    </p>
    <p className="lh-lg">
      This is a long paragraph written to show how the line-height of an element
      is affected by our utilities. Classes are applied to the element itself or
      sometimes the parent element. These classes can be customized as needed with
      our utility API.
    </p>

    <p className="fw-bold">Bold text.</p>
    <p className="fw-bolder">
      Bolder weight text (relative to the parent element).
    </p>
    <p className="fw-semibold">Semibold weight text.</p>
    <p className="fw-normal">Normal weight text.</p>
    <p className="fw-light">Light weight text.</p>
    <p className="fw-lighter">
      Lighter weight text (relative to the parent element).
    </p>
    <p className="fst-italic">Italic text.</p>
    <p className="fst-normal">Text with normal font style</p>

    <p className="fs-1">.fs-1 text</p>
    <p className="fs-2">.fs-2 text</p>
    <p className="fs-3">.fs-3 text</p>
    <p className="fs-4">.fs-4 text</p>
    <p className="fs-5">.fs-5 text</p>
    <p className="fs-6">.fs-6 text</p>

    <p className="text-lowercase">Lowercased text.</p>
    <p className="text-uppercase">Uppercased text.</p>
    <p className="text-capitalize">CapiTaliZed text.</p>
    <p className="text-break">
      mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    </p>
    <div
      className="text-nowrap bg-body-secondary border"
      style={{ width: "8rem" }}
    >
      This text should overflow the parent.
    </div>

    <div className="badge bg-primary text-wrap" style={{ width: "6rem" }}>
      This text should wrap.
    </div>

    <p className="text-start">Start aligned text on all viewport sizes.</p>
    <p className="text-center">Center aligned text on all viewport sizes.</p>
    <p className="text-end">End aligned text on all viewport sizes.</p>
    <p className="text-sm-start">
      Start aligned text on viewports sized SM (small) or wider.
    </p>
    <p className="text-md-start">
      Start aligned text on viewports sized MD (medium) or wider.
    </p>
    <p className="text-lg-start">
      Start aligned text on viewports sized LG (large) or wider.
    </p>
    <p className="text-xl-start">
      Start aligned text on viewports sized XL (extra-large) or wider.
    </p>

    {/* SPACING */}
    <div className="grid gap-0 row-gap-3">
      <div className="p-2 g-col-6">Grid item 1</div>
      <div className="p-2 g-col-6">Grid item 2</div>
      <div className="p-2 g-col-6">Grid item 3</div>
      <div className="p-2 g-col-6">Grid item 4</div>
    </div>

    <div className="grid gap-3">
      <div className="p-2 g-col-6">Grid item 1</div>
      <div className="p-2 g-col-6">Grid item 2</div>
      <div className="p-2 g-col-6">Grid item 3</div>
      <div className="p-2 g-col-6">Grid item 4</div>
    </div>


    {/* SIZING */}
    <div className="min-vw-100">Min-width 100vw</div>
    <div className="min-vh-100">Min-height 100vh</div>
    <div className="vw-100">Width 100vw</div>
    <div className="vh-100">Height 100vh</div>

    <div style={{ height: 100, backgroundColor: "rgba(255,0,0,0.1)" }}>
  <div
    className="h-25 d-inline-block"
    style={{ width: 120, backgroundColor: "rgba(0,0,255,.1)" }}
  >
    Height 25%
  </div>
  <div
    className="h-50 d-inline-block"
    style={{ width: 120, backgroundColor: "rgba(0,0,255,.1)" }}
  >
    Height 50%
  </div>
  <div
    className="h-75 d-inline-block"
    style={{ width: 120, backgroundColor: "rgba(0,0,255,.1)" }}
  >
    Height 75%
  </div>
  <div
    className="h-100 d-inline-block"
    style={{ width: 120, backgroundColor: "rgba(0,0,255,.1)" }}
  >
    Height 100%
  </div>
  <div
    className="h-auto d-inline-block"
    style={{ width: 120, backgroundColor: "rgba(0,0,255,.1)" }}
  >
    Height auto
  </div>
</div>

    <div className="w-25 p-3">Width 25%</div>
    <div className="w-50 p-3">Width 50%</div>
    <div className="w-75 p-3">Width 75%</div>
    <div className="w-100 p-3">Width 100%</div>
    <div className="w-auto p-3">Width auto</div>
    {/* SHADOWS */}
    <div className="shadow-none p-3 mb-5 bg-body-tertiary rounded">No shadow</div>
    <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      Small shadow
    </div>
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">Regular shadow</div>
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      Larger shadow
    </div>
    {/* POSITION */}
    <div className="position-static">position item</div>
    <div className="position-relative">position item</div>
    <div className="position-absolute">position item</div>
    <div className="position-fixed">position item</div>
    <div className="position-sticky">position item</div>
    {/* OVERFLOW */}
    <div className="overflow-y-auto">overflow y 1</div>
    <div className="overflow-y-hidden">overflow y 2</div>
    <div className="overflow-y-visible">overflow y 3</div>
    <div className="overflow-y-scroll">overflow y 4</div>
    <div className="overflow-auto">overflow 1</div>
    <div className="overflow-hidden">overflow 2</div>
    <div className="overflow-visible">overflow 3</div>
    <div className="overflow-scroll">overflow 4</div>

    {/* OPACITY */}
    <div className="opacity-100">OPACTIY 1</div>
    <div className="opacity-75">OPACTIY 2</div>
    <div className="opacity-50">OPACTIY 3</div>
    <div className="opacity-25">OPACTIY 4</div>

    {/* INTERACTIONS */}
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" class="object-fit-sm-contain border rounded" alt="..."/>
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" class="object-fit-md-contain border rounded" alt="..."/>
    
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="object-fit-contain border rounded" alt="..." />
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="object-fit-cover border rounded" alt="..." />
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="object-fit-fill border rounded" alt="..." />
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="object-fit-scale border rounded" alt="..." />
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="object-fit-none border rounded" alt="..." />
    <p>
      <a href="#" className="pe-none" tabIndex={-1} aria-disabled="true">
        This link
      </a>{" "}
      can not be clicked.
    </p>
    <p>
      <a href="#" className="pe-auto">
        This link
      </a>{" "}
      can be clicked (this is default behavior).
    </p>
    <p className="pe-none">
      <a href="#" tabIndex={-1} aria-disabled="true">
        This link
      </a>{" "}
      can not be clicked because the <code>pointer-events</code> property is
      inherited from its parent. However,{" "}
      <a href="#" className="pe-auto">
        this link
      </a>{" "}
      has a <code>pe-auto</code> class and can be clicked.
    </p>
    
    <p className="user-select-all">
      This paragraph will be entirely selected when clicked by the user.
    </p>
    <p className="user-select-auto">
      This paragraph has default select behavior.
    </p>
    <p className="user-select-none">
      This paragraph will not be selectable when clicked by the user.
    </p>

    {/* FLOAT */}
    <div className="float-sm-start">
      Float start on viewports sized SM (small) or wider
    </div>
    <br />
    <div className="float-md-start">
      Float start on viewports sized MD (medium) or wider
    </div>
    <br />
    <div className="float-lg-start">
      Float start on viewports sized LG (large) or wider
    </div>
    <br />
    <div className="float-xl-start">
      Float start on viewports sized XL (extra-large) or wider
    </div>
    <br />
    <div className="float-start">Float start on all viewport sizes</div>
    <br />
    <div className="float-end">Float end on all viewport sizes</div>
    <br />
    <div className="float-none">Don't float on all viewport sizes</div>

    {/* FLEX */}
    <div className="d-flex flex-nowrap">
      <div className="order-3 p-2">First flex item</div>
      <div className="order-2 p-2">Second flex item</div>
      <div className="order-1 p-2">Third flex item</div>
    </div>

    <div
      className="d-flex align-items-start flex-column mb-3"
      style={{ height: '200px' }}
    >
      <div className="mb-auto p-2">Flex item</div>
      <div className="p-2">Flex item</div>
      <div className="p-2">Flex item</div>
    </div>
    <div
      className="d-flex align-items-end flex-column mb-3"
      style={{ height: '200px' }}
    >
      <div className="p-2">Flex item</div>
      <div className="p-2">Flex item</div>
      <div className="mt-auto p-2">Flex item</div>
    </div>
     <div className="d-flex mb-3">
      <div className="p-2">Flex item</div>
      <div className="p-2">Flex item</div>
      <div className="p-2">Flex item</div>
    </div>
    <div className="d-flex mb-3">
      <div className="me-auto p-2">Flex item</div>
      <div className="p-2">Flex item</div>
      <div className="p-2">Flex item</div>
    </div>
    <div className="d-flex mb-3">
      <div className="p-2">Flex item</div>
      <div className="p-2">Flex item</div>
      <div className="ms-auto p-2">Flex item</div>
    </div>
    <div className="d-flex">
    <div className="p-2 w-100">Flex item</div>
    <div className="p-2 flex-shrink-1">Flex item</div>
  </div>

    <div className="d-flex">
      <div className="p-2 flex-fill">Flex item with a lot of content</div>
      <div className="p-2 flex-fill">Flex item</div>
      <div className="p-2 flex-fill">Flex item</div>
    </div>

    <div className="align-self-start">Aligned flex item</div>
    <div className="align-self-end">Aligned flex item</div>
    <div className="align-self-center">Aligned flex item</div>
    <div className="align-self-baseline">Aligned flex item</div>
    <div className="align-self-stretch">Aligned flex item</div>

    <div className="d-flex align-items-start">list item align items start</div>
    <div className="d-flex align-items-end">list item align items start</div>
    <div className="d-flex align-items-center">list item align items start</div>
    <div className="d-flex align-items-baseline">list item align items start</div>
    <div className="d-flex align-items-stretch">list item align items start</div>
    <div className="d-flex justify-content-start">asdadads</div>
    <div className="d-flex justify-content-end">asdadads</div>
    <div className="d-flex justify-content-center">asdadads</div>
    <div className="d-flex justify-content-between">asdadads</div>
    <div className="d-flex justify-content-around">asdadads</div>
    <div className="d-flex justify-content-evenly">asdadads</div>
    <div className="d-flex flex-column mb-3">
      <div className="p-2">Flex item 1</div>
      <div className="p-2">Flex item 2</div>
      <div className="p-2">Flex item 3</div>
    </div>
    <div className="d-flex flex-column-reverse">
      <div className="p-2">Flex item 1</div>
      <div className="p-2">Flex item 2</div>
      <div className="p-2">Flex item 3</div>
    </div>
    <div className="d-flex flex-row mb-3">
      <div className="p-2">Flex item 1</div>
      <div className="p-2">Flex item 2</div>
      <div className="p-2">Flex item 3</div>
    </div>
    <div className="d-flex flex-row-reverse">
      <div className="p-2">Flex item 1</div>
      <div className="p-2">Flex item 2</div>
      <div className="p-2">Flex item 3</div>
    </div>
    <div className="d-inline-flex p-2">I'm an inline flexbox container!</div>
    <div className="d-flex p-2">I'm a flexbox container!</div>

    {/* DISPLAY */}
    <span className="d-block p-2 text-bg-primary">d-block</span>
    <span className="d-block p-2 text-bg-dark">d-block</span>
    <div className="d-inline p-2 text-bg-primary">d-inline</div>
    <div className="d-inline p-2 text-bg-dark">d-inline</div>

    {/* COLORS */}
    <div className="text-primary">This is default primary text</div>
    <div className="text-primary text-opacity-75">
      This is 75% opacity primary text
    </div>
    <div className="text-primary text-opacity-50">
      This is 50% opacity primary text
    </div>
    <div className="text-primary text-opacity-25">
      This is 25% opacity primary text
    </div>
    <p className="text-primary">.text-primary</p>
    <p className="text-primary-emphasis">.text-primary-emphasis</p>
    <p className="text-secondary">.text-secondary</p>
    <p className="text-secondary-emphasis">.text-secondary-emphasis</p>
    <p className="text-success">.text-success</p>
    <p className="text-success-emphasis">.text-success-emphasis</p>
    <p className="text-danger">.text-danger</p>
    <p className="text-danger-emphasis">.text-danger-emphasis</p>
    <p className="text-warning bg-dark">.text-warning</p>
    <p className="text-warning-emphasis">.text-warning-emphasis</p>
    <p className="text-info bg-dark">.text-info</p>
    <p className="text-info-emphasis">.text-info-emphasis</p>
    <p className="text-light bg-dark">.text-light</p>
    <p className="text-light-emphasis">.text-light-emphasis</p>
    <p className="text-dark bg-white">.text-dark</p>
    <p className="text-dark-emphasis">.text-dark-emphasis</p>
    <p className="text-body">.text-body</p>
    <p className="text-muted">.text-muted</p>
    <p className="text-body-emphasis">.text-body-emphasis</p>
    <p className="text-body-secondary">.text-body-secondary</p>
    <p className="text-body-tertiary">.text-body-tertiary</p>
    <p className="text-black bg-white">.text-black</p>
    <p className="text-white bg-dark">.text-white</p>
    <p className="text-black-50 bg-white">.text-black-50</p>
    <p className="text-white-50 bg-dark">.text-white-50</p>

    {/* BORDERS */}

    <span className="border border-primary">text</span>
    <span className="border border-primary-subtle">text</span>
    <span className="border border-secondary">text</span>
    <span className="border border-secondary-subtle">text</span>
    <span className="border border-success">text</span>
    <span className="border border-success-subtle">text</span>
    <span className="border border-danger">text</span>
    <span className="border border-danger-subtle">text</span>
    <span className="border border-warning">text</span>
    <span className="border border-warning-subtle">text</span>
    <span className="border border-info">text</span>
    <span className="border border-info-subtle">text</span>
    <span className="border border-light">text</span>
    <span className="border border-light-subtle">text</span>
    <span className="border border-dark">text</span>
    <span className="border border-dark-subtle">text</span>
    <span className="border border-white">text</span>

    <span class="border border-0">sameet khatri</span>
    <span class="border border-top-0">sameet khatri</span>
    <span class="border border-end-0">sameet khatri</span>
    <span class="border border-bottom-0">sameet khatri</span>
    <span class="border border-start-0">sameet khatri</span>
    <span className="border">nitesh khatri</span>
    <span className="border-top">nitesh khatri</span>
    <span className="border-end">nitesh khatri</span>
    <span className="border-bottom">nitesh khatri</span>
    <span className="border-start">nitesh khatri</span>

    {/* BACKGROUND */}
    <div className="bg-success p-2 text-white">
    This is default success background
  </div>
  <div className="bg-success p-2 text-white bg-opacity-75">
    This is 75% opacity success background
  </div>
  <div className="bg-success p-2 text-dark bg-opacity-50">
    This is 50% opacity success background
  </div>
  <div className="bg-success p-2 text-dark bg-opacity-25">
    This is 25% opacity success background
  </div>
  <div className="bg-success p-2 text-dark bg-opacity-10">
    This is 10% opacity success background
  </div>
  <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div className="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
    .bg-primary-subtle
  </div>
  <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
  <div className="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
    .bg-secondary-subtle
  </div>
  <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div className="p-3 mb-2 bg-success-subtle text-emphasis-success">
    .bg-success-subtle
  </div>
  <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div className="p-3 mb-2 bg-danger-subtle text-emphasis-danger">
    .bg-danger-subtle
  </div>
  <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
    .bg-warning-subtle
  </div>
  <div className="p-3 mb-2 bg-info text-dark">.bg-info</div>
  <div className="p-3 mb-2 bg-info-subtle text-emphasis-info">
    .bg-info-subtle
  </div>
  <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
  <div className="p-3 mb-2 bg-light-subtle text-emphasis-light">
    .bg-light-subtle
  </div>
  <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
  <div className="p-3 mb-2 bg-dark-subtle text-emphasis-dark">
    .bg-dark-subtle
  </div>
  <p className="p-3 mb-2 bg-body-secondary">.bg-body-secondary</p>
  <p className="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</p>
  <div className="p-3 mb-2 bg-body text-body">.bg-body</div>
  <div className="p-3 mb-2 bg-black text-white">.bg-black</div>
  <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
  <div className="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>
</>


    {/* HELPERS => CLEARFIX / COLOR & BACKGROUND / COLORED LINKS / POSITION / RATIO / STACKS / STRETECHED LINK / TEXT TRUNCATION / VERTICAL RULE / VISUALL HIDDEN */}
    {/* VISUALLY HIDDEN */}
    <h2 className="visually-hidden">Title for screen readers</h2>
    <a className="visually-hidden-focusable" href="#content">
      Skip to main content
    </a>
    <div className="visually-hidden-focusable">
      A container with a <a href="#">focusable element</a>.
    </div>

    {/* VERTICAL RULE */}
    <div className="mx-5 d-flex" style={{ height: 200 }}>
      <div className="vr" />
    </div>

    {/* TEXT TRUNCATION */}
    {/* Block level */}
  <div className="row">
    <div className="col-2 text-truncate">
      This text is quite long, and will be truncated once displayed.
    </div>
  </div>
  {/* Inline level */}
  <span className="d-inline-block text-truncate" style={{ maxWidth: 150 }}>
    This text is quite long, and will be truncated once displayed.
  </span>

    {/* STRETECHED LINK */}
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card with stretched link</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a href="#" className="btn btn-primary stretched-link">
          Go somewhere
        </a>
      </div>
    </div>

    {/* STACKS */}
    <div className="vstack gap-2 col-md-5 mx-auto">
      <button type="button" className="btn btn-secondary">
        Save changes
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Cancel
      </button>
    </div>

        
    <div className="vstack gap-3">
      <div className="bg-body-tertiary border">First item</div>
      <div className="bg-body-tertiary border">Second item</div>
      <div className="bg-body-tertiary border">Third item</div>
    </div>

    {/* RATIO */}
    <div className="ratio ratio-1x1">
      <div>1x1</div>
    </div>
    <div className="ratio ratio-4x3">
      <div>4x3</div>
    </div>
    <div className="ratio ratio-16x9">
      <div>16x9</div>
    </div>
    <div className="ratio ratio-21x9">
      <div>21x9</div>
    </div>

    <div className="ratio ratio-16x9">
      <iframe
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        title="YouTube video"
        allowFullScreen=""
      />
    </div>
    {/* COLORED LINKS */}
    <a href="#" className="link-primary">
      Primary link
    </a>
    <a href="#" className="link-secondary">
      Secondary link
    </a>
    <a href="#" className="link-success">
      Success link
    </a>
    <a href="#" className="link-danger">
      Danger link
    </a>
    <a href="#" className="link-warning">
      Warning link
    </a>
    <a href="#" className="link-info">
      Info link
    </a>
    <a href="#" className="link-light">
      Light link
    </a>
    <a href="#" className="link-dark">
      Dark link
    </a>
    
    {/* COLOR & BACKGROUND */}
    <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
    <div className="card-header">Header</div>
    <div className="card-body">
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
  <div className="card text-bg-info mb-3" style={{ maxWidth: "18rem" }}>
    <div className="card-header">Header</div>
    <div className="card-body">
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>

    <span className="badge text-bg-primary">Primary</span>
    <span className="badge text-bg-info">Info</span>
    <>
    <div className="text-bg-primary p-3">Primary with contrasting color</div>
    <div className="text-bg-secondary p-3">Secondary with contrasting color</div>
    <div className="text-bg-success p-3">Success with contrasting color</div>
    <div className="text-bg-danger p-3">Danger with contrasting color</div>
    <div className="text-bg-warning p-3">Warning with contrasting color</div>
    <div className="text-bg-info p-3">Info with contrasting color</div>
    <div className="text-bg-light p-3">Light with contrasting color</div>
    <div className="text-bg-dark p-3">Dark with contrasting color</div>
  </>

    {/* CLEARFIX */}
    <div className="clearfix d-flex">
      <div class="left w-50">left</div>
      <div class="right w-50">right</div>      
    </div>


  {/* COMPONENTS = ACCORDION / ALERTS / BADGE / BREADCRUMB / BUTTONS / BUTTON GRUP / CARD / CAROUSEL / CLOSE BUTTON / COLLAPSE / DROPDOWNS / LIST GROUP / MODAL / NAVBAR / NAVS & TABS / OFFCANVAS / PAGINATION / PLACEHOLDERS / POPOVERS / PROGRESSBARS / SCROLLSPY / SPINNERS / TOASTS / TOOLTIPS */}

  {/* TOOLTIPS */}
  <button
  type="button"
  className="btn btn-secondary"
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  data-bs-custom-class="custom-tooltip"
  data-bs-title="This top tooltip is themed via CSS variables."
>
  Custom tooltip
</button>

  {/* TOASTS */}
  <button type="button" className="btn btn-primary" id="liveToastBtn">
    Show live toast
  </button>
  <div className="toast-container position-fixed bottom-0 end-0 p-3">
    <div
      id="liveToast"
      className="toast"
    >
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
        />
      </div>
      <div className="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>

  {/* SPINNERS */}
  <div className="spinner-grow text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-success" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-light" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-dark" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>

  <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  <>
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-success" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-light" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-dark" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</>


  <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>


{/* SCROLLSPY */}
<div className="row">
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">
        Item 1
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">
        Item 2
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">
        Item 3
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">
        Item 4
      </a>
    </div>
  </div>
  <div className="col-8">
    <div
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-smooth-scroll="true"
      className="scrollspy-example"
      tabIndex={0}
    >
      <h4 id="list-item-1">Item 1</h4>
      <h4 id="list-item-2">Item 2</h4>
      <h4 id="list-item-3">Item 3</h4>
      <h4 id="list-item-4">Item 4</h4>
    </div>
  </div>
</div>


<div className="row">
  <div className="col-4">
    <nav
      id="navbar-example3"
      className="h-100 flex-column align-items-stretch pe-4 border-end"
    >
      <nav className="nav nav-pills flex-column">
        <a className="nav-link" href="#item-1">
          Item 1
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-1-1">
            Item 1-1
          </a>
          <a className="nav-link ms-3 my-1" href="#item-1-2">
            Item 1-2
          </a>
        </nav>
        <a className="nav-link" href="#item-2">
          Item 2
        </a>
        <a className="nav-link" href="#item-3">
          Item 3
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-3-1">
            Item 3-1
          </a>
          <a className="nav-link ms-3 my-1" href="#item-3-2">
            Item 3-2
          </a>
        </nav>
      </nav>
    </nav>
  </div>
  <div className="col-8">
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-smooth-scroll="true"
      className="scrollspy-example-2"
      tabIndex={0}
    >
      <div id="item-1">
        <h4>Item 1</h4>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
      </div>
    </div>
  </div>
</div>


<>
  <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading1">
          First
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading2">
          Second
        </a>
      </li>
    </ul>
  </nav>
  <div
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-root-margin="0px 0px -40%"
    data-bs-smooth-scroll="true"
    className="scrollspy-example bg-body-tertiary p-3 rounded-2"
    tabIndex={0}
  >
    <h4 id="scrollspyHeading1">First heading</h4>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
  </div>
</>


{/* PROGRESS */}
<div
  className="progress"
  role="progressbar"
  aria-label="Animated striped example"
  aria-valuenow={75}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div
    className="progress-bar progress-bar-striped progress-bar-animated"
    style={{ width: "75%" }}
  />
</div>


<>
  <div
    className="progress"
    role="progressbar"
    aria-label="Default striped example"
    aria-valuenow={10}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="progress-bar progress-bar-striped"
      style={{ width: "10%" }}
    />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Success striped example"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="progress-bar progress-bar-striped bg-success"
      style={{ width: "25%" }}
    />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Info striped example"
    aria-valuenow={50}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="progress-bar progress-bar-striped bg-info"
      style={{ width: "50%" }}
    />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Warning striped example"
    aria-valuenow={75}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="progress-bar progress-bar-striped bg-warning"
      style={{ width: "75%" }}
    />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Danger striped example"
    aria-valuenow={100}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="progress-bar progress-bar-striped bg-danger"
      style={{ width: "100%" }}
    />
  </div>
</>


<>
  <div
    className="progress"
    role="progressbar"
    aria-label="Basic example"
    aria-valuenow={0}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="progress-bar" style={{ width: "0%" }} />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Basic example"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="progress-bar" style={{ width: "25%" }} />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Basic example"
    aria-valuenow={50}
    aria-valuemin={0}
    aria-valuemax={100}
  >
     <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Basic example"
    aria-valuenow={75}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="progress-bar" style={{ width: "75%" }} />
  </div>
  <div
    className="progress"
    role="progressbar"
    aria-label="Basic example"
    aria-valuenow={100}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="progress-bar" style={{ width: "100%" }} />
  </div>
</>


  {/* PLACEHOLDERS */}
  <>
  <button
    type="button"
    className="btn btn-secondary"
    data-bs-container="body"
    data-bs-toggle="popover"
    data-bs-placement="top"
    data-bs-content="Top popover"
  >
    Popover on top
  </button>
  <button
    type="button"
    className="btn btn-secondary"
    data-bs-container="body"
    data-bs-toggle="popover"
    data-bs-placement="right"
    data-bs-content="Right popover"
  >
    Popover on right
  </button>
  <button
    type="button"
    className="btn btn-secondary"
    data-bs-container="body"
    data-bs-toggle="popover"
    data-bs-placement="bottom"
    data-bs-content="Bottom popover"
  >
    Popover on bottom
  </button>
  <button
    type="button"
    className="btn btn-secondary"
    data-bs-container="body"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-content="Left popover"
  >
    Popover on left
  </button>
</>



  {/* PAGINATION */}
  <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        Next
      </a>
    </li>
  </ul>
</nav>


  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">«</span>
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">»</span>
      </a>
    </li>
  </ul>
</nav>


  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#">
        Previous
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        Next
      </a>
    </li>
  </ul>
</nav>


  {/* OFFCANVAS */}
  <>
  <button
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    Toggle static offcanvas
  </button>
  <div
    className="offcanvas offcanvas-start"
    data-bs-backdrop="static"
    tabIndex={-1}
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="staticBackdropLabel">
        Offcanvas
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <div>I will not close if you click outside of me.</div>
    </div>
  </div>
</>


  <>
  <button
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions"
    aria-controls="offcanvasWithBothOptions"
  >
    Enable both scrolling &amp; backdrop
  </button>
  <div
    className="offcanvas offcanvas-start"
    data-bs-scroll="true"
    tabIndex={-1}
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Backdrop with scrolling
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>
</>


  <>
  <button
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
    aria-controls="offcanvasScrolling"
  >
    Enable body scrolling
  </button>
  <div
    className="offcanvas offcanvas-start"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabIndex={-1}
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
        Offcanvas with body scrolling
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>
</>



  {/* NAV & TABS */}
  <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
      Active
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Link
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Link
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>


  {/* NAVBAR */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  
  {/* MODAL */}
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Modal title
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* LIST GROUP */}
  <ul className="list-group">
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="checkbox"
      defaultValue=""
      id="firstCheckboxStretched"
    />
    <label
      className="form-check-label stretched-link"
      htmlFor="firstCheckboxStretched"
    >
      First checkbox
    </label>
  </li>
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="checkbox"
      defaultValue=""
      id="secondCheckboxStretched"
    />
    <label
      className="form-check-label stretched-link"
      htmlFor="secondCheckboxStretched"
    >
      Second checkbox
    </label>
  </li>
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="checkbox"
      defaultValue=""
      id="thirdCheckboxStretched"
    />
    <label
      className="form-check-label stretched-link"
      htmlFor="thirdCheckboxStretched"
    >
      Third checkbox
    </label>
  </li>
</ul>


  <ul className="list-group">
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="radio"
      name="listGroupRadio"
      defaultValue=""
      id="firstRadio"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="firstRadio">
      First radio
    </label>
  </li>
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="radio"
      name="listGroupRadio"
      defaultValue=""
      id="secondRadio"
    />
    <label className="form-check-label" htmlFor="secondRadio">
      Second radio
    </label>
  </li>
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="radio"
      name="listGroupRadio"
      defaultValue=""
      id="thirdRadio"
    />
    <label className="form-check-label" htmlFor="thirdRadio">
      Third radio
    </label>
  </li>
</ul>


  <ul className="list-group">
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="checkbox"
      defaultValue=""
      id="firstCheckbox"
    />
    <label className="form-check-label" htmlFor="firstCheckbox">
      First checkbox
    </label>
  </li>
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="checkbox"
      defaultValue=""
      id="secondCheckbox"
    />
    <label className="form-check-label" htmlFor="secondCheckbox">
      Second checkbox
    </label>
  </li>
  <li className="list-group-item">
    <input
      className="form-check-input me-1"
      type="checkbox"
      defaultValue=""
      id="thirdCheckbox"
    />
    <label className="form-check-label" htmlFor="thirdCheckbox">
      Third checkbox
    </label>
  </li>
</ul>


  <div className="list-group">
  <a
    href="#"
    className="list-group-item list-group-item-action active"
    aria-current="true"
  >
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-muted">And some muted small print.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-muted">And some muted small print.</small>
  </a>
</div>


  <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span className="badge bg-primary rounded-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span className="badge bg-primary rounded-pill">1</span>
  </li>
</ul>

  <div className="list-group">
  <a href="#" className="list-group-item list-group-item-action">
    A simple default list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-primary"
  >
    A simple primary list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-secondary"
  >
    A simple secondary list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-success"
  >
    A simple success list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-danger"
  >
    A simple danger list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-warning"
  >
    A simple warning list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-info"
  >
    A simple info list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-light"
  >
    A simple light list group item
  </a>
  <a
    href="#"
    className="list-group-item list-group-item-action list-group-item-dark"
  >
    A simple dark list group item
  </a>
</div>


  <ul className="list-group">
  <li className="list-group-item">A simple default list group item</li>
  <li className="list-group-item list-group-item-primary">
    A simple primary list group item
  </li>
  <li className="list-group-item list-group-item-secondary">
    A simple secondary list group item
  </li>
  <li className="list-group-item list-group-item-success">
    A simple success list group item
  </li>
  <li className="list-group-item list-group-item-danger">
    A simple danger list group item
  </li>
  <li className="list-group-item list-group-item-warning">
    A simple warning list group item
  </li>
  <li className="list-group-item list-group-item-info">
    A simple info list group item
  </li>
  <li className="list-group-item list-group-item-light">
    A simple light list group item
  </li>
  <li className="list-group-item list-group-item-dark">
    A simple dark list group item
  </li>
</ul>


  <>
  <ul className="list-group list-group-horizontal">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <ul className="list-group list-group-horizontal-sm">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <ul className="list-group list-group-horizontal-md">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <ul className="list-group list-group-horizontal-lg">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <ul className="list-group list-group-horizontal-xl">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <ul className="list-group list-group-horizontal-xxl">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
</>


  <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
</ol>


  <ol className="list-group list-group-numbered">
  <li className="list-group-item">A list item</li>
  <li className="list-group-item">A list item</li>
  <li className="list-group-item">A list item</li>
</ol>


  <ul className="list-group list-group-flush">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>



  <div className="list-group">
  <button
    type="button"
    className="list-group-item list-group-item-action active"
    aria-current="true"
  >
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">
    A second button item
  </button>
  <button type="button" className="list-group-item list-group-item-action">
    A third button item
  </button>
  <button type="button" className="list-group-item list-group-item-action">
    A fourth button item
  </button>
  <button
    type="button"
    className="list-group-item list-group-item-action"
    disabled=""
  >
    A disabled button item
  </button>
</div>


  <div className="list-group">
  <a
    href="#"
    className="list-group-item list-group-item-action active"
    aria-current="true"
  >
    The current link item
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    A second link item
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    A third link item
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    A fourth link item
  </a>
  <a className="list-group-item list-group-item-action disabled">
    A disabled link item
  </a>
</div>


  <ul className="list-group">
  <li className="list-group-item disabled" aria-disabled="true">
    A disabled item
  </li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>

  <ul className="list-group">
  <li className="list-group-item active" aria-current="true">
    An active item
  </li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>


  <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>


{/* DROPDOWNS */}
<div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </li>
  </ul>
</div>


{/* COLLAPSE */}

<>
  <p>
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample"
      aria-expanded="false"
      aria-controls="collapseWidthExample"
    >
      Toggle width collapse
    </button>
  </p>
  <div style={{ minHeight: 120 }}>
    <div className="collapse collapse-horizontal" id="collapseWidthExample">
      <div className="card card-body" style={{ width: 300 }}>
        This is some placeholder content for a horizontal collapse. It's hidden
        by default and shown when triggered.
      </div>
    </div>
  </div>
</>


  <p>
    <a
      className="btn btn-primary"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Link with href
    </a>
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Button with data-bs-target
    </button>
  </p>
  <div className="collapse" id="collapseExample">
    <div className="card card-body">
      Some placeholder content for the collapse component. This panel is hidden
      by default but revealed when the user activates the relevant trigger.
    </div>
  </div>


  {/* CAROUSEL */}
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  {/* CARD */}



  <div className="card">
  <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  {/* BUTTON GROUP */}
  <div
  className="btn-group-vertical"
  role="group"
  aria-label="Vertical radio toggle button group"
>
  <input
    type="radio"
    className="btn-check"
    name="vbtn-radio"
    id="vbtn-radio1"
    autoComplete="off"
    defaultChecked=""
  />
  <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
    Radio 1
  </label>
  <input
    type="radio"
    className="btn-check"
    name="vbtn-radio"
    id="vbtn-radio2"
    autoComplete="off"
  />
  <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
    Radio 2
  </label>
  <input
    type="radio"
    className="btn-check"
    name="vbtn-radio"
    id="vbtn-radio3"
    autoComplete="off"
  />
  <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
    Radio 3
  </label>
</div>


  <div
  className="btn-group-vertical"
  role="group"
  aria-label="Vertical button group"
>
  <button type="button" className="btn btn-primary">
    Button
  </button>
  <button type="button" className="btn btn-primary">
    Button
  </button>
  <div className="btn-group" role="group">
    <button
      type="button"
      className="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
    </ul>
  </div>
  <button type="button" className="btn btn-primary">
    Button
  </button>
  <button type="button" className="btn btn-primary">
    Button
  </button>
  <div className="btn-group" role="group">
    <button
      type="button"
      className="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
    </ul>
  </div>
  <div className="btn-group" role="group">
    <button
      type="button"
      className="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
    </ul>
  </div>
  <div className="btn-group" role="group">
    <button
      type="button"
      className="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
    </ul>
  </div>
</div>


  <div
  className="btn-group-vertical"
  role="group"
  aria-label="Vertical button group"
>
  <button type="button" className="btn btn-dark">
    Button
  </button>
  <button type="button" className="btn btn-dark">
    Button
  </button>
  <button type="button" className="btn btn-dark">
    Button
  </button>
  <button type="button" className="btn btn-dark">
    Button
  </button>
  <button type="button" className="btn btn-dark">
    Button
  </button>
  <button type="button" className="btn btn-dark">
    Button
  </button>
</div>


  <div
  className="btn-group"
  role="group"
  aria-label="Button group with nested dropdown"
>
  <button type="button" className="btn btn-primary">
    1
  </button>
  <button type="button" className="btn btn-primary">
    2
  </button>
  <div className="btn-group" role="group">
    <button
      type="button"
      className="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </li>
    </ul>
  </div>
</div>

  <>
  <div
    className="btn-group btn-group-lg"
    role="group"
    aria-label="Large button group"
  >
    <button type="button" className="btn btn-outline-dark">
      Left
    </button>
    <button type="button" className="btn btn-outline-dark">
      Middle
    </button>
    <button type="button" className="btn btn-outline-dark">
      Right
    </button>
  </div>
  <br />
  <div className="btn-group" role="group" aria-label="Default button group">
    <button type="button" className="btn btn-outline-dark">
      Left
    </button>
    <button type="button" className="btn btn-outline-dark">
      Middle
    </button>
    <button type="button" className="btn btn-outline-dark">
      Right
    </button>
  </div>
  <br />
  <div
    className="btn-group btn-group-sm"
    role="group"
    aria-label="Small button group"
  >
    <button type="button" className="btn btn-outline-dark">
      Left
    </button>
    <button type="button" className="btn btn-outline-dark">
      Middle
    </button>
    <button type="button" className="btn btn-outline-dark">
      Right
    </button>
  </div>
</>


  <>
  <div
    className="btn-toolbar mb-3"
    role="toolbar"
    aria-label="Toolbar with button groups"
  >
    <div className="btn-group me-2" role="group" aria-label="First group">
      <button type="button" className="btn btn-outline-secondary">
        1
      </button>
      <button type="button" className="btn btn-outline-secondary">
        2
      </button>
      <button type="button" className="btn btn-outline-secondary">
        3
      </button>
      <button type="button" className="btn btn-outline-secondary">
        4
      </button>
    </div>
    <div className="input-group">
      <div className="input-group-text" id="btnGroupAddon">
        @
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </div>
  </div>
  <div
    className="btn-toolbar justify-content-between"
    role="toolbar"
    aria-label="Toolbar with button groups"
  >
    <div className="btn-group" role="group" aria-label="First group">
      <button type="button" className="btn btn-outline-secondary">
        1
      </button>
      <button type="button" className="btn btn-outline-secondary">
        2
      </button>
      <button type="button" className="btn btn-outline-secondary">
        3
      </button>
      <button type="button" className="btn btn-outline-secondary">
        4
      </button>
    </div>
    <div className="input-group">
      <div className="input-group-text" id="btnGroupAddon2">
        @
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </div>
  </div>
</>


  <div
  className="btn-toolbar"
  role="toolbar"
  aria-label="Toolbar with button groups"
>
  <div className="btn-group me-2" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary">
      1
    </button>
    <button type="button" className="btn btn-primary">
      2
    </button>
    <button type="button" className="btn btn-primary">
      3
    </button>
    <button type="button" className="btn btn-primary">
      4
    </button>
  </div>
  <div className="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary">
      5
    </button>
    <button type="button" className="btn btn-secondary">
      6
    </button>
    <button type="button" className="btn btn-secondary">
      7
    </button>
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btn-info">
      8
    </button>
  </div>
</div>


  <div
  className="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  <input
    type="radio"
    className="btn-check"
    name="btnradio"
    id="btnradio1"
    autoComplete="off"
    defaultChecked=""
  />
  <label className="btn btn-outline-primary" htmlFor="btnradio1">
    Radio 1
  </label>
  <input
    type="radio"
    className="btn-check"
    name="btnradio"
    id="btnradio2"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btnradio2">
    Radio 2
  </label>
  <input
    type="radio"
    className="btn-check"
    name="btnradio"
    id="btnradio3"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btnradio3">
    Radio 3
  </label>
</div>


  <div
  className="btn-group"
  role="group"
  aria-label="Basic checkbox toggle button group"
>
  <input
    type="checkbox"
    className="btn-check"
    id="btncheck1"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btncheck1">
    Checkbox 1
  </label>
  <input
    type="checkbox"
    className="btn-check"
    id="btncheck2"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btncheck2">
    Checkbox 2
  </label>
  <input
    type="checkbox"
    className="btn-check"
    id="btncheck3"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btncheck3">
    Checkbox 3
  </label>
</div>

  <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-outline-primary">
    Left
  </button>
  <button type="button" className="btn btn-outline-primary">
    Middle
  </button>
  <button type="button" className="btn btn-outline-primary">
    Right
  </button>
</div>

  <div
  className="btn-group"
  role="group"
  aria-label="Basic mixed styles example"
>
  <button type="button" className="btn btn-danger">
    Left
  </button>
  <button type="button" className="btn btn-warning">
    Middle
  </button>
  <button type="button" className="btn btn-success">
    Right
  </button>
</div>


  <div className="btn-group">
  <a href="#" className="btn btn-primary active" aria-current="page">
    Active link
  </a>
  <a href="#" className="btn btn-primary">
    Link
  </a>
  <a href="#" className="btn btn-primary">
    Link
  </a>
</div>

  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary">
    Left
  </button>
  <button type="button" className="btn btn-primary">
    Middle
  </button>
  <button type="button" className="btn btn-primary">
    Right
  </button>
</div>


  {/*  BUTTONS */}
  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2" type="button">
    Button
  </button>
  <button className="btn btn-primary" type="button">
    Button
  </button>
</div>


  <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">
    Button
  </button>
  <button className="btn btn-primary" type="button">
    Button
  </button>
</div>


  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">
    Button
  </button>
  <button className="btn btn-primary" type="button">
    Button
  </button>
</div>


  <>
  <button type="button" className="btn btn-primary" disabled="">
    Primary button
  </button>
  <button type="button" className="btn btn-secondary" disabled="">
    Button
  </button>
  <button type="button" className="btn btn-outline-primary" disabled="">
    Primary button
  </button>
  <button type="button" className="btn btn-outline-secondary" disabled="">
    Button
  </button>
</>


  <>
  <button type="button" className="btn btn-primary btn-lg">
    Large button
  </button>
  <button type="button" className="btn btn-secondary btn-lg">
    Large button
  </button>
</>

  <>
  <button type="button" className="btn btn-outline-primary">
    Primary
  </button>
  <button type="button" className="btn btn-outline-secondary">
    Secondary
  </button>
  <button type="button" className="btn btn-outline-success">
    Success
  </button>
  <button type="button" className="btn btn-outline-danger">
    Danger
  </button>
  <button type="button" className="btn btn-outline-warning">
    Warning
  </button>
  <button type="button" className="btn btn-outline-info">
    Info
  </button>
  <button type="button" className="btn btn-outline-light">
    Light
  </button>
  <button type="button" className="btn btn-outline-dark">
    Dark
  </button>
</>


  <>
  <a className="btn btn-primary" href="#" role="button">
    Link
  </a>
  <button className="btn btn-primary" type="submit">
    Button
  </button>
  <input className="btn btn-primary" type="button" defaultValue="Input" />
  <input className="btn btn-primary" type="submit" defaultValue="Submit" />
  <input className="btn btn-primary" type="reset" defaultValue="Reset" />
</>

  <>
  <button type="button" className="btn btn-primary">
    Primary
  </button>
  <button type="button" className="btn btn-secondary">
    Secondary
  </button>
  <button type="button" className="btn btn-success">
    Success
  </button>
  <button type="button" className="btn btn-danger">
    Danger
  </button>
  <button type="button" className="btn btn-warning">
    Warning
  </button>
  <button type="button" className="btn btn-info">
    Info
  </button>
  <button type="button" className="btn btn-light">
    Light
  </button>
  <button type="button" className="btn btn-dark">
    Dark
  </button>
  <button type="button" className="btn btn-link">
    Link
  </button>
</>


  {/* BREADCRUMB */}
  <>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item active" aria-current="page">
        Home
      </li>
    </ol>
  </nav>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Library
      </li>
    </ol>
  </nav>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Library</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
</>


  <>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item active" aria-current="page">
        Home
      </li>
    </ol>
  </nav>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Library
      </li>
    </ol>
  </nav>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Library</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
</>


  {/* BADGE */}
  <>
  <span className="badge rounded-pill text-bg-primary">Primary</span>
  <span className="badge rounded-pill text-bg-secondary">Secondary</span>
  <span className="badge rounded-pill text-bg-success">Success</span>
  <span className="badge rounded-pill text-bg-danger">Danger</span>
  <span className="badge rounded-pill text-bg-warning">Warning</span>
  <span className="badge rounded-pill text-bg-info">Info</span>
  <span className="badge rounded-pill text-bg-light">Light</span>
  <span className="badge rounded-pill text-bg-dark">Dark</span>
</>

  <span className="badge text-bg-primary">Primary</span>
<span className="badge text-bg-secondary">Secondary</span>
<span className="badge text-bg-success">Success</span>
<span className="badge text-bg-danger">Danger</span>
<span className="badge text-bg-warning">Warning</span>
<span className="badge text-bg-info">Info</span>
<span className="badge text-bg-light">Light</span>
<span className="badge text-bg-dark">Dark</span>

  <button type="button" className="btn btn-primary position-relative">
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>


  <button type="button" className="btn btn-primary">
  Notifications <span className="badge text-bg-secondary">4</span>
</button>

  <>
  <h1>
    Example heading <span className="badge bg-secondary">New</span>
  </h1>
  <h2>
    Example heading <span className="badge bg-secondary">New</span>
  </h2>
  <h3>
    Example heading <span className="badge bg-secondary">New</span>
  </h3>
  <h4>
    Example heading <span className="badge bg-secondary">New</span>
  </h4>
  <h5>
    Example heading <span className="badge bg-secondary">New</span>
  </h5>
  <h6>
    Example heading <span className="badge bg-secondary">New</span>
  </h6>
</>


{/* ALERTS */}
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields
  below.
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  />
</div>


<>
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
    <symbol id="check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </symbol>
    <symbol id="info-fill" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </symbol>
    <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </symbol>
  </svg>
  <div className="alert alert-primary d-flex align-items-center" role="alert">
    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:">
      <use xlinkHref="#info-fill" />
    </svg>
    <div>An example alert with an icon</div>
  </div>
  <div className="alert alert-success d-flex align-items-center" role="alert">
    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
      <use xlinkHref="#check-circle-fill" />
    </svg>
    <div>An example success alert with an icon</div>
  </div>
  <div className="alert alert-warning d-flex align-items-center" role="alert">
    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Warning:">
      <use xlinkHref="#exclamation-triangle-fill" />
    </svg>
    <div>An example warning alert with an icon</div>
  </div>
  <div className="alert alert-danger d-flex align-items-center" role="alert">
    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
      <use xlinkHref="#exclamation-triangle-fill" />
    </svg>
    <div>An example danger alert with an icon</div>
  </div>
</>


<div className="alert alert-primary d-flex align-items-center" role="alert">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
    viewBox="0 0 16 16"
    role="img"
    aria-label="Warning:"
  >
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
  <div>An example alert with an icon</div>
</div>


<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</div>
<>
  <div className="alert alert-primary" role="alert">
    A simple primary alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-secondary" role="alert">
    A simple secondary alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-success" role="alert">
    A simple success alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-danger" role="alert">
    A simple danger alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-warning" role="alert">
    A simple warning alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-info" role="alert">
    A simple info alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-light" role="alert">
    A simple light alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
  <div className="alert alert-dark" role="alert">
    A simple dark alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </div>
</>

<>
  <div id="liveAlertPlaceholder" />
  <button type="button" className="btn btn-primary" id="liveAlertBtn">
    Show live alert
  </button>
</>

<>
  <div className="alert alert-primary">
    A simple primary alert—check it out!
  </div>
  <div className="alert alert-secondary">
    A simple secondary alert—check it out!
  </div>
  <div className="alert alert-success">
    A simple success alert—check it out!
  </div>
  <div className="alert alert-danger">
    A simple danger alert—check it out!
  </div>
  <div className="alert alert-warning">
    A simple warning alert—check it out!
  </div>
  <div className="alert alert-info">
    A simple info alert—check it out!
  </div>
  <div className="alert alert-light">
    A simple light alert—check it out!
  </div>
  <div className="alert alert-dark">
    A simple dark alert—check it out!
  </div>
</>


  {/* ACCORDION */}
  <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="panelsStayOpen-headingOne"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingTwo"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingThree"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>


  <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the first item's
        accordion body.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the second item's
        accordion body. Let's imagine this being filled with some actual
        content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the third item's
        accordion body. Nothing more exciting happening here in terms of
        content, but just filling up the space to make it look, at least at
        first glance, a bit more representative of how this would look in a
        real-world application.
      </div>
    </div>
  </div>
</div>


  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>



    {/* FORMS - OVERVIEW / FORMCONTROL / SELECT / CHECKS / RADIOS / RANGE / INPUT GROUP / FLOATING LABELS / LAYOUT / VALIDATION */}
    <form className="row g-3 needs-validation" noValidate="">
  <div className="col-md-4 position-relative">
    <label htmlFor="validationTooltip01" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltip01"
      defaultValue="Mark"
      required=""
    />
    <div className="valid-tooltip">Looks good!</div>
  </div>
  <div className="col-md-4 position-relative">
    <label htmlFor="validationTooltip02" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltip02"
      defaultValue="Otto"
      required=""
    />
    <div className="valid-tooltip">Looks good!</div>
  </div>
  <div className="col-md-4 position-relative">
    <label htmlFor="validationTooltipUsername" className="form-label">
      Username
    </label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="validationTooltipUsernamePrepend">
        @
      </span>
      <input
        type="text"
        className="form-control"
        id="validationTooltipUsername"
        aria-describedby="validationTooltipUsernamePrepend"
        required=""
      />
      <div className="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div className="col-md-6 position-relative">
    <label htmlFor="validationTooltip03" className="form-label">
      City
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltip03"
      required=""
    />
    <div className="invalid-tooltip">Please provide a valid city.</div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip04" className="form-label">
      State
    </label>
    <select className="form-select" id="validationTooltip04" required="">
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </select>
    <div className="invalid-tooltip">Please select a valid state.</div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip05" className="form-label">
      Zip
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltip05"
      required=""
    />
    <div className="invalid-tooltip">Please provide a valid zip.</div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">
      Submit form
    </button>
  </div>
</form>


    <form className="row g-3">
  <div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control is-valid"
      id="validationServer01"
      defaultValue="Mark"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control is-valid"
      id="validationServer02"
      defaultValue="Otto"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">
      Username
    </label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">
        @
      </span>
      <input
        type="text"
        className="form-control is-invalid"
        id="validationServerUsername"
        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
        required=""
      />
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">
      City
    </label>
    <input
      type="text"
      className="form-control is-invalid"
      id="validationServer03"
      aria-describedby="validationServer03Feedback"
      required=""
    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">
      State
    </label>
    <select
      className="form-select is-invalid"
      id="validationServer04"
      aria-describedby="validationServer04Feedback"
      required=""
    >
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer05" className="form-label">
      Zip
    </label>
    <input
      type="text"
      className="form-control is-invalid"
      id="validationServer05"
      aria-describedby="validationServer05Feedback"
      required=""
    />
    <div id="validationServer05Feedback" className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input is-invalid"
        type="checkbox"
        defaultValue=""
        id="invalidCheck3"
        aria-describedby="invalidCheck3Feedback"
        required=""
      />
      <label className="form-check-label" htmlFor="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">
      Submit form
    </button>
  </div>
</form>


    <form className="row g-3">
  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationDefault01"
      defaultValue="Mark"
      required=""
    />
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationDefault02"
      defaultValue="Otto"
      required=""
    />
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label">
      Username
    </label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">
        @
      </span>
      <input
        type="text"
        className="form-control"
        id="validationDefaultUsername"
        aria-describedby="inputGroupPrepend2"
        required=""
      />
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">
      City
    </label>
    <input
      type="text"
      className="form-control"
      id="validationDefault03"
      required=""
    />
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label">
      State
    </label>
    <select className="form-select" id="validationDefault04" required="">
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault05" className="form-label">
      Zip
    </label>
    <input
      type="text"
      className="form-control"
      id="validationDefault05"
      required=""
    />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue=""
        id="invalidCheck2"
        required=""
      />
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">
      Submit form
    </button>
  </div>
</form>


    <form className="row g-3 needs-validation" noValidate="">
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom01"
      defaultValue="Mark"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom02"
      defaultValue="Otto"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">
      Username
    </label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">
        @
      </span>
      <input
        type="text"
        className="form-control"
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend"
        required=""
      />
      <div className="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">
      City
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom03"
      required=""
    />
    <div className="invalid-feedback">Please provide a valid city.</div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">
      State
    </label>
    <select className="form-select" id="validationCustom04" required="">
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">Please select a valid state.</div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">
      Zip
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom05"
      required=""
    />
    <div className="invalid-feedback">Please provide a valid zip.</div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue=""
        id="invalidCheck"
        required=""
      />
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">
      Submit form
    </button>
  </div>
</form>


    <form className="row row-cols-lg-auto g-3 align-items-center">
  <div className="col-12">
    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
      Username
    </label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input
        type="text"
        className="form-control"
        id="inlineFormInputGroupUsername"
        placeholder="Username"
      />
    </div>
  </div>
  <div className="col-12">
    <label className="visually-hidden" htmlFor="inlineFormSelectPref">
      Preference
    </label>
    <select className="form-select" id="inlineFormSelectPref">
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="inlineFormCheck"
      />
      <label className="form-check-label" htmlFor="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </div>
</form>


    <form className="row gx-3 gy-2 align-items-center">
  <div className="col-sm-3">
    <label className="visually-hidden" htmlFor="specificSizeInputName">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="specificSizeInputName"
      placeholder="Jane Doe"
    />
  </div>
  <div className="col-sm-3">
    <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
      Username
    </label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input
        type="text"
        className="form-control"
        id="specificSizeInputGroupUsername"
        placeholder="Username"
      />
    </div>
  </div>
  <div className="col-sm-3">
    <label className="visually-hidden" htmlFor="specificSizeSelect">
      Preference
    </label>
    <select className="form-select" id="specificSizeSelect">
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="col-auto">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="autoSizingCheck2"
      />
      <label className="form-check-label" htmlFor="autoSizingCheck2">
        Remember me
      </label>
    </div>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </div>
</form>


    <form className="row gy-2 gx-3 align-items-center">
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInput">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="autoSizingInput"
      placeholder="Jane Doe"
    />
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInputGroup">
      Username
    </label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input
        type="text"
        className="form-control"
        id="autoSizingInputGroup"
        placeholder="Username"
      />
    </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingSelect">
      Preference
    </label>
    <select className="form-select" id="autoSizingSelect">
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="col-auto">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="autoSizingCheck"
      />
      <label className="form-check-label" htmlFor="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </div>
</form>


    <div className="row g-3">
  <div className="col-sm-7">
    <input
      type="text"
      className="form-control"
      placeholder="City"
      aria-label="City"
    />
  </div>
  <div className="col-sm">
    <input
      type="text"
      className="form-control"
      placeholder="State"
      aria-label="State"
    />
  </div>
  <div className="col-sm">
    <input
      type="text"
      className="form-control"
      placeholder="Zip"
      aria-label="Zip"
    />
  </div>
</div>


    <>
  <div className="row mb-3">
    <label
      htmlFor="colFormLabelSm"
      className="col-sm-2 col-form-label col-form-label-sm"
    >
      Email
    </label>
    <div className="col-sm-10">
      <input
        type="email"
        className="form-control form-control-sm"
        id="colFormLabelSm"
        placeholder="col-form-label-sm"
      />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
      Email
    </label>
    <div className="col-sm-10">
      <input
        type="email"
        className="form-control"
        id="colFormLabel"
        placeholder="col-form-label"
      />
    </div>
  </div>
  <div className="row">
    <label
      htmlFor="colFormLabelLg"
      className="col-sm-2 col-form-label col-form-label-lg"
    >
      Email
    </label>
    <div className="col-sm-10">
      <input
        type="email"
        className="form-control form-control-lg"
        id="colFormLabelLg"
        placeholder="col-form-label-lg"
      />
    </div>
  </div>
</>


    <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
      Email
    </label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
      Password
    </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" />
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gridRadios"
          id="gridRadios1"
          defaultValue="option1"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="gridRadios1">
          First radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gridRadios"
          id="gridRadios2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="gridRadios2">
          Second radio
        </label>
      </div>
      <div className="form-check disabled">
        <input
          className="form-check-input"
          type="radio"
          name="gridRadios"
          id="gridRadios3"
          defaultValue="option3"
          disabled=""
        />
        <label className="form-check-label" htmlFor="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">
    Sign in
  </button>
</form>


    <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Password
    </label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">
      Address
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">
      Address 2
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      City
    </label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">
      State
    </label>
    <select id="inputState" className="form-select">
      <option selected="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">
      Zip
    </label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
  </div>
</form>


    <div className="row">
  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="First name"
      aria-label="First name"
    />
  </div>
  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="Last name"
      aria-label="Last name"
    />
  </div>
</div>


    <>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">
      Example label
    </label>
    <input
      type="text"
      className="form-control"
      id="formGroupExampleInput"
      placeholder="Example input placeholder"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">
      Another label
    </label>
    <input
      type="text"
      className="form-control"
      id="formGroupExampleInput2"
      placeholder="Another input placeholder"
    />
  </div>
</>


    <div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input
        type="email"
        className="form-control"
        id="floatingInputGrid"
        placeholder="name@example.com"
        defaultValue="mdo@example.com"
      />
      <label htmlFor="floatingInputGrid">Email address</label>
    </div>
  </div>
  <div className="col-md">
    <div className="form-floating">
      <select className="form-select" id="floatingSelectGrid">
        <option selected="">Open this select menu</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">Works with selects</label>
    </div>
  </div>
</div>


    <div className="input-group mb-3">
  <span className="input-group-text">@</span>
  <div className="form-floating">
    <input
      type="text"
      className="form-control"
      id="floatingInputGroup1"
      placeholder="Username"
    />
    <label htmlFor="floatingInputGroup1">Username</label>
  </div>
</div>


    <>
  <div className="form-floating mb-3">
    <input
      type="email"
      readOnly=""
      className="form-control-plaintext"
      id="floatingEmptyPlaintextInput"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
  </div>
  <div className="form-floating mb-3">
    <input
      type="email"
      readOnly=""
      className="form-control-plaintext"
      id="floatingPlaintextInput"
      placeholder="name@example.com"
      defaultValue="name@example.com"
    />
    <label htmlFor="floatingPlaintextInput">Input with value</label>
  </div>
</>


    <>
  <div className="form-floating mb-3">
    <input
      type="email"
      className="form-control"
      id="floatingInputDisabled"
      placeholder="name@example.com"
      disabled=""
    />
    <label htmlFor="floatingInputDisabled">Email address</label>
  </div>
  <div className="form-floating mb-3">
    <textarea
      className="form-control"
      placeholder="Leave a comment here"
      id="floatingTextareaDisabled"
      disabled=""
      defaultValue={""}
    />
    <label htmlFor="floatingTextareaDisabled">Comments</label>
  </div>
  <div className="form-floating mb-3">
    <textarea
      className="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea2Disabled"
      style={{ height: 100 }}
      disabled=""
      defaultValue={""}
    />
    <label htmlFor="floatingTextarea2Disabled">Comments</label>
  </div>
  <div className="form-floating">
    <select
      className="form-select"
      id="floatingSelectDisabled"
      aria-label="Floating label disabled select example"
      disabled=""
    >
      <option selected="">Open this select menu</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    <label htmlFor="floatingSelectDisabled">Works with selects</label>
  </div>
</>


    <div className="form-floating">
  <select
    className="form-select"
    id="floatingSelect"
  >
    <option selected="">Open this select menu</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
  <label htmlFor="floatingSelect">Works with selects</label>
</div>


    <div className="form-floating">
  <textarea
    className="form-control"
    placeholder="Leave a comment here"
    id="floatingTextarea2"
    style={{ height: 100 }}
    defaultValue={""}
  />
  <label htmlFor="floatingTextarea2">Comments</label>
</div>


    <div className="form-floating">
  <textarea
    className="form-control"
    placeholder="Leave a comment here"
    id="floatingTextarea"
    defaultValue={""}
  />
  <label htmlFor="floatingTextarea">Comments</label>
</div>


    <form className="form-floating">
  <input
    type="email"
    className="form-control is-invalid"
    id="floatingInputInvalid"
    placeholder="name@example.com"
    defaultValue="test@example.com"
  />
  <label htmlFor="floatingInputInvalid">Invalid input</label>
</form>


    <form className="form-floating">
  <input
    type="email"
    className="form-control"
    id="floatingInputValue"
    placeholder="name@example.com"
    defaultValue="test@example.com"
  />
  <label htmlFor="floatingInputValue">Input with value</label>
</form>


    <>
  <div className="form-floating mb-3">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
    <label htmlFor="floatingPassword">Password</label>
  </div>
</>


    <>
  <div className="input-group mb-3">
    <label className="input-group-text" htmlFor="inputGroupFile01">
      Upload
    </label>
    <input type="file" className="form-control" id="inputGroupFile01" />
  </div>
  <div className="input-group mb-3">
    <input type="file" className="form-control" id="inputGroupFile02" />
    <label className="input-group-text" htmlFor="inputGroupFile02">
      Upload
    </label>
  </div>
  <div className="input-group mb-3">
    <button
      className="btn btn-outline-secondary"
      type="button"
      id="inputGroupFileAddon03"
    >
      Button
    </button>
    <input
      type="file"
      className="form-control"
      id="inputGroupFile03"
      aria-describedby="inputGroupFileAddon03"
      aria-label="Upload"
    />
  </div>
  <div className="input-group">
    <input
      type="file"
      className="form-control"
      id="inputGroupFile04"
      aria-describedby="inputGroupFileAddon04"
      aria-label="Upload"
    />
    <button
      className="btn btn-outline-secondary"
      type="button"
      id="inputGroupFileAddon04"
    >
      Button
    </button>
  </div>
</>


    <>
  <div className="input-group mb-3">
    <label className="input-group-text" htmlFor="inputGroupSelect01">
      Options
    </label>
    <select className="form-select" id="inputGroupSelect01">
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="input-group mb-3">
    <select className="form-select" id="inputGroupSelect02">
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    <label className="input-group-text" htmlFor="inputGroupSelect02">
      Options
    </label>
  </div>
  <div className="input-group mb-3">
    <button className="btn btn-outline-secondary" type="button">
      Button
    </button>
    <select
      className="form-select"
      id="inputGroupSelect03"
      aria-label="Example select with button addon"
    >
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="input-group">
    <select
      className="form-select"
      id="inputGroupSelect04"
      aria-label="Example select with button addon"
    >
      <option selected="">Choose...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    <button className="btn btn-outline-secondary" type="button">
      Button
    </button>
  </div>
</>


    <>
  <div className="input-group mb-3">
    <button type="button" className="btn btn-outline-secondary">
      Action
    </button>
    <button
      type="button"
      className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span className="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
    <input
      type="text"
      className="form-control"
      aria-label="Text input with segmented dropdown button"
    />
  </div>
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      aria-label="Text input with segmented dropdown button"
    />
    <button type="button" className="btn btn-outline-secondary">
      Action
    </button>
    <button
      type="button"
      className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span className="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul className="dropdown-menu dropdown-menu-end">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
  </div>
</>


    <>
  <div className="input-group mb-3">
    <button
      className="btn btn-outline-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
    <input
      type="text"
      className="form-control"
      aria-label="Text input with dropdown button"
    />
  </div>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      aria-label="Text input with dropdown button"
    />
    <button
      className="btn btn-outline-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu dropdown-menu-end">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
  </div>
  <div className="input-group">
    <button
      className="btn btn-outline-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Action before
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action before
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
    <input
      type="text"
      className="form-control"
      aria-label="Text input with 2 dropdown buttons"
    />
    <button
      className="btn btn-outline-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu dropdown-menu-end">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
  </div>
</>


    <>
  <div className="input-group mb-3">
    <button
      className="btn btn-outline-secondary"
      type="button"
      id="button-addon1"
    >
      Button
    </button>
    <input
      type="text"
      className="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
  </div>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button
      className="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      Button
    </button>
  </div>
  <div className="input-group mb-3">
    <button className="btn btn-outline-secondary" type="button">
      Button
    </button>
    <button className="btn btn-outline-secondary" type="button">
      Button
    </button>
    <input
      type="text"
      className="form-control"
      placeholder=""
      aria-label="Example text with two button addons"
    />
  </div>
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
    />
    <button className="btn btn-outline-secondary" type="button">
      Button
    </button>
    <button className="btn btn-outline-secondary" type="button">
      Button
    </button>
  </div>
</>


    <>
  <div className="input-group mb-3">
    <span className="input-group-text">$</span>
    <span className="input-group-text">0.00</span>
    <input
      type="text"
      className="form-control"
      aria-label="Dollar amount (with dot and two decimal places)"
    />
  </div>
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      aria-label="Dollar amount (with dot and two decimal places)"
    />
    <span className="input-group-text">$</span>
    <span className="input-group-text">0.00</span>
  </div>
</>


    <div className="input-group">
  <span className="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" />
  <input type="text" aria-label="Last name" className="form-control" />
</div>


    <>
  <div className="input-group mb-3">
    <div className="input-group-text">
      <input
        className="form-check-input mt-0"
        type="checkbox"
        defaultValue=""
        aria-label="Checkbox for following text input"
      />
    </div>
    <input
      type="text"
      className="form-control"
      aria-label="Text input with checkbox"
    />
  </div>
  <div className="input-group">
    <div className="input-group-text">
      <input
        className="form-check-input mt-0"
        type="radio"
        defaultValue=""
        aria-label="Radio button for following text input"
      />
    </div>
    <input
      type="text"
      className="form-control"
      aria-label="Text input with radio button"
    />
  </div>
</>


    <>
  <div className="input-group input-group-sm mb-3">
    <span className="input-group-text" id="inputGroup-sizing-sm">
      Small
    </span>
    <input
      type="text"
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
    />
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">
      Default
    </span>
    <input
      type="text"
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    />
  </div>
  <div className="input-group input-group-lg">
    <span className="input-group-text" id="inputGroup-sizing-lg">
      Large
    </span>
    <input
      type="text"
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
    />
  </div>
</>


    <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">
    @
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="addon-wrapping"
  />
</div>

    <>
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">
      @
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <span className="input-group-text" id="basic-addon2">
      @example.com
    </span>
  </div>
  <div className="mb-3">
    <label htmlFor="basic-url" className="form-label">
      Your vanity URL
    </label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3">
        https://example.com/users/
      </span>
      <input
        type="text"
        className="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <div className="form-text">
      Example help text goes outside the input group.
    </div>
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text">$</span>
    <input
      type="text"
      className="form-control"
      aria-label="Amount (to the nearest dollar)"
    />
    <span className="input-group-text">.00</span>
  </div>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Username"
      aria-label="Username"
    />
    <span className="input-group-text">@</span>
    <input
      type="text"
      className="form-control"
      placeholder="Server"
      aria-label="Server"
    />
  </div>
  <div className="input-group">
    <span className="input-group-text">With textarea</span>
    <textarea
      className="form-control"
      aria-label="With textarea"
      defaultValue={""}
    />
  </div>
</>


    <>
  <label htmlFor="customRange3" className="form-label">
    Example range
  </label>
  <input
    type="range"
    className="form-range"
    min={0}
    max={5}
    step="0.5"
    id="customRange3"
  />
</>


    <label for="customRange2" className="form-label">Example range</label>
<input type="range" className="form-range" min="0" max="5" id="customRange2"></input>

    <>
  <label htmlFor="customRange1" className="form-label">
    Example range
  </label>
  <input type="range" className="form-range" id="customRange1" disabled />
</>


    <>
  <div className="form-check form-check-reverse">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="reverseCheck1"
    />
    <label className="form-check-label" htmlFor="reverseCheck1">
      Reverse checkbox
    </label>
  </div>
  <div className="form-check form-check-reverse">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="reverseCheck2"
      disabled=""
    />
    <label className="form-check-label" htmlFor="reverseCheck2">
      Disabled reverse checkbox
    </label>
  </div>
  <div className="form-check form-switch form-check-reverse">
    <input
      className="form-check-input"
      type="checkbox"
      id="flexSwitchCheckReverse"
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
      Reverse switch checkbox input
    </label>
  </div>
</>


    <>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio1"
      defaultValue="option1"
    />
    <label className="form-check-label" htmlFor="inlineRadio1">
      1
    </label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio2"
      defaultValue="option2"
    />
    <label className="form-check-label" htmlFor="inlineRadio2">
      2
    </label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio3"
      defaultValue="option3"
      disabled=""
    />
    <label className="form-check-label" htmlFor="inlineRadio3">
      3 (disabled)
    </label>
  </div>
</>

    <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="defaultCheck1"
    />
    <label className="form-check-label" htmlFor="defaultCheck1">
      Default checkbox
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="defaultCheck2"
      disabled=""
    />
    <label className="form-check-label" htmlFor="defaultCheck2">
      Disabled checkbox
    </label>
  </div>
</>


    <>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
      Default switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
      Checked switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDisabled"
      disabled=""
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
      Disabled switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckCheckedDisabled"
      defaultChecked=""
      disabled=""
    />
    <label
      className="form-check-label"
      htmlFor="flexSwitchCheckCheckedDisabled"
    >
      Disabled checked switch checkbox input
    </label>
  </div>
</>


    <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDisabled"
      id="flexRadioDisabled"
      disabled=""
    />
    <label className="form-check-label" htmlFor="flexRadioDisabled">
      Disabled radio
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDisabled"
      id="flexRadioCheckedDisabled"
      defaultChecked=""
      disabled=""
    />
    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
      Disabled checked radio
    </label>
  </div>
</>


    <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Default radio
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Default checked radio
    </label>
  </div>
</>


    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckIndeterminateDisabled"
          disabled=""
        />
        <label
          className="form-check-label"
          htmlFor="flexCheckIndeterminateDisabled"
        >
          Disabled indeterminate checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckDisabled"
          disabled=""
        />
        <label className="form-check-label" htmlFor="flexCheckDisabled">
          Disabled checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckCheckedDisabled"
          defaultChecked=""
          disabled=""
        />
        <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
          Disabled checked checkbox
        </label>
      </div>
    </>


    <div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    defaultValue=""
    id="flexCheckIndeterminate"
  />
  <label className="form-check-label" htmlFor="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>


    <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckDefault"
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Checked checkbox
    </label>
  </div>
</>


    <select
  className="form-select"
  aria-label="Disabled select example"
  disabled=""
>
  <option selected="">Open this select menu</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>


    <select className="form-select" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

    <>
  <select
    className="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
  >
    <option selected="">Open this select menu</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
  <select
    className="form-select form-select-sm"
    aria-label=".form-select-sm example"
  >
    <option selected="">Open this select menu</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
</>


    <select className="form-select" aria-label="Default select example">
  <option selected="">Open this select menu</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

    <>
  <label htmlFor="exampleDataList" className="form-label">
    Datalist example
  </label>
  <input
    className="form-control"
    list="datalistOptions"
    id="exampleDataList"
    placeholder="Type to search..."
  />
  <datalist id="datalistOptions">
    <option value="San Francisco"></option>
    <option value="New York"></option>
    <option value="Seattle"></option>
    <option value="Los Angeles"></option>
    <option value="Chicago"></option>
  </datalist>
</>


    <>
  <label htmlFor="exampleColorInput" className="form-label">
    Color picker
  </label>
  <input
    type="color"
    className="form-control form-control-color"
    id="exampleColorInput"
    defaultValue="#563d7c"
    title="Choose your color"
  />
</>


    <>
  <div className="mb-3">
    <label htmlFor="formFile" className="form-label">
      Default file input example
    </label>
    <input className="form-control" type="file" id="formFile" />
  </div>
  <div className="mb-3">
    <label htmlFor="formFileMultiple" className="form-label">
      Multiple files input example
    </label>
    <input
      className="form-control"
      type="file"
      id="formFileMultiple"
      multiple=""
    />
  </div>
  <div className="mb-3">
    <label htmlFor="formFileDisabled" className="form-label">
      Disabled file input example
    </label>
    <input
      className="form-control"
      type="file"
      id="formFileDisabled"
      disabled=""
    />
  </div>
  <div className="mb-3">
    <label htmlFor="formFileSm" className="form-label">
      Small file input example
    </label>
    <input
      className="form-control form-control-sm"
      id="formFileSm"
      type="file"
    />
  </div>
  <div>
    <label htmlFor="formFileLg" className="form-label">
      Large file input example
    </label>
    <input
      className="form-control form-control-lg"
      id="formFileLg"
      type="file"
    />
  </div>
</>


    <form className="row g-3">
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">
      Email
    </label>
    <input
      type="text"
      readOnly=""
      className="form-control-plaintext"
      id="staticEmail2"
      defaultValue="email@example.com"
    />
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="inputPassword2"
      placeholder="Password"
    />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">
      Confirm identity
    </button>
  </div>
</form>


    <>
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
      Email
    </label>
    <div className="col-sm-10">
      <input
        type="text"
        readOnly=""
        className="form-control-plaintext"
        id="staticEmail"
        defaultValue="email@example.com"
      />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
      Password
    </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  </div>
</>


    <>
  <input
    className="form-control"
    type="text"
    placeholder="Disabled input"
    aria-label="Disabled input example"
    readonly=""
  />
  <input
    className="form-control"
    type="text"
    defaultValue="Disabled readonly input"
    aria-label="Disabled input example"
    disabled=""
    readOnly=""
  />
</>

    <>
  <input
    className="form-control form-control-lg"
    type="text"
    placeholder=".form-control-lg"
    aria-label=".form-control-lg example"
  />
  <input
    className="form-control"
    type="text"
    placeholder="Default input"
    aria-label="default input example"
  />
  <input
    className="form-control form-control-sm"
    type="text"
    placeholder=".form-control-sm"
    aria-label=".form-control-sm example"
  />
</>

    <>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Example textarea
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
    />
  </div>
</>

    <form>
  <fieldset disabled="">
    <legend>Disabled fieldset example</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">
        Disabled input
      </label>
      <input
        type="text"
        id="disabledTextInput"
        className="form-control"
        placeholder="Disabled input"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="disabledSelect" className="form-label">
        Disabled select menu
      </label>
      <select id="disabledSelect" className="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="disabledFieldsetCheck"
          disabled=""
        />
        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </fieldset>
</form>


    <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
      Password
    </label>
  </div>
  <div className="col-auto">
    <input
      type="password"
      id="inputPassword6"
      className="form-control"
      aria-describedby="passwordHelpInline" disabled
    />
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>


    <>
      <label htmlFor="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
      />
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and
        must not contain spaces, special characters, or emoji.
      </div>
    </>


    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>


    {/* FIGURES */}
    <figure className="figure">
      <img src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000" className="figure-img img-fluid rounded" alt="..." />
      <figcaption className="figure-caption">
        A caption for the above image.
      </figcaption>
    </figure>


    {/* TABLES */}

    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>


    {/* IMAGES */}

    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="rounded float-start" alt="..."/>
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="rounded float-end" alt="..."/>

    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="img-fluid img-thumbnail" alt="..."/>

    {/* TYPOGRAPHY */}
    <dl className="row">
  <dt className="col-sm-3">Description lists</dt>
  <dd className="col-sm-9">
    A description list is perfect for defining terms.
  </dd>
  <dt className="col-sm-3">Term</dt>
  <dd className="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>
  <dt className="col-sm-3">Another term</dt>
  <dd className="col-sm-9">
    This definition is short, so no extra paragraphs or anything.
  </dd>
  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd className="col-sm-9">
    This can be useful when space is tight. Adds an ellipsis at the end.
  </dd>
  <dt className="col-sm-3">Nesting</dt>
  <dd className="col-sm-9">
    <dl className="row">
      <dt className="col-sm-4">Nested definition list</dt>
      <dd className="col-sm-8">
        I heard you like definition lists. Let me put a definition list inside
        your definition list.
      </dd>
    </dl>
  </dd>
</dl>


    <ul className="list-inline">
      <li className="list-inline-item">This is a list item.</li>
      <li className="list-inline-item">And another one.</li>
      <li className="list-inline-item">But they're displayed inline.</li>
    </ul>
    <ul className="list-unstyled">
      <li>This is a list.</li>
      <li>It appears completely unstyled.</li>
      <li>Structurally, it's still a list.</li>
      <li>However, this style only applies to immediate child elements.</li>
      <li>Nested lists:
        <ul>
          <li>are unaffected by this style</li>
          <li>will still show a bullet</li>
          <li>and have appropriate left margin</li>
        </ul>
      </li>
      <li>This may still come in handy in some situations.</li>
    </ul>
    <figure className="text-center">
      <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </figcaption>
    </figure>
    <figure>
      <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </figcaption>
    </figure>
    <blockquote className="blockquote">
      <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <p><abbr title="attribute">attr</abbr></p>
    <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined.</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
    <p className="lead">
      This is a lead paragraph. It stands out from regular paragraphs.
    </p>
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
    <h1 className="display-3">Display 3</h1>
    <h1 className="display-4">Display 4</h1>
    <h1 className="display-5">Display 5</h1>
    <h1 className="display-6">Display 6</h1>
    <h3>
    Fancy display heading
    <small className="text-muted">With faded secondary text</small>
  </h3>
    <h1>h1. Bootstrap heading</h1>
    <h2>h2. Bootstrap heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
    <p className="h1">h1. Bootstrap heading</p>
    <p className="h2">h2. Bootstrap heading</p>
    <p className="h3">h3. Bootstrap heading</p>
    <p className="h4">h4. Bootstrap heading</p>
    <p className="h5">h5. Bootstrap heading</p>
    <p className="h6">h6. Bootstrap heading</p>

    {/* CSS GRID */}
    <div className="grid text-center">
      <div className="g-col-4">.g-col-4</div>
      <div className="g-col-4">.g-col-4</div>
      <div className="g-col-4">.g-col-4</div>
    </div>

    {/* GUTTERS */}
    <div className="row g-0 text-center">
      <div className="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
      <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>

    <div className="container text-center">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
        <div className="col">
          <div className="p-3">Row column</div>
        </div>
      </div>
    </div>

    <div className="container text-center">
    <div className="row g-2">
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
    </div>
  </div>

    <div className="container overflow-hidden text-center">
    <div className="row gy-5">
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
      <div className="col-6">
        <div className="p-3">Custom column padding</div>
      </div>
    </div>
  </div>

    <div className="container overflow-hidden text-center">
    <div className="row gx-5">
      <div className="col">
      <div className="p-3">Custom column padding</div>
      </div>
      <div className="col">
        <div className="p-3">Custom column padding</div>
      </div>
    </div>
  </div>
    <div className="container px-4 text-center">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3">Custom column padding</div>
        </div>
        <div className="col">
          <div className="p-3">Custom column padding</div>
        </div>
      </div>
    </div>



     {/* GRID  */}
     <div className="clearfix">
      <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

      <p>
        A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
      </p>

      <p>
        As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
      </p>

      <p>
        And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
      </p>
    </div>


     <div className="container text-center">
      <div className="row">
        <div className="col-md-4">.col-md-4</div>
        <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
      </div>
      <div className="row">
        <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
      </div>
    </div>

     <div className="container text-center">
      <div className="row">
        <div className="col order-last">First in DOM, ordered last</div>
        <div className="col">Second in DOM, unordered</div>
        <div className="col order-first">Third in DOM, ordered first</div>
      </div>
    </div>

     <div className="container text-center">
      <div className="row">
        <div className="col">First in DOM, no order applied</div>
        <div className="col order-5">Second in DOM, with a larger order</div>
        <div className="col order-1">Third in DOM, with an order of 1</div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row">
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        {/* Force next columns to break to new line */}
        <div className="w-100" />
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>
    </div>

     <div className="container">
      <div className="row">
        <div className="col-9">.col-9</div>
        <div className="col-4">
          .col-4
          <br />
          Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new
          line as one contiguous unit.
        </div>
        <div className="col-6">
          .col-6
          <br />
          Subsequent columns continue along the new line.
        </div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row justify-content-start">
        <div className="col-4">One of two columns</div>
        <div className="col-4">One of two columns</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">One of two columns</div>
        <div className="col-4">One of two columns</div>
      </div>
      <div className="row justify-content-end">
        <div className="col-4">One of two columns</div>
        <div className="col-4">One of two columns</div>
      </div>
      <div className="row justify-content-around">
        <div className="col-4">One of two columns</div>
        <div className="col-4">One of two columns</div>
      </div>
      <div className="row justify-content-between">
        <div className="col-4">One of two columns</div>
        <div className="col-4">One of two columns</div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-4">One of two columns</div>
        <div className="col-4">One of two columns</div>
      </div>
    </div>

     <div className="container text-center">
      <div className="row">
        <div className="col align-self-start">One of three columns</div>
        <div className="col align-self-center">One of three columns</div>
        <div className="col align-self-end">One of three columns</div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
      </div>
    </div>

     <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row">
        <div className="col-sm-3">Level 1: .col-sm-3</div>
        <div className="col-sm-9">
          <div className="row">
            <div className="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
            <div className="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
          </div>
        </div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>

     <div className="container text-center">
      <div className="row row-cols-4">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row row-cols-2">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>

     <div className="container text-center">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <div className="row">
        <div className="col-md-8">.col-md-8</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <div className="row">
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
      {/* Columns are always 50% wide, on mobile and desktop */}
      <div className="row">
        <div className="col-6">.col-6</div>
        <div className="col-6">.col-6</div>
      </div>
    </div>



     <div className="container text-center">
      <div className="row">
        <div className="col-sm-8">col-sm-8</div>
        <div className="col-sm-4">col-sm-4</div>
      </div>
      <div className="row">
        <div className="col-sm">col-sm</div>
        <div className="col-sm">col-sm</div>
        <div className="col-sm">col-sm</div>
      </div>
    </div>



     <div className="container text-center">
      <div className="row">
        <div className="col">col</div>
        <div className="col">col</div>
        <div className="col">col</div>
        <div className="col">col</div>
      </div>
      <div className="row">
        <div className="col-8">col-8</div>
        <div className="col-4">col-4</div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">1 of 3</div>
        <div className="col-md-auto">Variable width content</div>
        <div className="col col-lg-2">3 of 3</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col-md-auto">Variable width content</div>
        <div className="col col-lg-2">3 of 3</div>
      </div>
    </div>

     <div className="container text-center">
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col-6">2 of 3 (wider)</div>
        <div className="col">3 of 3</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col-5">2 of 3 (wider)</div>
        <div className="col">3 of 3</div>
      </div>
    </div>


     <div className="container text-center">
      <div className="row">
        <div className="col">1 of 2</div>
        <div className="col">2 of 2</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="col">3 of 3</div>
      </div>
    </div>

    <div className="container text-center">
      <div className="row">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>



        {/* CONTAINERS */}
        <div className="container-sm">100% wide until small breakpoint</div>
        <div className="container-md">100% wide until medium breakpoint</div>
        <div className="container-lg">100% wide until large breakpoint</div>
        <div className="container-xl">100% wide until extra large breakpoint</div>
        <div className="container-xxl">100% wide until extra extra large breakpoint</div>
    </>
  )
}
