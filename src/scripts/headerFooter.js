// Since the header and footer are unversal, I decided to consolidate them into a single JS file to be linked to each page

async function initHeaderFooter() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  function createHeader() {
    return `
        <header>
            <h1>Header</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/faq/">FAQ</a></li>
            </ul>
        </header>`;
  }

  function createFooter() {
    return `<p>Footer</p>`;
  }

  if (header) header.outerHTML = createHeader();
  if (footer) footer.outerHTML = createFooter();
}

initHeaderFooter();
