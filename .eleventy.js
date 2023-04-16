const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const markdownItSup = require("markdown-it-sup");
const markdownIt = require("markdown-it");

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("dateString", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    });

    eleventyConfig.addFilter("findElement", (array, propToCompare, valToCompare, propToReturn) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element[propToCompare] === valToCompare)
                return element[propToReturn];
        }
    });

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("favicon");

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.setLibrary("md", markdownIt({ html: true, typographer: true })
        .use(markdownItSup));
};
