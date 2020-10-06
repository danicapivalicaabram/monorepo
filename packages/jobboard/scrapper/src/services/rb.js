const getUrls = async (browser, url) => {
  const page = await browser.newPage();

  await page.goto(url);

  return await page.evaluate(() => {
    const logoUrl = document.querySelector(".header-main-logo > img");
    const companyWebsite = document.querySelector(".header-main-link");

    return {
      urls: [...document.querySelectorAll(".opening-list > div > a")].map(
        (i) => i.href
      ),
      companyName: document
        .querySelector(".company-header-title")
        .textContent.replace("Jobs at", ""),
      logoUrl: logoUrl ? logoUrl.src : null,
      companyWebsite: companyWebsite ? companyWebsite.href : window.location.href,
    };
  });
};

const getJobs = async (browser, url) => {
  const page = await browser.newPage();
  await page.goto(url);
  return {
    ...(await page.evaluate(() => {
      return {
        title: document.querySelector(".js-job-title").textContent,
        content: document
          .querySelector(".jobdesciption")
          .innerHTML
          .replace(/h3/g, 'h2')
          .replace(/h4/g, 'h2')
          .replace(/&nbsp;/g,'')
          .replace(/<p[a-zA-Z-=0-9":;\. ]*><strong[a-zA-Z-=0-9":;\. ]*>(.*?)<\/strong><\/p>/g, "<p><h2>$1</h2></p>")
          .replace(/<div[a-zA-Z-=0-9":;\. ]*><strong[a-zA-Z-=0-9":;\. ]*>(.*?)<\/strong><\/div>/g, "<div><h2>$1</h2></div>")
          .replace(/strong/g, "a"),
        location: [
          ...document
            .querySelector("header > p.opening-info")
            .querySelectorAll("span"),
        ]
          .filter((span) => span.className)
          .map((span) => span.textContent)
          .join(),
      };
    })),
    url,
    applyUrl: `${url}?apply=true`,
  };
};

module.exports = { getUrls, getJobs };