// Since the header and footer are unversal, I decided to consolidate them into a single JS file to be linked to each page

const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

header.innerHTML = `<a href="/"><img src="/images/logo.png" alt="The Undergrad"></a>`;
